import { createCookieSessionStorage, redirect } from "@remix-run/node";
import invariant from "tiny-invariant";

import type { User } from "~/services/db-server/user.server";
import {
  findOrCreateUserByPubKey,
  getUserById,
} from "~/services/db-server/user.server";

invariant(process.env.SESSION_SECRET, "SESSION_SECRET must be set");

export type LoginForm = {
  pubkey: string;
  inputs: {
    username?: string;
    name?: string;
    avatar?: string;
    bio?: string;
    banner?: string;
  };
};

export type AuthUser = {
  id: string;
  pubkey: string;
  firstLogin: boolean;
};

export const sessionStorage = createCookieSessionStorage({
  cookie: {
    name: "__session",
    httpOnly: true,
    path: "/",
    sameSite: "lax",
    secrets: [process.env.SESSION_SECRET],
    secure: process.env.NODE_ENV === "production",
  },
});

const USER_SESSION_KEY = "userId";

export async function getSession(request: Request) {
  const cookie = request.headers.get("Cookie");
  return sessionStorage.getSession(cookie);
}

export async function getMyUserId(
  request: Request
): Promise<User["id"] | undefined> {
  const session = await getSession(request);
  const userId = session.get(USER_SESSION_KEY);
  return userId;
}

export async function getUser(request: Request): Promise<AuthUser | null> {
  const userId = await getMyUserId(request);
  if (userId === undefined) return null;

  const user = await getUserById(userId);
  if (user) return user;

  throw await logout(request);
}

export async function requireUserId(
  request: Request,
  redirectTo: string = new URL(request.url).pathname
) {
  const userId = await getMyUserId(request);
  if (!userId) {
    const searchParams = new URLSearchParams([["redirectTo", redirectTo]]);
    throw redirect(`/login?${searchParams}`);
  }
  return userId;
}

export async function requireUser(request: Request) {
  const userId = await requireUserId(request);

  const user = await getUserById(userId);
  if (user) return user;

  throw await logout(request);
}

export async function createUserSession({
  request,
  userId,
  remember,
  redirectTo,
}: {
  request: Request;
  userId: string;
  remember: boolean;
  redirectTo: string;
}) {
  const session = await getSession(request);
  session.set(USER_SESSION_KEY, userId);
  return redirect(redirectTo, {
    headers: {
      "Set-Cookie": await sessionStorage.commitSession(session, {
        maxAge: remember
          ? 60 * 60 * 24 * 7 // 7 days
          : undefined,
      }),
    },
  });
}

export async function logout(request: Request) {
  const session = await getSession(request);
  return redirect("/", {
    headers: {
      "Set-Cookie": await sessionStorage.destroySession(session),
    },
  });
}

export async function login({
  pubkey,
  inputs,
}: LoginForm): Promise<AuthUser | null> {
  const user = await findOrCreateUserByPubKey(pubkey, inputs);
  if (!user) return null;

  return {
    id: user.id,
    pubkey: user.pubkey,
    firstLogin: user.firstLogin,
  };
}

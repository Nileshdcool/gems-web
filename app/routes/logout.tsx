import type { ActionFunction } from "@remix-run/node";
import { logout } from "../services/session.server";

export const action = (async ({ request }) => {
  return logout(request);
}) satisfies ActionFunction;

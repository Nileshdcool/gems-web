import type { ActionFunction, LoaderFunction } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import { useState } from "react";
import type { HexKey } from "~/services/nostr/types";
import type { LoginForm } from "~/services/session.server";
import { createUserSession, getUser, login } from "~/services/session.server";
import LoadingBar from "react-top-loading-bar";
import { Landing } from "~/components/landing";
import LoginOptions from "~/components/auth/login-options";

export const loader = (async ({ request }) => {
  const isUserLogin = await getUser(request);

  if (isUserLogin) {
    return redirect("/feed");
  }

  return null;
}) satisfies LoaderFunction;

export const action = (async ({ request }) => {
  const body = await request.formData();
  const pubkey = body.get("pubkey") as HexKey;
  const loginData: LoginForm = {
    pubkey,
    inputs: {},
  };

  const user = await login(loginData);

  if (!user) {
    redirect("/");
  }

  return createUserSession({
    remember: true,
    request,
    userId: user!.id,
    redirectTo: "/feed",
  });
}) satisfies ActionFunction;

export default function (): JSX.Element {
  const [progress, setProgress] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <LoadingBar
        color="#00AFAF"
        height={6}
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <Landing setShowModal={setShowModal} />
      {showModal && (
        <LoginOptions onClose={handleCloseModal} setProgress={setProgress} />
      )}
    </>
  );
}

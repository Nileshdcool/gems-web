import { redirect, type LoaderFunction } from "@remix-run/node";
import { getUser } from "~/services/session.server";

export const loader = (async ({ request }) => {
  let user = await getUser(request);

  if (!user) {
    return redirect("/login");
  }

  return redirect("/feed");
}) satisfies LoaderFunction;

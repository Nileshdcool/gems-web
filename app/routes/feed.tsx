import { useState } from "react";
import { getUser } from "~/services/session.server";
import { NewPostModal } from "~/components/feed/new-post";
import Menu from "~/components/layout/menu";
import { useLoaderData } from "@remix-run/react";
import Feed from "~/components/layout/feed";
import type { LoaderFunction } from "@remix-run/node";

export const loader = (async ({ request }) => {
  const user = await getUser(request);
  return { user };
}) satisfies LoaderFunction;

export default function (): JSX.Element {
  let { user } = useLoaderData();
  let [newPost, setNewPost] = useState<boolean>(false);

  return (
    <>
      <Menu user={user}></Menu>
      <Feed setNewPost={setNewPost} pubkey={user.pubkey} />
      {newPost && <NewPostModal close={() => setNewPost(false)} />}
    </>
  );
}

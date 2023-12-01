import * as React from "react";
import { LoaderArgs, json, redirect } from "@remix-run/node";
import { Link, useLoaderData, useLocation } from "@remix-run/react";
import useSubscribe from "~/services/nostr/subscribe";
import Posts from "~/components/feed/user-posts-list";
import { getUser } from "~/services/session.server";
import { FeedLoader } from "~/components/loader";
import { MainContainer, TabContainer } from "~/components/layout/container";
import useProfileContacts from "~/services/nostr/profiles/contacts";
import RightSideBar from "~/components/feed/right-pane";
import Menu from "~/components/layout/menu";

export async function loader({ request }: LoaderArgs) {
  const user = await getUser(request);
  if (!user) {
    redirect("/login");
  }
  return json({ user });
}

export default function UserPosts({
  suggestedFollows,
}: {
  suggestedFollows: string[];
}) {
  const { state }: any = useLocation();
  let id = state ? state?.postId : "";
  let pubkey = state ? state?.author : "";
  const { events: followingPosts } = useSubscribe({
    filters: [
      {
        kinds: [1],
        limit: 1000,
      },
    ],
    relays: [
      "wss://relay.gems.xyz",
      "wss://relay.damus.io",
      "wss://relay.snort.social",
    ],
    options: { cacheRefresh: true, force: true, closeAfterEose: false },
  });

  const { latestContactEvent } = useProfileContacts(pubkey);
  const { user } = useLoaderData();
  const authors =
    latestContactEvent?.tags
      ?.filter((tag) => tag[0] === "p")
      .map((tag) => tag[1]) || [];
  authors.push(pubkey);
  const singlePost = React.useMemo(() => {
    if (id) {
      return followingPosts.find((event) => event.id === id);
    }
    return null;
  }, [id, followingPosts]);

  return (
    <>
      <Menu user={user}></Menu>
      <MainContainer>
        <TabContainer>
          <div className="mt-1 flex justify-between">
            <Link to="/feed">
              <div className="flex py-2 text-c-lightgray">
                <h1 className="ml-3 font-bold text-c-cyan">BACK TO FEED</h1>
              </div>
            </Link>
            <div className="mr-3 flex py-2  text-c-lightgray">
              <h1 className=" font-bold text-c-cyan">THREAD</h1>
            </div>
          </div>
          <div className="mt-3 h-[1px] w-full bg-c-shadegray"></div>
          <div className="h-screen overflow-y-auto transition duration-500 scrollbar-hide ">
            {singlePost ? <Posts events={[singlePost]} /> : <FeedLoader />}
          </div>
        </TabContainer>
        <RightSideBar authors={authors} />
      </MainContainer>
    </>
  );
}

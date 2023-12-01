import type { LoaderFunction } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import { Link, useLoaderData, useParams } from "@remix-run/react";
import { Tabs } from "~/components/common/tab";
import Menu from "~/components/layout/menu";
import useProfileContacts from "~/services/nostr/profiles/contacts";
import { getUser } from "~/services/session.server";
import RightSideBar from "~/components/feed/right-pane";
import UserDetails from "~/components/user-details/user-details";
import { MainContainer, TabContainer } from "~/components/layout/container";

interface FeedProps {
  events: Event[];
}

export const loader = (async ({ request, params }) => {
  const myUserDetails = await getUser(request);
  if (!myUserDetails) {
    redirect("/login");
  }
  return { myUserDetails, params };
}) satisfies LoaderFunction;

export default function ({ events }: FeedProps): JSX.Element {
  const { myUserDetails } = useLoaderData();
  const { pubkey } = useParams();
  const { latestContactEvent } = useProfileContacts(myUserDetails.pubkey);
  const authors =
    latestContactEvent?.tags
      ?.filter((tag) => tag[0] === "p")
      .map((tag) => tag[1]) || [];

  return (
    <>
      <Menu user={myUserDetails}></Menu>
      <MainContainer>
        <TabContainer>
          <Tabs defaultSelectedTab="posts">
            <div className="flex justify-between">
              <Link to="/feed">
                <div className="flex py-2 text-c-lightgray">
                  <h1 className="ml-3 font-bold text-c-cyan">BACK TO FEED</h1>
                </div>
              </Link>
            </div>
            <UserDetails pubkey={pubkey} user={myUserDetails} />
          </Tabs>
        </TabContainer>
        <RightSideBar authors={authors} />
      </MainContainer>
    </>
  );
}

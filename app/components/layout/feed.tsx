import React, { useState } from "react";
import RightSideBar from "~/components/feed/right-pane";
import NewPost from "~/components/feed/new-post";
import FollowingFeed from "~/components/feed/following";
import GlobalFeed from "~/components/feed/global";
import useProfileContacts from "~/services/nostr/profiles/contacts";
import { Tab, TabList, TabPanel, Tabs } from "../common/tab";
import { MainContainer, TabContainer } from "./container";
import { useSearchParams } from "@remix-run/react";
import { FeedLoader } from "../loader";
import { FollowingPostsProvider } from "~/services/auth/user-context";

export default function Feed({
  setNewPost,
  pubkey,
}: {
  setNewPost: React.Dispatch<React.SetStateAction<boolean>>;
  pubkey: string;
}): JSX.Element {
  const [scrollTop, setScrollTop] = useState(0);
  const { latestContactEvent, contactEose } = useProfileContacts(pubkey);
  const authors =
    latestContactEvent?.tags
      ?.filter((tag) => tag[0] === "p")
      .map((tag) => tag[1]) || [];
  authors.push(pubkey);
  const handleScroll = (event: React.UIEvent<HTMLDivElement>) => {
    const scrollTop = event.currentTarget.scrollTop;
    setScrollTop(scrollTop);
  };
  let [searchParams] = useSearchParams();
  let tab = searchParams.get("tab") || "following";

  return (
    <FollowingPostsProvider initialTabName={tab}>
    <MainContainer>
      <TabContainer>
        <Tabs defaultSelectedTab={tab}>
          <div className="flex items-center">
            <TabList>
              <div className="mt-3 flex h-auto w-[350px] justify-between px-3">
                <Tab tab="following">FOLLOWING</Tab>
                <Tab tab="global">GLOBAL</Tab>
                <Tab tab="mypost" link={`/p/${pubkey}`}>
                  MY POSTS
                </Tab>
              </div>
            </TabList>
          </div>
          <TabPanel tab="following">
            <div className="h-screen">
              <div className="h-screen overflow-y-auto transition duration-500 scrollbar-hide ">
                <NewPost />
                {contactEose ? (
                  <FollowingFeed followings={authors} />
                ) : (
                  <FeedLoader />
                )}
              </div>
            </div>
          </TabPanel>
          <TabPanel tab="global">
            <div className="h-screen">
              <div className="h-screen overflow-y-auto transition duration-500 scrollbar-hide">
                <div className={scrollTop != 0 ? "block" : "hidden"}></div>
                <NewPost />               
                  <GlobalFeed suggestedFollows={[]} />                
              </div>
            </div>
          </TabPanel>
          <TabPanel tab="mypost" />
        </Tabs>
      </TabContainer>
      <RightSideBar authors={authors} />
    </MainContainer>
    </FollowingPostsProvider>
  );
}

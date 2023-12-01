import * as React from "react";
// import { useState } from "react";
// import Quote from "../modals/quote-relay";
// import SendinChat from "../modals/send-in-chat";
import { getUser } from "~/services/session.server";
import type { LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData, useLocation } from "@remix-run/react";
//import mask, { avatar } from "~/utils/pubkey";
import { FeedLoader } from "../loader";
// import { Post } from "./post";
// import Relays from "./relays";
import type { Event } from "nostr-tools";
//import { getReplyingToEvent, getThreadRoot } from "~/utils/nostr-event";
import useSubscribe from "~/services/nostr/subscribe";
import Posts from "./user-posts-list";
import { getReplyingToEvent } from "~/utils/nostr-event";
export async function loader({ request }: LoaderArgs) {
  const user = await getUser(request);

  return json({ user });
}

export default function UserPosts({
  suggestedFollows,
}: {
  suggestedFollows: string[];
}) {
  const { state }: any = useLocation();
  let pubkey = state ? state?.othersPubkey : "";
  const { user } = useLoaderData();

  const displayPubkey = pubkey ? pubkey : user?.pubkey;
  const myPubkey = displayPubkey;
  const filterOptions = [
    {
      name: "My Posts",
      filter: {
        kinds: [1],
        limit: 3000,
      },
      filterFn: (event: Event, myPubkey: string) => {
        // Check if the event's public key matches the provided pubkey (myPubkey)
        return event.pubkey === myPubkey && !getReplyingToEvent(event);
      },
    },
    {
      name: "All Posts",
      filter: {
        kinds: [1],
        limit: 1000,
      },
      filterFn: undefined, // Remove the filter function
    },
  ];

  // Assuming you have the user's pubkey stored somewhere (replace 'userPubkey' with the actual pubkey)

  const filter = filterOptions[0]; // Use the first filter option for "My Posts"
  const { events: followingPosts, eose } = useSubscribe({
    filters: [filter.filter],
    relays: [
      "wss://relay.gems.xyz",
      "wss://relay.damus.io",
      "wss://relay.snort.social",
    ],
    options: { cacheRefresh: true, force: true, closeAfterEose: false },
  });

  const posts = React.useMemo(() => {
    const filtered = followingPosts
      .filter((event) => {
        if (filter.filterFn) {
          return filter.filterFn(event, myPubkey); // Pass the pubkey to the filter function
        }
        return true;
      })
      .sort((a, b) => b.created_at - a.created_at); // Fixed sorting function (b was missing)

    return filtered;
  }, [followingPosts, filter, myPubkey]); // Include the pubkey in the dependencies

  return (
    <div className="px-1 py-4">
      <Tabs defaultSelectedTab="tab1">
        <TabList>
          <div className="flex items-center justify-center  px-2 py-1 text-center">
            <Tab tab="tab1">Posts</Tab>
            <Tab tab="tab2">Replies</Tab>
            <Tab tab="tab3">Favorites</Tab>
            <Tab tab="tab4">Relays</Tab>
          </div>
        </TabList>
        <div className="flex justify-center">
          <div className="mt-1 h-[1px] w-[680px] bg-c-shadegray"></div>
        </div>
        <TabPanel tab="tab1">
          {!posts || posts.length === 0 || !eose ? (
            <FeedLoader />
          ) : (
            <div className=" overflow-y-auto py-3 transition duration-500 scrollbar-hide">
              <Posts events={posts} />
            </div>
          )}
        </TabPanel>
        {/* <TabPanel tab="tab2">
          {replyEvents.length === 0 ? (
            <FeedLoader />
          ) : (
            <div className="  overflow-y-auto py-3 transition duration-500 scrollbar-hide">
              {replyEvents.map((event) => (
                <>
                  <div className="px-4">
                    <Post
                      key={event.id}
                      createdAt={event.createdAt}
                      user={{
                        pubkey: event.author,
                        name: mask(event.author),
                        image: avatar(event.author!),
                      }}
                      keyId={event.eventId}
                      content={event.content}
                      tags={event.tags}
                    />
                  </div>
                  <div className="mt-3 h-[1px] w-full bg-c-shadegray "></div>
                </>
              ))}
            </div>
          )}
        </TabPanel>
        <TabPanel tab="tab3">
          {!favorites || favorites.length === 0 ? (
            <FeedLoader />
          ) : (
            <div className=" overflow-y-auto py-3 transition duration-500 scrollbar-hide">
              {favorites.map((event) => (
                <div key={event.id}>
                  <Post
                    key={event.id}
                    createdAt={event.createdAt}
                    user={{
                      pubkey: event.author,
                      name: mask(event.author),
                      image: avatar(event.author!),
                    }}
                    keyId={event.eventId}
                    content={event.content}
                    tags={event.tags}
                    showParent={false}
                    liked={true}
                  />
                  <div className="mt-3 h-[1px] w-full bg-c-shadegray "></div>
                </div>
              ))}
            </div>
          )}
        </TabPanel>
        <TabPanel tab="tab4">
          <div className=" overflow-y-auto py-3 transition duration-500 scrollbar-hide">
            <Relays relays={relayss!} />
          </div>
        </TabPanel> */}
      </Tabs>
      {/* {quote && (
        <Quote
          close={() => setQuote(false)}
          content={selectedEvent!.content}
          pubkey={pubkey}
        />
      )}
      {sendto && <SendinChat close={() => setSendto(false)} />} */}
    </div>
  );
}

const TabsContext = React.createContext<{
  selectedTab: string | null;
  selectTab: (tab: string) => void;
}>({
  selectedTab: null,
  selectTab: (tab: string) => {
    throw new Error("should not be used without TabContext.Provider");
  },
});

function Tabs({
  children,
  defaultSelectedTab,
}: {
  children: React.ReactNode;
  defaultSelectedTab: string;
}) {
  const [selectedTab, selectTab] = React.useState(defaultSelectedTab);

  const contextValue = React.useMemo(
    () => ({
      selectTab,
      selectedTab,
    }),
    [selectedTab, selectTab]
  );

  return (
    <TabsContext.Provider value={contextValue}>
      <div>{children}</div>
    </TabsContext.Provider>
  );
}

function TabList({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}

function Tab({ children, tab }: { tab: string; children: React.ReactNode }) {
  const { selectedTab, selectTab } = React.useContext(TabsContext);

  return (
    <button
      className={
        selectedTab === tab
          ? "flex border-b-2 border-c-cyan px-10 py-3 font-Roboto font-bold text-c-cyan hover:bg-gray-900"
          : "flex justify-center px-10 py-3 font-Roboto text-c-cyann hover:bg-gray-900"
      }
      onClick={() => selectTab(tab)}
    >
      {children}
    </button>
  );
}

function TabPanel({
  children,
  tab,
}: {
  tab: string;
  children: React.ReactNode;
}) {
  const { selectedTab } = React.useContext(TabsContext);

  if (selectedTab !== tab) return null;

  return <div>{children}</div>;
}

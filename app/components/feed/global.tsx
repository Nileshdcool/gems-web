import type { Event } from "nostr-tools";
import { FeedLoader } from "../loader";
import Posts from "./user-posts-list";
import { useSubscribe } from "nostr-hooks";
import { getReplyingToEvent } from "~/utils/nostr-event";
import { useEffect, useState } from "react";
import FeedBtnLoader from "./feed-btn-loader";
import { useFollowingPostsContext } from "~/services/auth/user-context";

export default function GlobalFeed({
  suggestedFollows,
}: {
  suggestedFollows: string[];
}) {
  const tabName = "GLOBAL"; 
  const { contextFollowingPosts, setContextFollowingPosts } =
    useFollowingPostsContext();

  const postsForCurrentTab = contextFollowingPosts[tabName] || [];

  const [uniqueFollowingPosts, setUniqueFollowingPosts] =
    useState<Event[]>(postsForCurrentTab);
  const filterOptions = [
    {
      name: "Posts",
      filter: {
        kinds: [1],
        limit: 5,
      },
      filterFn: (event: Event) => !getReplyingToEvent(event),
    },
    {
      name: "Posts & replies",
      filter: {
        kinds: [1, 6],
        limit: 5,
      },
    },
  ];
  const filter = filterOptions[1];

  const {
    events: followingPosts,
    eose,
    invalidate,
    loadMore,
  } = useSubscribe({
    filters: [filter.filter],
    relays: [
      "wss://relay.gems.xyz",
      "wss://relay.damus.io",
      "wss://relay.snort.social"
    ],
    options: {
      batchingInterval: 5000,
      enabled: true,
      cacheRefresh: true,
      force: true,
      closeAfterEose: true,
    },
  });

  useEffect(() => {
    if (eose) {
      if (followingPosts && followingPosts.length > 0) {
        const latestTimestamp =
          uniqueFollowingPosts.length > 0
            ? uniqueFollowingPosts[0].created_at
            : 0;
        const uniqueIds = new Set(uniqueFollowingPosts.map((post) => post.id));
        const newPosts = followingPosts.filter(
          (post) => post.created_at > latestTimestamp && !uniqueIds.has(post.id)
        );
        const combinedPosts = [...uniqueFollowingPosts, ...newPosts];

        const sortedPosts = combinedPosts.sort(
          (a, b) => b.created_at - a.created_at
        );

        setUniqueFollowingPosts(sortedPosts);
        setContextFollowingPosts(sortedPosts, tabName);
      }
    }
  }, [eose]);

  const handleButtonClick = async (module: string) => {
    if (module == "ShowRecent") {
      invalidate();
    } else {
      // loadMore();
      // const lastTimestamp =
      //   uniqueFollowingPosts.length > 0
      //     ? uniqueFollowingPosts[uniqueFollowingPosts.length - 1].created_at
      //     : 0;
      // const uniqueIds = new Set(uniqueFollowingPosts.map((post) => post.id));
      // const newPosts = followingPosts.filter(
      //   (post) => post.created_at > lastTimestamp && !uniqueIds.has(post.id)
      // );
      // const combinedPosts = [...uniqueFollowingPosts, ...newPosts];
      // const sortedPosts = combinedPosts.sort(
      //   (a, b) => b.created_at - a.created_at
      // );
      // setUniqueFollowingPosts(sortedPosts);
      // setContextFollowingPosts(sortedPosts, tabName);
    }
  };

  return (
    <>
      {!uniqueFollowingPosts || uniqueFollowingPosts.length === 0 ? (
        <FeedLoader />
      ) : (
        <div>
          {uniqueFollowingPosts.length > 0 ? (
            <FeedBtnLoader
              buttonText={!eose ? "LOADING" : "SHOW RECENT POSTS"}
              module="ShowRecent"
              onClick={handleButtonClick}
            />
          ) : (
            ""
          )}
          {/* show recent button */}

          <div className="mt-2 flex justify-center">
            <div className="h-[1px] w-[680px] bg-c-shadegray "></div>
          </div>
          <Posts events={uniqueFollowingPosts} />
          {uniqueFollowingPosts.length > 0 ? (
            <div className="">
              <div className="mt-2 flex justify-center">
                <div className="h-[1px] w-[680px] bg-c-shadegray "></div>
              </div>
              <FeedBtnLoader
                buttonText="LOAD MORE"
                module="loadMore"
                onClick={handleButtonClick}
              />
              <div className="mt-2 flex justify-center">
                <div className="h-[1px] w-[680px] bg-c-shadegray "></div>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      )}
    </>
  );
}

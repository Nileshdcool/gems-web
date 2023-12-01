import { FeedLoader } from "../loader";
import Posts from "./user-posts-list";
import { getReplyingToEvent, getThreadRoot } from "~/utils/nostr-event";
import type { Event } from "nostr-tools";
import useSubscribe from "~/services/nostr/subscribe";
import { useMemo } from "react";

export default function FollowingFeed({
  followings,
}: {
  followings: Array<string>;
}) {
  const filterOptions = [
    {
      name: "Posts",
      filter: {
        kinds: [1],
        authors: followings,
        limit: 100,
      },
      filterFn: (event: Event) => !getReplyingToEvent(event),
    },
    {
      name: "Posts & replies",
      filter: {
        kinds: [1, 6],
        authors: followings,
        limit: 100,
      },
      filterFn: (event: Event) => getThreadRoot(event),
    },
  ];
  const filter = filterOptions[1];
  const { events: followingPosts, eose } = useSubscribe({
    filters: [filter.filter],
    relays: [
      "wss://relay.gems.xyz",
      "wss://relay.damus.io",
      "wss://relay.snort.social",
    ],
    options: { cacheRefresh: true, force: true, closeAfterEose: false },
  });

  const posts = useMemo(() => {
    const filtered = followingPosts
      .filter((event) => {
        if (filter.filterFn) {
          return filter.filterFn(event);
        }
        return true;
      })
      .sort((a, b) => b.created_at - a.created_at);
    return filtered;
  }, [followingPosts, filter]);
  return (
    <>
      {!posts || posts.length === 0 || !eose ? (
        <FeedLoader />
      ) : (
        <Posts events={posts} />
      )}
    </>
  );
}

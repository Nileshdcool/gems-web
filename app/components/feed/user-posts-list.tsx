import { Post } from "./post";
import type { Event } from "nostr-tools";
import { PostContainer } from "./post-container";

interface Props {
  events: Event[];
}

export default function Posts({ events }: Props) {
  return (
    <div className="flex flex-col ">
      {events.map((event) => (
        <PostContainer key={event.id}>
          <Post postId={event.id} />
        </PostContainer>
      ))}
    </div>
  );
}

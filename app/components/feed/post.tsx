import { Link } from "@remix-run/react";
import moment from "moment";
import mask from "~/utils/pubkey";
import PostAction from "./post-action";
import PostOption from "./post-option";
import Content from "./content";
import AvatarImage from "../avatar";
import useProfileContent from "~/services/nostr/profiles/content";
import usePostEvent from "~/services/nostr/events/posts";
import { PostLoader } from "../loader";
import { useState } from "react";
import { Button } from "../common/button";

export interface Props {
  postId: string;
  showParent?: boolean;
  showChild?: boolean;
}
export function Post({ postId }: Props) {
  const { postEvent, createdAt } = usePostEvent(postId);
  const { displayName, name, picture, about } = useProfileContent(
    postEvent?.pubkey || ""
  );
  const [showModal, setShowModal] = useState(false);

  if (!postEvent) {
    return <PostLoader />;
  }
  const handleHover = () => {
    setShowModal(true);
  };
  const handleLeave = () => {
    setShowModal(false);
  };
  return (
    <>
      <div className="flex flex-col py-1">
        <div className=" w-4/5">
          <div className="show py-1 ">
            <div className="flex flex-col">
              <div className="flex w-full py-1">
                <div className="flex w-2/3 ">
                  <Link
                    to={`/p/${postEvent.pubkey}`}
                    state={{ othersPubkey: postEvent.pubkey }}
                    key={postEvent.pubkey}
                  >
                    <div className="py-1">
                      <AvatarImage
                        pubkey={postEvent.pubkey}
                        userData={{ picture: picture }}
                        className="h-12 w-14  rounded-md border border-gray-700"
                      />
                    </div>
                  </Link>
                  <div className=" ml-3 flex  w-full">
                    <div className="flex w-5/6">
                      <Link
                        to={`/p/${postEvent.pubkey}`}
                        state={{ othersPubkey: postEvent.pubkey }}
                        key={postEvent.pubkey}
                      >
                        <div className=" flex flex-col">
                          <h1
                            className="ml-3 text-base font-bold text-c-lightgray hover:text-c-cyan"
                            onMouseEnter={handleHover}
                            onMouseLeave={handleLeave}
                          >
                            {displayName ?? mask(postEvent.pubkey)}
                          </h1>
                          <div
                            className="relative inline-block "
                            onMouseEnter={handleHover}
                            onMouseLeave={handleLeave}
                          >
                            {showModal && (
                              <div className=" h-min-[100px] absolute w-[250px] rounded-lg border bg-c-gray py-4  shadow-lg">
                                <div className=" mt-1 flex px-2">
                                  <AvatarImage
                                    pubkey={postEvent.pubkey}
                                    userData={{ picture: picture }}
                                    className="h-12 w-14  rounded-md border border-gray-500"
                                  />
                                  <div className="-mt-7 ml-3">
                                    <p className="ml-1 mt-7 text-sm text-c-whitee">
                                      {displayName ?? mask(postEvent.pubkey)}
                                    </p>
                                    <p className="ml-1 text-xs text-c-gray">
                                      @{name}{" "}
                                    </p>
                                  </div>
                                </div>
                                <div className="mt-2 flex">
                                  <h1 className="w-full break-words px-4 font-Roboto text-sm text-c-lightgray">
                                    {about}
                                  </h1>
                                </div>

                                <div className="mt-4 flex items-center justify-between px-5 font-Roboto text-sm text-c-gray">
                                  <h1>
                                    Follower :<span className="">20</span>
                                  </h1>
                                  <h2>
                                    Following :<span className="">100</span>
                                  </h2>
                                </div>
                                <div className="flex justify-center">
                                  <Button
                                    size="small"
                                    color="slate"
                                    className="ml-3 mt-3 px-5 text-black"
                                    name="_action"
                                    value={"FOLLOW"}
                                  >
                                    Follow
                                  </Button>
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      </Link>
                      <h2
                        className={
                          displayName
                            ? "ml-3 text-base text-c-lightgray  "
                            : "hidden"
                        }
                      >
                        {displayName ? null : mask(postEvent.pubkey)}
                      </h2>
                      <p
                        className={
                          displayName ? "ml-3 text-base text-c-gray" : "hidden"
                        }
                      >
                        @{name}
                      </p>
                    </div>
                    <p className="mt-1 flex w-1/6 justify-end text-xs text-c-gray">
                      {moment(
                        moment
                          .unix(postEvent.created_at)
                          .format("MM/DD/YYYY h:mm A")
                      ).fromNow(true)}
                    </p>
                  </div>
                </div>
                <div className="hidee w-1/3  cursor-pointer">
                  <PostOption />
                </div>
              </div>
            </div>
            <Link
              to={`/p/thread/${postEvent.id}`}
              state={{
                author: postEvent.pubkey,
                content: postEvent.content,
                postId: postEvent.id,
              }}
            >
              <>
                <Content content={postEvent.content} />
              </>
            </Link>
          </div>
          <PostAction
            content={postEvent.content}
            user={{
              pubkey: postEvent.pubkey,
              name: mask(displayName ?? postEvent.pubkey),
              image: "",
            }}
            keyId={postEvent.pubkey}
            createdAt={createdAt}
            tags={postEvent.tags}
            pub={postEvent.pubkey}
          />
        </div>
      </div>
    </>
  );
}

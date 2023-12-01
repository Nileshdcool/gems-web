import mask from "~/utils/pubkey";
import { type Event as NostrEvent, getEventHash } from "nostr-tools";
import moment from "moment";
import type { LoaderArgs } from "@remix-run/node";
import { getUser } from "~/services/session.server";
import { useLoaderData } from "@remix-run/react";
import type { HexKey } from "~/services/nostr/types";
import { useNostr } from "~/services/nostr/core";
import { useState } from "react";
import AvatarImage from "../avatar";
import useProfileContent from "~/services/nostr/profiles/content";

export async function loader({ request }: LoaderArgs) {
  const user = await getUser(request);

  return user;
}

type SuggestedFollowsProps = {
  suggestedFollows: any;
};

declare const window: any;
export default function SuggestedFollows({
  suggestedFollows,
}: SuggestedFollowsProps) {
  return (
    <>
      {suggestedFollows.map((suggestion: any) => {
        return <SuggestedProfiles pubkey={suggestion} key={suggestion} />;
      })}
    </>
  );
}

function SuggestedProfiles({ pubkey }: { pubkey: string }) {
  const { publish } = useNostr();
  const { user } = useLoaderData();
  const userPubkey = user?.publicKey as HexKey;
  const [followButton, setFollowButton] = useState("Follow");
  const { displayName, picture, name, about } = useProfileContent(pubkey);

  const follow = async (e: any) => {
    const followings = [];
    const tags = followings.map((following: any) => ["p", following]);
    tags.push(["p", pubkey]);
    const event: NostrEvent = {
      content: "",
      kind: 3,
      created_at: moment().unix(),
      pubkey: userPubkey,
      tags: tags,
    };
    event.id = getEventHash(event);
    const signatureOrEvent = await window.nostr.signEvent(event);

    switch (typeof signatureOrEvent) {
      case "string":
        event.sig = signatureOrEvent;
        break;
      case "object":
        event.sig = signatureOrEvent.sig;
        break;
      default:
        throw new Error("Failed to sign with Nostr extension.");
    }

    publish(event);
    setFollowButton("Followed");
  };

  return (
    <div className="py-1 ">
      <div className="flex items-center justify-between">
        <div className="flex">
          <div className="py-1">
            <AvatarImage
              pubkey={pubkey}
              userData={{ picture: picture }}
              className="h-11 w-11 rounded-md border border-gray-500"
            />
          </div>
          <div className="ml-3 flex flex-col">
            <div className=" flex items-center justify-between">
              <h1 className="font-regular font-Roboto text-sm text-c-lightgray">
                {displayName} @{name}
              </h1>
              <button
                name="follow"
                onClick={follow}
                className="rounded-md bg-c-lightergray px-2 py-1 text-sm"
              >
                {followButton}
              </button>
            </div>
            <p className="text-sm text-c-lightgray">{mask(pubkey)}</p>
            <p className="mt-1 w-[160px] text-xs text-c-lightgray">{about}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

import type { SetStateAction } from "react";
import { useState } from "react";
import { useLoaderData } from "@remix-run/react";
import { IconUploadImage } from "public/assets/icons";
import { type Event as NostrEvent, getEventHash } from "nostr-tools";
import moment from "moment";
import type { LoaderArgs } from "@remix-run/node";
import { getUser } from "~/services/session.server";
import type { HexKey } from "~/services/nostr/types";
import { useNostr } from "~/services/nostr/core";
import { toast } from "react-toastify";
import { useProfile } from "~/services/nostr/profile";
import mask from "~/utils/pubkey";

export async function loader({ request }: LoaderArgs) {
  const user = await getUser(request);
  return user;
}
declare const window: any;

interface props {
  closed: () => void;
  keyId: any;
  pub: string;
}

export default function ReplyTextArea({ closed, keyId, pub }: props) {
  const [mes, setMessage] = useState("");
  const { publish } = useNostr();
  const [close, setClose] = useState(false);
  const handleChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setMessage(event.target.value);
  };

  const profile = useLoaderData();
  const userpubkey = profile?.user?.publicKey as HexKey;
  const pubkey = pub;
  const postToRelayAndDb = async () => {
    const message = mes;
    if (!message) {
      alert("No message provided!");
      return;
    }

    const event: NostrEvent = {
      content: message,
      kind: 1,
      tags: [
        ["e", "reply", keyId],
        ["p", pub],
      ],
      created_at: moment().unix(),
      pubkey: userpubkey,
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
    setMessage("");
    toast.success("Reply sent!");
  };

  function atPost() {
    return (
      <>
        <button
          onClick={postToRelayAndDb}
          className="rounded-md bg-c-cyan px-2 py-1 font-Roboto text-c-whitee"
        >
          Send
        </button>
      </>
    );
  }
  const { data: userData } = useProfile({
    pubkey,
  });
  return (
    <>
      <div className={`${close ? "h-130  " : "h-[60px] duration-300   "}`}>
        <div className="mt-2 flex  px-2">
          <div className="">
            {!profile?.user?.avatar ? (
              <img
                src={`https://robohash.org/${userpubkey}/?set=set3`}
                alt=""
                className="h-12 w-12 rounded-md"
              />
            ) : (
              <img
                src={profile?.user?.avatar}
                alt=""
                className="h-12 w-12 rounded-md"
              />
            )}
          </div>
          <div className="ml-3 flex justify-center ">
            <div className=" mb-2 w-full ">
              <div className="">
                <p
                  className={`ml-3 text-sm text-c-lightgray duration-300 ${
                    !close && "scale-0"
                  }`}
                >
                  Replying to{" "}
                  <span className="text-c-cyan">
                    @{userData?.name ? userData?.name : mask(pubkey)}
                  </span>
                </p>
                <div className="  flex min-h-[20px] justify-between">
                  <textarea
                    placeholder={"Relay your reply"}
                    className="max-h-[200px] min-h-[50px] w-full resize border-none bg-transparent font-Roboto text-sm text-c-lightbrown focus-within:ring-0"
                    onChange={handleChange}
                    value={mes}
                    id="message"
                    name="message"
                    onClick={() => setClose(!close)}
                  />
                  <div className=" mt-2 flex h-[30px] justify-end">
                    {atPost()}
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="w-[550px] "></div>
              </div>
              <div
                className={`text-centerduration-300 flex items-center justify-between ${
                  !close && "scale-0"
                }`}
              >
                <div className="flex h-[28px] px-5 py-1">
                  <div className=" text-c-lightbrown">
                    <IconUploadImage className="mr-3" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

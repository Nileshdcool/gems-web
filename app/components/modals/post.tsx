import { IconCircleX, IconUploadImage, IconXSize } from "public/assets/icons";
import { type Event as NostrEvent, getEventHash } from "nostr-tools";
import moment from "moment";
import type { HexKey } from "~/services/nostr/types";
import { useNostr } from "~/services/nostr/core";
import type { SetStateAction } from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import { avatar } from "~/utils/pubkey";
import { useUser } from "~/services/auth/user-context";

interface props {
  close: () => void;
}

declare const window: any;

export default function ReplyModal({ close }: props) {
  const [message, setMessage] = useState("");
  const [fileUrl, setFileUrl] = useState("");
  const [uploading, setUploading] = useState<boolean>(false);
  const { publish } = useNostr();
  const loggedInUser = useUser();
  let pubkey = loggedInUser!.pubkey as HexKey;

  const handleChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setMessage(event.target.value);
  };

  const postToRelayAndDb = async () => {
    const event: NostrEvent = {
      content: message,
      kind: 1,
      tags: [],
      created_at: moment().unix(),
      pubkey: pubkey,
    };

    event.id = getEventHash(event);
    let signatureOrEvent = await window.nostr.signEvent(event);
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
    setMessage("");
    setFileUrl("");
    publish(event);
    close();
    toast.success("Post submitted!");
  };

  const [error, setError] = useState<boolean>(false);

  async function uploadFile(files: FileList | null) {
    if (files) {
      const fileRef = files[0] || "";
      if (!fileRef) {
        setError(true);
        return;
      }
      const data = new FormData();
      data.append("file", fileRef);
      const res = await fetch("/api/storage", {
        method: "POST",
        body: data,
      });
      const json = await res.json();
      setFileUrl(json.data.url);
      setMessage(message + json.data.url);
      setUploading(false);
    }
  }

  function atPost() {
    return (
      <>
        <button
          name="newPost"
          value={"NEW_POST"}
          onClick={postToRelayAndDb}
          className="rounded-md bg-c-cyan px-4 py-1 font-Roboto text-base text-c-whitee hover:bg-cyan-600"
        >
          Post
        </button>
      </>
    );
  }

  const handleDelete = () => {
    setFileUrl("");
    setMessage("");
  };

  const renderImagePreview = () => {
    if (fileUrl) {
      return (
        <div className=" flex  rounded-lg">
          <img
            src={fileUrl}
            alt="Preview"
            className=" h-[150px] w-[150px] rounded-lg"
          />
          <div
            className=" -ml-8 mt-2 flex cursor-pointer justify-end "
            onClick={handleDelete}
          >
            <div className="text-c-darkgray">
              <IconXSize className="" />
            </div>
          </div>
        </div>
      );
    } else {
      return <div></div>;
    }
  };
  return (
    <div className="">
      <div className="absolute inset-0 flex items-center  justify-center bg-black bg-opacity-30 backdrop-blur-sm ">
        <div className="max-h-[full] min-h-[100px] w-[550px] rounded-lg  bg-c-gray py-2 font-Roboto text-xl text-c-lightgray">
          <div className="mt-3 px-4">
            <div
              className="flex cursor-pointer items-center justify-end"
              onClick={close}
            >
              <IconCircleX />
            </div>
            <div className="">
              <img
                src={avatar(pubkey)}
                alt=""
                className="h-12 w-12 rounded-full"
              />
            </div>

            <div className="flex justify-center ">
              <div className="  mb-2 ">
                <div className=" ml-10 mt-2">
                  <label htmlFor="text" className="sr-only"></label>
                  <textarea
                    placeholder="Whats on your mind?"
                    className="max-h-[300px] min-h-[100px] w-full resize border-none bg-transparent  text-base focus-within:ring-0"
                    onChange={handleChange}
                    value={message}
                    id="message"
                    name="message"
                  />
                  <div>{renderImagePreview()}</div>
                </div>
                <div className="flex justify-center">
                  <div className="h-[1px] w-[520px] bg-c-shadegray"></div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex h-[28px] px-5 py-1">
                    <div className="cursor-pointer text-c-lightbrown">
                      <label htmlFor="fileUpload" className="cursor-pointer">
                        <IconUploadImage className="mr-3 cursor-pointer " />
                      </label>
                      <input
                        type="file"
                        id="fileUpload"
                        accept="image/*"
                        onChange={(e) => uploadFile(e.target.files)}
                        multiple
                        className="hidden"
                      />
                    </div>
                  </div>
                  <div className="mt-1 px-5">{atPost()}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

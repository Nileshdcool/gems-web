import { useEffect } from "react";
import { useState } from "react";
import { useLoaderData } from "@remix-run/react";
import { IconCircleX, IconUploadImage, IconXSize } from "public/assets/icons";
import { Event } from "nostr-tools";
import { getEventHash } from "nostr-tools";
import moment from "moment";
import { HexKey } from "~/services/nostr/types";
import { useNostr } from "~/services/nostr/core";
import { toast } from "react-toastify";
import { useUser } from "~/services/auth/user-context";
import { avatar } from "~/utils/pubkey";
import { getUser } from "~/services/session.server";
import { json, type LoaderFunction } from "@remix-run/node";
import AvatarImage from "../avatar";
import useProfileContent from "~/services/nostr/profiles/content";

declare const window: any;

interface Props {
  close: () => void;
}

export const loader: LoaderFunction = async ({ request }) => {
  return json({ user: await getUser(request) });
};

export default function NewPost() {
  const [message, setMessage] = useState("");
  const [fileUrl, setFileUrl] = useState("");
  const [uploading, setUpLoading] = useState(true);
  const { publish } = useNostr();
  const { user } = useLoaderData();
  const { picture } = useProfileContent(user?.pubkey);
  const [error, setError] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  async function uploadFile(files: FileList | null) {
    if (files) {
      const fileRef = files[0] || "";
      if (!fileRef) {
        setError(true);
        return;
      }
      setSelectedImage(fileRef);
      const data = new FormData();
      data.append("file", fileRef);
      const res = await fetch("/api/storage", {
        method: "POST",
        body: data,
      });
      const json = await res.json();
      setFileUrl(json.data.url);
      setMessage(message + json.data.url);
      setUpLoading(false);
    }
  }

  function atPost() {
    return (
      <>
        <button
          type="submit"
          name="_action"
          value='{"NEW_POST"}'
          className={`rounded-md px-4 py-1 font-Roboto ${
            !message || !message.trim()
              ? "cursor-not-allowed bg-gray-400"
              : "bg-c-cyan"
          } text-c-white`}
          disabled={!message || !message.trim()}
        >
          Post
        </button>
      </>
    );
  }

  const handleDelete = () => {
    setSelectedImage(null);
    setFileUrl("");
    setMessage("");
  };

  const renderImagePreview = () => {
    if (fileUrl) {
      return (
        <div className="flex rounded-lg">
          <img
            src={fileUrl}
            alt="Preview"
            className="h-[150px] w-[150px] rounded-lg"
          />
          <div
            className="-ml-8 mt-2 flex cursor-pointer justify-end"
            onClick={handleDelete}
          >
            <div className="text-c-darkgray">
              <IconXSize className="" />
            </div>
          </div>
        </div>
      );
    } else if (selectedImage) {
      return (
        <div className="flex rounded-lg">
          <img
            src={URL.createObjectURL(selectedImage)}
            alt="Preview"
            className="h-[150px] w-[150px] rounded-lg"
          />
          <div
            className="-ml-8 mt-2 flex cursor-pointer justify-end"
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

  const postToRelay = async (e: React.FormEvent<HTMLFormElement>) => {
    const event: any = {
      content: message,
      kind: 1,
      tags: [],
      created_at: moment().unix(),
      pubkey: pubkey,
    };

    if (selectedImage) {
      const data = new FormData();
      data.append("file", selectedImage);
      const res = await fetch("/api/storage", {
        method: "POST",
        body: data,
      });
      const json = await res.json();
      event.content += json.data.url;
    }

    event.id = getEventHash(event);
    e.preventDefault();
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
    setMessage("");
    setFileUrl("");
    setSelectedImage(null);
    publish(event);

    toast.success("Post submitted!");
  };

  return (
    <div className="">
      <div className="mt-2 flex justify-center">
        <div className="h-[1px] w-[680px] bg-c-shadegray "></div>
      </div>
      <div className="mt-3 rounded-md border border-c-cyan px-4">
        <div className="mt-3 flex px-2">
          <div className="">
            <AvatarImage
              pubkey={user?.pubkey}
              userData={{ picture: picture }}
              className="h-12 w-12 rounded-md"
            />
          </div>
          <div className="ml-3 flex justify-center">
            <div className=" mb-2 w-[520px] ">
              <div className="min-h-[20px]">
                <label htmlFor="text" className="sr-only"></label>
                <textarea
                  placeholder="Whats on your mind?"
                  className="min-h-[50px] w-full border-none bg-transparent text-sm focus-within:ring-0"
                  onChange={(event) => setMessage(event.target.value)}
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
                      <IconUploadImage className="mr-3 cursor-pointer" />
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
                <div className="mt-1 px-5">
                  <form
                    onSubmit={(event) => {
                      event.preventDefault();
                      postToRelay(event);
                    }}
                    method="post"
                  >
                    {atPost()}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-2 flex justify-center">
        <div className="h-[1px] w-[680px] bg-c-shadegray"></div>
      </div>
    </div>
  );
}

export function NewPostModal({ close }: Props) {
  const [message, setMessage] = useState("");
  const [fileUrl, setFileUrl] = useState("");
  const [uploading, setUploading] = useState<boolean>(false);
  const { publish } = useNostr();
  const user = useUser();
  const pubkey = user.pubkey as HexKey;
  const [error, setError] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  async function uploadFile(files: FileList | null) {
    if (files) {
      const fileRef = files[0] || "";
      if (!fileRef) {
        setError(true);
        return;
      }
      setSelectedImage(fileRef);
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
          type="submit"
          name="_action"
          value='{"NEW_POST"}'
          className={`rounded-md px-4 py-1 font-Roboto ${
            !message || !message.trim()
              ? "cursor-not-allowed bg-gray-400"
              : "bg-c-cyan"
          } text-c-white`}
          disabled={!message || !message.trim()}
        >
          Post
        </button>
      </>
    );
  }

  const handleDelete = () => {
    setSelectedImage(null);
    setFileUrl("");
    setMessage("");
  };

  const renderImagePreview = () => {
    if (fileUrl) {
      return (
        <div className="flex rounded-lg">
          <img
            src={fileUrl}
            alt="Preview"
            className="h-[150px] w-[150px] rounded-lg"
          />
          <div
            className="-ml-8 mt-2 flex cursor-pointer justify-end"
            onClick={handleDelete}
          >
            <div className="text-c-darkgray">
              <IconXSize className="" />
            </div>
          </div>
        </div>
      );
    } else if (selectedImage) {
      return (
        <div className="flex rounded-lg">
          <img
            src={URL.createObjectURL(selectedImage)}
            alt="Preview"
            className="h-[150px] w-[150px] rounded-lg"
          />
          <div
            className="-ml-8 mt-2 flex cursor-pointer justify-end"
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

  async function postToRelayAndDb() {
    const event: Event = {
      content: message,
      kind: 1,
      tags: [],
      created_at: moment().unix(),
      pubkey: pubkey,
    };

    if (selectedImage) {
      const data = new FormData();
      data.append("file", selectedImage);
      const res = await fetch("/api/storage", {
        method: "POST",
        body: data,
      });
      const json = await res.json();
      event.content += json.data.url;
    }

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
    setMessage("");
    setFileUrl("");
    setSelectedImage(null);
    publish(event);
    close();
    toast.success("Post submitted!");
  }

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
              <AvatarImage
                pubkey={displayPubkey}
                userData={{ picture: picture }}
                className="h-12 w-12 rounded-full"
                alt=""
              />
            </div>

            <div className="flex justify-center ">
              <div className="  mb-2 ">
                <div className=" ml-10 mt-2">
                  <label htmlFor="text" className="sr-only"></label>
                  <textarea
                    placeholder="Whats on your mind?"
                    className="max-h-[300px] min-h-[100px] w-full resize border-none bg-transparent  text-base focus-within:ring-0"
                    onChange={(event) => setMessage(event.target.value)}
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
                  <div className="mt-1 px-5">
                    <button
                      type="submit"
                      name="_action"
                      value='{"NEW_POST"}'
                      className={`rounded-md px-4 py-1 font-Roboto ${
                        !message || !message.trim()
                          ? "cursor-not-allowed bg-gray-400"
                          : "bg-c-cyan"
                      } text-c-white`}
                      disabled={!message || !message.trim()}
                      onClick={postToRelayAndDb}
                    >
                      Post
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

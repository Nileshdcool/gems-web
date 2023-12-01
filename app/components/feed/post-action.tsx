import { Fragment, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import {
  IconLink,
  IconReplyBlock,
  IconRelay,
  IconShares,
  IconHeart,
  IconHeartFilled,
  IconRelayed,
} from "public/assets/icons";
import Quote from "../modals/quote-relay";
import SendinChat from "../modals/send-in-chat";
import ReplyTextArea from "./post-reply";
import type { Event } from "nostr-tools";
import { getEventHash } from "nostr-tools";
import moment from "moment";
import { useNostr } from "~/services/nostr/core";
import { toast } from "react-toastify";
import { useUser } from "~/services/auth/user-context";

export interface Props {
  content: string;
  keyId: string;
  user: {
    name: string;
    image: string;
    pubkey: string;
  };
  tags: any;
  createdAt: any;
  liked?: boolean;
  relayed?: boolean;
  pub: string;
}

declare const window: any;

export default function PostAction({
  keyId,
  content,
  user,
  tags,
  createdAt,
  liked = false,
  relayed = false,
  pub,
}: Props) {
  const [reply, setReply] = useState<boolean>(false);
  const [quote, setQuote] = useState<boolean>(false);
  const [sendto, setSendto] = useState<boolean>(false);
  const [heart, setHeart] = useState<boolean>(liked);
  const [doRelayed, setDoRelayed] = useState<boolean>(relayed);
  const { publish } = useNostr();
  const loggedInUser = useUser();

  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
  }

  const pubkey = pub;
  const handleFavorite = async () => {
    const event: Event = {
      content: "",
      kind: 1,
      tags: [
        ["e", "like", keyId],
        ["p", user.pubkey],
      ],
      created_at: moment().unix(),
      pubkey: user!.pubkey,
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
    await createFavorite({
      eventId: keyId,
      author: user.pubkey,
      content: content,
      tags: tags,
      createdAt: createdAt,
    });
    publish(event);
    toast.success("Liked!");
    setHeart(true);
  };

  const handleClicked = () => {
    setQuote(true);
  };

  return (
    <div>
      <>
        <div className="flex flex-row">
          <div className="">
            <div className="font-regular ml-[60px] mt-2 flex font-Roboto text-base text-c-lightgray">
              <Menu as="div" className=" text-left">
                <Menu.Button
                  className="flex w-full items-center justify-center text-sm text-c-gray "
                  onClick={() => {
                    setReply(true);
                  }}
                >
                  <IconReplyBlock />
                </Menu.Button>
              </Menu>
            </div>
          </div>
          <div className="font-regular mt-2 flex font-Roboto text-base text-c-lightgray">
            <Menu as="div" className=" text-left">
              <Menu.Button className="ml-6 flex w-full items-center justify-center text-sm text-c-gray">
                {doRelayed ? (
                  <div className="">
                    <IconRelayed />
                  </div>
                ) : (
                  <div className="text-c-gray">
                    <IconRelay className="" />
                  </div>
                )}
              </Menu.Button>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <div className="relative inline-block">
                  <Menu.Items className="absolute w-36 origin-top-right cursor-pointer divide-y divide-gray-100 rounded-md border border-c-shadergray bg-c-gray">
                    <div className="py-1">
                      <Menu.Item>
                        {({ active }) => (
                          <div
                            className={classNames(
                              active
                                ? "bg-c-gray text-c-lightgray hover:bg-c-darkgray"
                                : "text-c-lightgray",
                              "group flex items-center px-4 py-2 text-sm"
                            )}
                          >
                            <IconRelay />
                            <p className="ml-2">Relay</p>
                          </div>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <div
                            className={classNames(
                              active
                                ? "bg-c-gray text-c-lightgray hover:bg-c-darkgray"
                                : "text-c-lightgray",
                              "group flex items-center px-4 py-2 text-sm"
                            )}
                            onClick={() => {
                              handleClicked();
                            }}
                          >
                            <div className="flex">
                              <svg
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M11.0362 7.4381V7.43694L11.1155 7.31349C11.5149 6.69147 12.1054 6.21589 12.7983 5.95824C13.4912 5.70058 14.2489 5.67477 14.9577 5.88468C15.6665 6.09459 16.288 6.52888 16.7289 7.12228C17.1695 7.71538 17.4058 8.4354 17.4023 9.17423C17.4017 9.78588 17.237 10.3862 16.9254 10.9125C16.6135 11.4391 16.1659 11.8723 15.6294 12.1669C15.0929 12.4614 14.4872 12.6065 13.8755 12.5869C13.7244 12.5821 13.5743 12.5672 13.4262 12.5427C13.6169 12.8299 13.8522 13.124 14.1395 13.4213L11.0362 7.4381ZM11.0362 7.4381C10.759 7.8777 10.5357 8.39659 10.3964 8.97071C10.3598 8.30389 10.1282 7.66077 9.72812 7.12228C9.28729 6.52888 8.66578 6.09459 7.95699 5.88468C7.2482 5.67477 6.49042 5.70058 5.79756 5.95824C5.10469 6.21589 4.51418 6.69147 4.11475 7.31349L4.03548 7.43694V7.4381C2.90627 9.22878 2.67134 12.3351 5.3693 15.1311L5.36961 15.1314C5.59639 15.366 5.90707 15.5009 6.23331 15.5065C6.55956 15.512 6.87463 15.3877 7.10923 15.1609C7.34383 14.9341 7.47873 14.6235 7.48426 14.2972C7.48979 13.971 7.36549 13.6559 7.13872 13.4213C6.85141 13.124 6.61618 12.8299 6.42542 12.5427C6.57356 12.5672 6.72363 12.5821 6.87472 12.5869C7.48644 12.6065 8.09219 12.4614 8.62869 12.1669C9.16519 11.8723 9.61275 11.4391 9.92461 10.9125C10.0556 10.6913 10.1606 10.4571 10.2384 10.2145C10.213 11.741 10.786 13.4895 12.3701 15.1311L12.3704 15.1314C12.5971 15.366 12.9078 15.5009 13.2341 15.5065C13.5603 15.512 13.8754 15.3877 14.11 15.1609C14.3446 14.9341 14.4795 14.6235 14.485 14.2972C14.4905 13.971 14.3663 13.656 14.1395 13.4214L11.0362 7.4381ZM10.3513 9.17309L10.4016 9.17312C10.4016 9.17349 10.4016 9.17386 10.4016 9.17423C10.4016 9.17459 10.4016 9.17496 10.4015 9.17533L10.3509 9.17508C10.3511 9.17442 10.3512 9.17375 10.3513 9.17309ZM10.3513 9.17309L9.90156 9.17282L10.3513 9.17309ZM6.08571 11.9469C5.85227 11.8714 5.62826 11.7663 5.41933 11.6336C5.49812 11.8676 5.60027 12.1069 5.72897 12.3499L6.08571 11.9469Z"
                                  fill="#D1D5DB"
                                  stroke="#4B5563"
                                />
                              </svg>
                              <p className="ml-2">Quote Relay</p>
                            </div>
                          </div>
                        )}
                      </Menu.Item>
                    </div>
                  </Menu.Items>
                </div>
              </Transition>
            </Menu>
          </div>
          <div className="">
            <div className="font-regular ml-[60px] mt-2 flex font-Roboto text-base text-c-lightgray">
              <Menu as="div" className=" text-left">
                <Menu.Button
                  className="flex w-full items-center justify-center text-sm  "
                  onClick={handleFavorite}
                >
                  {heart ? (
                    <div className="">
                      <IconHeartFilled />
                    </div>
                  ) : (
                    <div className="text-c-gray">
                      <IconHeart className="" />
                    </div>
                  )}
                </Menu.Button>
              </Menu>
            </div>
          </div>
          <div className="font-regular  mt-2 flex font-Roboto text-base text-c-lightgray">
            <Menu as="div" className=" text-left">
              <Menu.Button className="ml-6 flex w-full items-center justify-center text-sm text-c-gray">
                <IconShares />
              </Menu.Button>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <div className="relative inline-block">
                  <Menu.Items className="absolute w-36 origin-top-right cursor-pointer divide-y divide-gray-100 rounded-md border border-c-shadergray bg-c-gray">
                    <div className="py-1">
                      <Menu.Item>
                        {({ active }) => (
                          <div
                            className={classNames(
                              active
                                ? "bg-c-gray text-c-lightgray hover:bg-c-darkgray"
                                : "text-c-lightgray",
                              "group flex items-center px-4 py-2 text-sm"
                            )}
                          >
                            <div
                              className="flex"
                              onClick={() => setSendto(true)}
                            >
                              <IconRelay />
                              <p className="ml-2">Send in Chat</p>
                            </div>
                          </div>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <div
                            className={classNames(
                              active
                                ? "bg-c-gray text-c-lightgray hover:bg-c-darkgray"
                                : "text-c-lightgray",
                              "group flex items-center px-4 py-2 text-sm"
                            )}
                          >
                            <IconLink />
                            <p className="ml-2">Copy Link</p>
                          </div>
                        )}
                      </Menu.Item>
                    </div>
                  </Menu.Items>
                </div>
              </Transition>
            </Menu>
          </div>
        </div>
      </>
      {reply && (
        <ReplyTextArea
          closed={() => setReply(false)}
          keyId={keyId}
          pub={pubkey}
        />
      )}
      {quote && (
        <Quote
          close={() => setQuote(false)}
          content={content}
          pubkey={pubkey}
        />
      )}
      {sendto && <SendinChat close={() => setSendto(false)} />}
    </div>
  );
}

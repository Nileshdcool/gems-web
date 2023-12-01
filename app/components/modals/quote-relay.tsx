import {
  IconAttached,
  IconChart,
  IconCircleX,
  IconGIF,
  IconSmile,
} from "public/assets/icons";
import { useProfile } from "~/services/nostr/profile";
import mask, { avatar } from "~/utils/pubkey";
import { useLocation, useTransition } from "@remix-run/react";
import { useEffect, useState } from "react";
import QuoteContent from "~/components/feed/quote-content";

interface props {
  close: () => void;
  content: string;
  pubkey: string;
}

export default function Quote({ close, pubkey, content }: props) {
  const transition = useTransition();
  const isLoading = transition.state === "loading";
  const [displ, setDispl] = useState(false);

  useEffect(() => {
    isLoading ? setDispl(false) : setDispl(true);
  }, [isLoading, displ]);

  const { state }: any = useLocation();
  // let pubkey = state ? state?.othersPubkey : "";
  // let eventId = state ? state?.eventId : "";
  // let content = state ? state?.othersContent : "";
  const { data: userData } = useProfile({
    pubkey,
  });
  return (
    <div className="">
      <div className="absolute inset-0 flex items-center  justify-center bg-black bg-opacity-30 backdrop-blur-sm ">
        <div className="max-h-[540px] min-h-[240px] w-[550px] rounded-lg bg-c-gray  px-5 py-2 font-Roboto text-xl text-c-lightgray ">
          <div className="mt-2 flex items-center justify-between">
            <h1 className="text-c-lightgray">Quote Relay</h1>
            <div className="cursor-pointer" onClick={close}>
              <IconCircleX />
            </div>
          </div>
          <div className="mt-4 flex justify-center">
            <div className=" mb-2 h-[60px] w-[520px]">
              <form
                action="#"
                className=" rounded-lg border border-black bg-c-shadegray"
              >
                <div className="focus-within:ring-c-cyan overflow-hidden rounded-b-lg rounded-t-lg border border-transparent shadow-sm focus-within:border-c-cyan focus-within:ring-1">
                  <label htmlFor="text" className="sr-only"></label>
                  <textarea
                    name="text"
                    id="text"
                    className="block h-[32px] w-full resize-none border-0 bg-c-brown px-2 py-1 text-c-lightgray focus:ring-0 sm:text-sm"
                    defaultValue={""}
                  />
                </div>
                <div className="flex justify-between">
                  <div className="flex h-[28px] px-5 py-1">
                    <div className="text-c-lightbrown">
                      <IconAttached className="mr-3" />
                    </div>
                    {/* <div className='ml-5 text-c-lightbrown'>
                                          <IconSticker className="mr-3"/>
                                      </div> */}
                    <div className="ml-5 text-c-lightbrown">
                      <IconGIF className="mr-3" />
                    </div>
                    <div className="ml-5 text-c-lightbrown">
                      <IconSmile className="mr-3 text-transparent" />
                    </div>
                    <div className="ml-5 text-c-lightbrown">
                      <IconChart className="mr-3" />
                    </div>
                    {/* <div className='ml-5 text-c-lightbrown'>
                                          <IconListUl className='mr-3'/>
                                      </div>
                                      <div className='ml-5 text-c-lightbrown'>
                                          <IconListOl className='mr-3'/>
                                      </div>
                                      <div className='ml-5 text-c-lightbrown'>
                                          <IconBlackQuote className='mr-3'/>
                                      </div> */}
                  </div>
                  <div className="px-5">
                    <h1 className="text-c-lightbrown">Aa</h1>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="mt-4 flex w-full text-center">
            <div className="">
              {userData?.picture == null ? (
                <img
                  src={avatar(pubkey)}
                  alt=""
                  className="ml-2 h-[35px]  w-[35px] rounded-md border  border-gray-500"
                />
              ) : (
                <img
                  src={userData?.picture}
                  alt=""
                  className="ml-2 h-[35px]  w-[35px] rounded-md border  border-gray-500"
                />
              )}
            </div>
            <div className=" ml-3 flex flex-col justify-start text-start text-c-lightgray">
              <h1 className="text-sm font-semibold">
                {" "}
                {userData?.name ? userData?.name : mask(pubkey)}
              </h1>
            </div>
          </div>
          <div className="mt-4">
            <QuoteContent content={content} />
          </div>
        </div>
      </div>
    </div>
  );
}

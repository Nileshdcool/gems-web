import { Link } from "@remix-run/react";
import { IconMousepointer, IconMouseReoload } from "public/assets/icons";
import gems from "public/assets/images/logo/gem.png";
import keychain2 from "public/assets/images/sample/keychain3.png";
import nos2x from "public/assets/images/sample/nos2x.png";
import nos2xx from "public/assets/images/sample/nos2xx.png";
import nos from "public/assets/images/sample/nos.png";
import noss from "public/assets/images/sample/noss.png";

export default function (): JSX.Element {
  return (
    <div className="flex flex-col">
      <div className="keychain w-full">
        <div className="flex items-center justify-between px-20 py-6">
          <div className=" flex items-center justify-start ">
            <img src={gems} alt="" className="w-20" />
            <h1 className="ml-4 bg-gradient-to-r from-cyan-800 to-cyan-500 bg-clip-text font-Bebas text-6xl text-transparent">
              GEMS
            </h1>
          </div>
          <div className="">
            <Link to="/">
              <button className="rounded-md border bg-c-onboardingbutton px-5 py-2 font-Roboto text-xl text-c-whitee">
                BACK TO LOGIN
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="w-full bg-c-keychain1 transition delay-150 duration-300 ease-in-out hover:bg-slate-600">
        <div className="flex items-center justify-between px-20 py-10">
          <div className="flex flex-row items-center ">
            <div className="flex">
              <IconMousepointer />
            </div>
            <div className=" ml-4">
              <p className="font-Bebas text-2xl text-c-whitee">
                STEP 1: CLICK THE "GET NOS2X NOSTR KEYCHAIN" BUTTON.
              </p>
            </div>
          </div>
          <div className="">
            <a
              href="https://chrome.google.com/webstore/detail/nos2x/kpgefcfmnafjgpblomihpgmejjdanjjp"
              target="_blank"
              rel="noreferrer"
            >
              <button className="rounded-md border bg-c-onboardingbutton px-5 py-2 font-Roboto text-xl text-c-whitee">
                GET NOS2X NOSTR KEYCHAIN
              </button>
            </a>
          </div>
        </div>
      </div>
      <div className="mt-1 w-full bg-c-keychain2 transition delay-150 duration-300 ease-in-out hover:bg-indigo-600">
        <div className="flex items-center justify-between px-20 py-14">
          <div className="ml-12 flex flex-row items-center">
            <div className="">
              <p className="font-Bebas text-2xl capitalize text-c-whitee">
                STEP 2: Install the nos2x Nostr Keychain Chrome Extension.
              </p>
            </div>
          </div>
          <div className="mr-16 flex w-[130px] justify-center">
            <img src={nos2x} alt="" className=" rounded-l-md" />
            <img src={nos2xx} alt="" className=" rounded-r-md" />
          </div>
        </div>
      </div>
      <div className="mt-1 w-full bg-c-keychain3 transition delay-150 duration-300 ease-in-out hover:bg-violet-500">
        <div className="flex items-center justify-between px-20 py-5">
          <div className="ml-12 flex flex-row items-center">
            <div className="">
              <p className="font-Bebas text-2xl capitalize text-c-whitee">
                STEP 3: Right-click the nos2x extension, and select Options.
              </p>
            </div>
          </div>
          <div className="flex w-[200px] justify-center">
            <img src={keychain2} alt="" className=" rounded-md" />
          </div>
        </div>
      </div>
      <div className="mt-1 w-full bg-c-keychain4 transition delay-150 duration-300 ease-in-out hover:bg-c-keychain4a">
        <div className="flex items-center justify-between px-20 py-5">
          <div className="flex flex-row items-center ">
            <div className="flex">
              <IconMouseReoload />
            </div>
            <div className=" ml-4">
              <p className="font-Bebas text-2xl text-c-whitee">
                STEP 4: Generate a private key and save it somewhere safe! Never
                share your Nostr private key!
              </p>
            </div>
          </div>
          <div className="mr-7 flex h-[110px] w-[150px] justify-center">
            <img src={noss} alt="" className=" rounded-l-md" />
            <img src={nos} alt="" className=" rounded-r-md" />
          </div>
        </div>
      </div>
      <div className="mt-6 flex justify-center ">
        <p className="font-Bebas text-2xl capitalize text-c-whitee">
          after completing the steps, click the back to login button
        </p>
      </div>
    </div>
  );
}

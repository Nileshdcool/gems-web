import { Fragment, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import {
  IconThreeDot,
  IconLink,
  IconFollow,
  IconBellx,
  IconEyex,
  IconReport,
} from "public/assets/icons";
import { showNoteLinkCopied } from "~/utils/note";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}
export default function PostOption({ event }: any) {
  const [hover, setHover] = useState("");

  return (
    <div className="flex w-full justify-end">
      <div className="mb-7 flex justify-center rounded-lg bg-c-brown  px-4 text-c-lightgray">
        <div className=" show">
          <Menu as="div" className=" relative text-left">
            <div className="mt-1 text-c-gray">
              <Menu.Button className="flex w-full justify-center text-sm text-c-gray ">
                <IconThreeDot className="w-6" />
              </Menu.Button>
            </div>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 mt-1 w-56 origin-top-right divide-y divide-gray-100 rounded-md border border-c-shadergray bg-c-gray">
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
                        <IconFollow />
                        <p className="ml-2">Follow user</p>
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
                        <div
                          className="flex w-full items-center"
                          onMouseEnter={() => setHover("mute")}
                          onMouseLeave={() => setHover("")}
                        >
                          <IconBellx />
                          <p className="ml-2">
                            {" "}
                            {hover === "mute"
                              ? "Coming Soon"
                              : "Mute user's post"}
                          </p>
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
                        <div
                          className="flex w-full items-center"
                          onMouseEnter={() => setHover("hide")}
                          onMouseLeave={() => setHover("")}
                        >
                          <IconEyex />
                          <p className="ml-2">
                            {hover === "hide"
                              ? "Coming Soon "
                              : "Hide user's post"}
                          </p>
                        </div>
                      </div>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <div
                        onClick={() => showNoteLinkCopied(event.id)}
                        className={classNames(
                          active
                            ? "bg-c-gray text-c-lightgray hover:bg-c-darkgray"
                            : "text-c-lightgray",
                          "group flex items-center px-4 py-2 text-sm"
                        )}
                      >
                        <IconLink />
                        <p className="ml-2"> Copy link</p>
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
                        <div
                          className="flex w-full items-center"
                          onMouseEnter={() => setHover("report")}
                          onMouseLeave={() => setHover("")}
                        >
                          <IconReport />
                          <p className="ml-2">
                            {" "}
                            {hover === "report"
                              ? "Coming Soon "
                              : "Report Post "}
                          </p>
                        </div>
                      </div>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </div>
    </div>
  );
}

import { Menu as HeadlessMenu, Transition } from "@headlessui/react";
import Logo from "public/assets/images/logo/gem.png";
import Search from "public/assets/images/icons/search.svg";
import { Fragment, useEffect, useRef, useState } from "react";
import {
  IconFeed,
  IconPlanet,
  IconChat,
  IconBell,
  IconOnline,
  IconIdle,
  IconDoNotDisturb,
  IconInvisible,
  IconUserSetting,
  IconSetting,
  IconSmallWallet,
} from "public/assets/icons";
import {
  Form,
  Link,
  NavLink,
  useLoaderData,
  useLocation,
} from "@remix-run/react";
import SearchModal, { RecentSearchModal } from "~/components/search-modal";
import { avatar } from "~/utils/pubkey";
import AvatarImage from "../avatar";
import useProfileContent from "~/services/nostr/profiles/content";

export interface Section {
  path: string;
  name: string;
  icon: string;
  children: any;
}

export function getSections() {
  const sections: Array<Section> = [
    // {
    //   path: "/feed",
    //   name: "Feed",
    //   icon: IconFeed.name,
    //   children: [{ id: 2, name: "Others", pathname: "$eventpubkey" }],
    // },
    // {
    //   path: "/chat",
    //   name: "Chat",
    //   icon: IconChat.name,
    //   children: [
    //     { id: 1, name: "Config", pathname: "config" },
    //     { id: 2, name: "User", pathname: "@me" },
    //   ],
    // },
  ];
  return sections;
}

export const UsersFollows = [
  { id: 1, name: "Followers", path: "followers" },
  { id: 2, name: "Following", path: "following" },
];

export default function Menu(): JSX.Element {
  const location = useLocation();
  const renderIcon = (icon: string) => {
    const icons: any = {
      IconFeed: <IconFeed />,
      IconPlanet: <IconPlanet />,
      IconChat: <IconChat />,
      IconBell: <IconBell />,
    };
    const SelectedIcon = icons[icon];

    return <div className="mr-2 mt-1 flex">{SelectedIcon}</div>;
  };

  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
  }
  const { user } = useLoaderData();

  const { picture } = useProfileContent(user?.pubkey);
  const sections = getSections();
  const [searchPlaceholder, setSearchPlaceholder] = useState(
    "Find user by nostr public key"
  );
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [showSearch, setShowSearch] = useState<boolean>(false);
  const [searchModal, setSearchModal] = useState<string>("recent");
  const [ShowBell, setShowBellModal] = useState<boolean>(false);
  const [hover, setHover] = useState("");
  const handleHover = () => {
    setShowBellModal(true);
  };
  const handleLeave = () => {
    setShowBellModal(false);
  };

  const handleSearch = (
    type: string,
    event:
      | React.MouseEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLInputElement>
  ) => {
    const query = (event.target as HTMLInputElement).value;
    setShowSearch(true);
    setSearchModal(type);
    setSearchQuery(query);
  };

  const searchBarRef = useRef<HTMLDivElement>(null);

  const clearStorage = () => {
    localStorage.clear();
    sessionStorage.clear();
  };

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (
        searchBarRef.current &&
        !searchBarRef.current.contains(event.target as Node)
      ) {
        setShowSearch(false);
        setSearchPlaceholder("Find user by nostr public key");
      }
    };

    document.addEventListener("mousedown", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);
  const statusOptions = [
    { id: "online", label: "Online", icon: <IconOnline /> },
    { id: "idle", label: "Idle", icon: <IconIdle /> },
    { id: "dnd", label: "Do not disturb", icon: <IconDoNotDisturb /> },
    { id: "invisible", label: "Invisible", icon: <IconInvisible /> },
  ];

  const [selectedStatus, setSelectedStatus] = useState(statusOptions[0]);

  // Function to handle status change
  function handleStatusChange(statusOption) {
    setSelectedStatus(statusOption);
  }
  return (
    <>
      <div className="bg mb-2 flex justify-between">
        <div className="flex">
          <Link to="/">
            <div className="ml-[45px] mt-[16px]">
              <img src={Logo} alt="" width="51" height="51" className="" />
            </div>
          </Link>
          <Link to="/">
            <div className="mt-6">
              <h1 className="textcolor text-2xl font-bold">GEMS</h1>
            </div>
          </Link>
          <div ref={searchBarRef} className="-mt-[11px] ml-5 flex flex-col">
            <form action="" className="mr-9 flex py-8 font-Roboto text-xs">
              <input
                type="text"
                onClick={(e) => handleSearch("recent", e)}
                onChange={(e) => handleSearch("current", e)}
                onFocus={() => setSearchPlaceholder("")}
                name="search-input"
                autoComplete="off"
                aria-label="Search"
                placeholder={searchPlaceholder}
                className="fornt-Roboto mt-1 h-[35px] w-[330px] rounded-[4px] border-none bg-c-brown bg-transparent px-2 text-sm text-white placeholder-gray-500 ring-1 ring-gray-400 focus:ring-1 focus:ring-gray-500"
              />
              <img src={Search} alt="" className="-ml-7 w-5" />
            </form>
            <div className="absolute top-20">
              {showSearch && searchModal == "recent" ? (
                <RecentSearchModal
                  close={() => setShowSearch(false)}
                  pubkey=""
                />
              ) : null}
              {showSearch && searchModal == "current" ? (
                <SearchModal
                  query={searchQuery}
                  close={() => setShowSearch(false)}
                  pubkey=""
                />
              ) : null}
            </div>
          </div>
        </div>
        <div className="-ml-[300px] flex py-5">
          <ul className="flex">
            {sections.map(({ path, name, icon }) => (
              <li key={path}>
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    `trapezoids ml-10 mr-5 flex px-9 text-c-gray ${
                      isActive
                        ? "trapezoid ml-10 mr-5 flex px-9 text-c-gray"
                        : ""
                    }`
                  }
                  isActive={() => location.pathname === path}
                >
                  <div className="item w-[30px] cursor-pointer py-1">
                    {renderIcon(icon)}
                  </div>
                  {<div className="flex flex-col"></div>}
                </NavLink>
              </li>
            ))}
            {/* <div className="">
              <li className="trapezoids ml-10 mr-5 flex px-9 text-c-gray">
                <div
                  className="item w-[30px] cursor-pointer py-1"
                  onMouseEnter={handleHover}
                  onMouseLeave={handleLeave}
                >
                  <IconBell />
                </div>
              </li>
              <div className="relative ml-10 inline-block">
                {ShowBell && (
                  <div className="rounded-lg bg-c-gray px-2 py-1 text-sm text-c-whitee ">
                    Coming Soon
                  </div>
                )}
              </div>
            </div> */}
          </ul>
        </div>
        <div className="flex">
          <div className="mr-7 mt-4 flex">
            <HeadlessMenu as="div" className="relative inline-block text-left">
              <div className="">
                <HeadlessMenu.Button className="inline-flex w-full justify-center text-sm text-c-dirtwhite  ">
                  <div>
                    <AvatarImage
                      pubkey={user?.pubkey}
                      userData={{ picture: picture }}
                      className=" mr-3 w-12 cursor-pointer rounded-full"
                    />
                  </div>
                </HeadlessMenu.Button>
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
                <HeadlessMenu.Items className="absolute right-7 h-[220px] rounded-md  border border-c-gray bg-c-gray ">
                  <div className="">
                    <HeadlessMenu as="div" className="inline-block text-left">
                      <HeadlessMenu.Button className=" w-[220px]">
                        <HeadlessMenu.Item>
                          {({ active }) => (
                            <div
                              className={classNames(
                                active
                                  ? "bg-c-graylight text-c-lightgray"
                                  : "group flex items-center text-c-lightgray",
                                "group flex cursor-pointer items-center px-4 py-2 text-sm"
                              )}
                            >
                              <div className="flex items-center">
                                {selectedStatus.icon}
                                <label className="ml-2 cursor-pointer text-sm text-c-lightgray">
                                  {selectedStatus.label}
                                </label>
                              </div>
                            </div>
                          )}
                        </HeadlessMenu.Item>
                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-100"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                          <HeadlessMenu.Items className="absolute  h-[150px] w-[150px]  rounded-md border border-c-shadergray bg-c-gray">
                            {statusOptions.map((statusOption) => (
                              <HeadlessMenu.Item key={statusOption.id}>
                                {({ active }) => (
                                  <div
                                    onClick={() =>
                                      handleStatusChange(statusOption)
                                    }
                                    className={classNames(
                                      active
                                        ? "bg-c-graylight text-c-lightgray"
                                        : "group flex items-center text-c-lightgray",
                                      "group flex cursor-pointer items-center px-4 py-2 text-sm"
                                    )}
                                  >
                                    <div className="flex items-center">
                                      {statusOption.icon}
                                      <label className="ml-2 cursor-pointer text-sm text-c-lightgray">
                                        {statusOption.label}
                                      </label>
                                    </div>
                                  </div>
                                )}
                              </HeadlessMenu.Item>
                            ))}
                          </HeadlessMenu.Items>
                        </Transition>
                      </HeadlessMenu.Button>
                    </HeadlessMenu>
                  </div>
                  <div className="border-y border-c-shadergray py-1">
                    <Link to="/profile">
                      <HeadlessMenu.Item>
                        {({ active }) => (
                          <div
                            className={classNames(
                              active
                                ? "bg-c-graylight text-c-lightgray"
                                : " flex items-center text-c-lightgray",
                              "group flex items-center px-4 py-2 text-sm"
                            )}
                          >
                            <div className=" flex cursor-pointer items-center">
                              <IconUserSetting />
                              <span className="ml-1 mt-1 text-sm text-c-lightgray">
                                Profile
                              </span>
                            </div>
                          </div>
                        )}
                      </HeadlessMenu.Item>
                    </Link>
                    <HeadlessMenu.Item>
                      {({ active }) => (
                        <div
                          className={classNames(
                            active
                              ? "bg-c-graylight text-c-lightgray"
                              : " flex items-center text-c-lightgray",
                            "group flex items-center px-4 py-2 text-sm"
                          )}
                        >
                          <div
                            className=" flex w-full cursor-pointer items-center"
                            onMouseEnter={() => setHover("wallet")}
                            onMouseLeave={() => setHover("")}
                          >
                            <IconSmallWallet />
                            <span className="ml-1 mt-1 text-sm text-c-lightgray">
                              {hover === "wallet" ? "Coming Soon " : "Wallet"}
                            </span>
                          </div>
                        </div>
                      )}
                    </HeadlessMenu.Item>
                    <HeadlessMenu.Item>
                      {({ active }) => (
                        <div
                          className={classNames(
                            active
                              ? "bg-c-graylight text-c-lightgray"
                              : " flex items-center text-c-lightgray",
                            "group flex items-center px-4 py-2 text-sm"
                          )}
                        >
                          <div
                            className=" flex w-full items-center"
                            onMouseEnter={() => setHover("privacy")}
                            onMouseLeave={() => setHover("")}
                          >
                            <IconSetting />
                            <label className="ml-2 text-sm text-c-lightgray">
                              {hover === "privacy"
                                ? "Coming Soon "
                                : "Privacy & Safety"}
                            </label>
                          </div>
                        </div>
                      )}
                    </HeadlessMenu.Item>
                  </div>
                  <Form
                    action="/logout"
                    method="post"
                    className="rounded-b-md hover:bg-c-graylight"
                  >
                    <div className="flex items-center justify-center ">
                      <button
                        type="submit"
                        className="py-3 text-c-lightgray"
                        onClick={clearStorage}
                      >
                        Logout
                      </button>
                    </div>
                  </Form>
                </HeadlessMenu.Items>
              </Transition>
            </HeadlessMenu>
          </div>
        </div>
      </div>
    </>
  );
}

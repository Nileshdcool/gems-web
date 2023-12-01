import {
  Tabs,
  getReplyingToEvent
} from "/build/_shared/chunk-STZVJ64V.js";
import {
  FeedLoader,
  MainContainer,
  Menu,
  Posts,
  Q,
  RightPane,
  TabContainer,
  avatar_default,
  contacts_default,
  copyPubkey,
  mask
} from "/build/_shared/chunk-TBTM2GPZ.js";
import {
  index_modern_default
} from "/build/_shared/chunk-AO5ZBG5V.js";
import "/build/_shared/chunk-7PPFV3VI.js";
import {
  require_node
} from "/build/_shared/chunk-TKUYKEFQ.js";
import {
  content_default,
  useSubscribe
} from "/build/_shared/chunk-VF2ZEHT7.js";
import "/build/_shared/chunk-XFYNK4ZR.js";
import {
  require_session
} from "/build/_shared/chunk-ZQW7CLJ5.js";
import {
  IconCopy
} from "/build/_shared/chunk-6LNMZJIT.js";
import {
  Link,
  useLoaderData,
  useLocation,
  useNavigation
} from "/build/_shared/chunk-PBW5ITDT.js";
import {
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-GAVVBTB4.js";
import {
  __toESM
} from "/build/_shared/chunk-FFEYCVP6.js";

// app/routes/p.$pubkey.tsx
var import_node2 = __toESM(require_node());
var import_session2 = __toESM(require_session());

// app/components/feed/user-posts.tsx
var React = __toESM(require_react());
var import_session = __toESM(require_session());
var import_node = __toESM(require_node());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function UserPosts({
  suggestedFollows
}) {
  const { state } = useLocation();
  let pubkey = state ? state == null ? void 0 : state.othersPubkey : "";
  const { user } = useLoaderData();
  const displayPubkey = pubkey ? pubkey : user == null ? void 0 : user.pubkey;
  const myPubkey = displayPubkey;
  const filterOptions = [
    {
      name: "My Posts",
      filter: {
        kinds: [1],
        limit: 3e3
      },
      filterFn: (event, myPubkey2) => {
        return event.pubkey === myPubkey2 && !getReplyingToEvent(event);
      }
    },
    {
      name: "All Posts",
      filter: {
        kinds: [1],
        limit: 1e3
      },
      filterFn: void 0
      // Remove the filter function
    }
  ];
  const filter = filterOptions[0];
  const { events: followingPosts, eose } = useSubscribe({
    filters: [filter.filter],
    relays: [
      "wss://relay.gems.xyz",
      "wss://relay.damus.io",
      "wss://relay.snort.social"
    ],
    options: { cacheRefresh: true, force: true, closeAfterEose: false }
  });
  const posts = React.useMemo(() => {
    const filtered = followingPosts.filter((event) => {
      if (filter.filterFn) {
        return filter.filterFn(event, myPubkey);
      }
      return true;
    }).sort((a, b) => b.created_at - a.created_at);
    return filtered;
  }, [followingPosts, filter, myPubkey]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "px-1 py-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tabs2, { defaultSelectedTab: "tab1", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TabList, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-center  px-2 py-1 text-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tab, { tab: "tab1", children: "Posts" }, void 0, false, {
        fileName: "app/components/feed/user-posts.tsx",
        lineNumber: 88,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tab, { tab: "tab2", children: "Replies" }, void 0, false, {
        fileName: "app/components/feed/user-posts.tsx",
        lineNumber: 89,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tab, { tab: "tab3", children: "Favorites" }, void 0, false, {
        fileName: "app/components/feed/user-posts.tsx",
        lineNumber: 90,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tab, { tab: "tab4", children: "Relays" }, void 0, false, {
        fileName: "app/components/feed/user-posts.tsx",
        lineNumber: 91,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/feed/user-posts.tsx",
      lineNumber: 87,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/components/feed/user-posts.tsx",
      lineNumber: 86,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-1 h-[1px] w-[680px] bg-c-shadegray" }, void 0, false, {
      fileName: "app/components/feed/user-posts.tsx",
      lineNumber: 95,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/components/feed/user-posts.tsx",
      lineNumber: 94,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TabPanel, { tab: "tab1", children: !posts || posts.length === 0 || !eose ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FeedLoader, {}, void 0, false, {
      fileName: "app/components/feed/user-posts.tsx",
      lineNumber: 99,
      columnNumber: 13
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: " overflow-y-auto py-3 transition duration-500 scrollbar-hide", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Posts, { events: posts }, void 0, false, {
      fileName: "app/components/feed/user-posts.tsx",
      lineNumber: 102,
      columnNumber: 15
    }, this) }, void 0, false, {
      fileName: "app/components/feed/user-posts.tsx",
      lineNumber: 101,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/components/feed/user-posts.tsx",
      lineNumber: 97,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/feed/user-posts.tsx",
    lineNumber: 85,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/feed/user-posts.tsx",
    lineNumber: 84,
    columnNumber: 5
  }, this);
}
var TabsContext = React.createContext({
  selectedTab: null,
  selectTab: (tab) => {
    throw new Error("should not be used without TabContext.Provider");
  }
});
function Tabs2({
  children,
  defaultSelectedTab
}) {
  const [selectedTab, selectTab] = React.useState(defaultSelectedTab);
  const contextValue = React.useMemo(
    () => ({
      selectTab,
      selectedTab
    }),
    [selectedTab, selectTab]
  );
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TabsContext.Provider, { value: contextValue, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children }, void 0, false, {
    fileName: "app/components/feed/user-posts.tsx",
    lineNumber: 207,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/feed/user-posts.tsx",
    lineNumber: 206,
    columnNumber: 5
  }, this);
}
function TabList({ children }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children }, void 0, false, {
    fileName: "app/components/feed/user-posts.tsx",
    lineNumber: 213,
    columnNumber: 10
  }, this);
}
function Tab({ children, tab }) {
  const { selectedTab, selectTab } = React.useContext(TabsContext);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
    "button",
    {
      className: selectedTab === tab ? "flex border-b-2 border-c-cyan px-10 py-3 font-Roboto font-bold text-c-cyan hover:bg-gray-900" : "flex justify-center px-10 py-3 font-Roboto text-c-cyann hover:bg-gray-900",
      onClick: () => selectTab(tab),
      children
    },
    void 0,
    false,
    {
      fileName: "app/components/feed/user-posts.tsx",
      lineNumber: 220,
      columnNumber: 5
    },
    this
  );
}
function TabPanel({
  children,
  tab
}) {
  const { selectedTab } = React.useContext(TabsContext);
  if (selectedTab !== tab)
    return null;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children }, void 0, false, {
    fileName: "app/components/feed/user-posts.tsx",
    lineNumber: 244,
    columnNumber: 10
  }, this);
}

// app/components/user-details/user-details.tsx
var import_react5 = __toESM(require_react());

// public/assets/images/sample/banner.png
var banner_default = "/build/_assets/banner-MKARGKSZ.png";

// app/components/banner.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
var BannerImage = ({
  pubkey,
  userData,
  className
}) => {
  const defaultImage = banner_default;
  const handleError = (e) => {
    const target = e.target;
    if (target.src !== defaultImage) {
      target.src = defaultImage;
    }
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
    "img",
    {
      src: (userData == null ? void 0 : userData.banner) ? userData.banner : defaultImage,
      alt: "",
      className,
      onError: handleError
    },
    void 0,
    false,
    {
      fileName: "app/components/banner.tsx",
      lineNumber: 26,
      columnNumber: 5
    },
    this
  );
};
var banner_default2 = BannerImage;

// app/components/user-details/user-details-profile.tsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime());
function UserDetails({
  displayPubkey,
  banner,
  picture,
  displayName,
  handleCopyPubkey,
  name,
  about,
  isMyProfile
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "mt-[3px] py-1", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "  flex h-[165px] w-full justify-center border-gray-500", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
        banner_default2,
        {
          pubkey: displayPubkey,
          userData: { banner },
          className: "h-[165px] w-full"
        },
        void 0,
        false,
        {
          fileName: "app/components/user-details/user-details-profile.tsx",
          lineNumber: 33,
          columnNumber: 13
        },
        this
      ) }, void 0, false, {
        fileName: "app/components/user-details/user-details-profile.tsx",
        lineNumber: 32,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/components/user-details/user-details-profile.tsx",
        lineNumber: 31,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: " flex items-center justify-between", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "-mt-14 flex px-4 ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
            avatar_default,
            {
              pubkey: displayPubkey,
              userData: { picture },
              className: "h-[120px] w-[120px] rounded-md border border-c-gray"
            },
            void 0,
            false,
            {
              fileName: "app/components/user-details/user-details-profile.tsx",
              lineNumber: 44,
              columnNumber: 15
            },
            this
          ) }, void 0, false, {
            fileName: "app/components/user-details/user-details-profile.tsx",
            lineNumber: 43,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "mt-3", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("label", { className: "mt-16 font-Roboto text-xl font-black text-c-white", children: displayName != null ? displayName : mask(displayPubkey) }, void 0, false, {
              fileName: "app/components/user-details/user-details-profile.tsx",
              lineNumber: 51,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex items-center text-c-lightgray ", children: [
              displayPubkey ? /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
                "button",
                {
                  className: "flex items-center",
                  onClick: handleCopyPubkey,
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "text-c-cyan", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(IconCopy, {}, void 0, false, {
                      fileName: "app/components/user-details/user-details-profile.tsx",
                      lineNumber: 61,
                      columnNumber: 23
                    }, this) }, void 0, false, {
                      fileName: "app/components/user-details/user-details-profile.tsx",
                      lineNumber: 60,
                      columnNumber: 21
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: " ml-2 mr-3", children: [
                      " ",
                      mask(displayPubkey),
                      " "
                    ] }, void 0, true, {
                      fileName: "app/components/user-details/user-details-profile.tsx",
                      lineNumber: 64,
                      columnNumber: 21
                    }, this)
                  ]
                },
                void 0,
                true,
                {
                  fileName: "app/components/user-details/user-details-profile.tsx",
                  lineNumber: 56,
                  columnNumber: 19
                },
                this
              ) : null,
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "", children: [
                "@",
                name != null ? name : mask(displayPubkey)
              ] }, void 0, true, {
                fileName: "app/components/user-details/user-details-profile.tsx",
                lineNumber: 67,
                columnNumber: 17
              }, this)
            ] }, void 0, true, {
              fileName: "app/components/user-details/user-details-profile.tsx",
              lineNumber: 54,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/user-details/user-details-profile.tsx",
            lineNumber: 50,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/user-details/user-details-profile.tsx",
          lineNumber: 42,
          columnNumber: 11
        }, this),
        !isMyProfile ? /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "mr-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Link, { to: "/settings/profile/edit", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("button", { className: "rounded-sm bg-c-cyan px-3 py-2 font-Roboto hover:bg-cyan-900", children: "Edit Profile" }, void 0, false, {
          fileName: "app/components/user-details/user-details-profile.tsx",
          lineNumber: 74,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/components/user-details/user-details-profile.tsx",
          lineNumber: 73,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/components/user-details/user-details-profile.tsx",
          lineNumber: 72,
          columnNumber: 13
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_jsx_dev_runtime3.Fragment, {}, void 0, false, {
          fileName: "app/components/user-details/user-details-profile.tsx",
          lineNumber: 80,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/user-details/user-details-profile.tsx",
        lineNumber: 41,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/user-details/user-details-profile.tsx",
      lineNumber: 30,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "mt-4 h-[60px] overflow-y-auto px-4 transition duration-500 scrollbar-hide", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h1", { className: "text-Roboto text-sm text-c-white", children: about }, void 0, false, {
      fileName: "app/components/user-details/user-details-profile.tsx",
      lineNumber: 85,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/user-details/user-details-profile.tsx",
      lineNumber: 84,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/user-details/user-details-profile.tsx",
    lineNumber: 29,
    columnNumber: 5
  }, this);
}

// app/components/user-details/user-details-follows.tsx
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime());
function UserDetailsFollows({
  followers,
  followings
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "mt-3 flex px-4 ", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "flex cursor-pointer", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Link, { to: "./followers", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h1", { className: "font-regular flex w-1/4 font-Roboto text-sm text-c-lightgray", children: [
      "Followers",
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "ml-4 font-bold text-c-cyan", children: followers == null ? void 0 : followers.length }, void 0, false, {
        fileName: "app/components/user-details/user-details-follows.tsx",
        lineNumber: 18,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/user-details/user-details-follows.tsx",
      lineNumber: 16,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/components/user-details/user-details-follows.tsx",
      lineNumber: 15,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/user-details/user-details-follows.tsx",
      lineNumber: 14,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "ml-5 flex cursor-pointer", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Link, { to: "./following", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h2", { className: "font-regular flex w-3/4 font-Roboto text-sm text-c-lightgray", children: [
      "Following",
      " ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: " ml-4 font-bold text-c-cyan", children: followings == null ? void 0 : followings.length }, void 0, false, {
        fileName: "app/components/user-details/user-details-follows.tsx",
        lineNumber: 28,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/user-details/user-details-follows.tsx",
      lineNumber: 26,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/components/user-details/user-details-follows.tsx",
      lineNumber: 25,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/user-details/user-details-follows.tsx",
      lineNumber: 24,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/user-details/user-details-follows.tsx",
    lineNumber: 13,
    columnNumber: 5
  }, this);
}

// app/components/user-details/user-details.tsx
var import_jsx_dev_runtime5 = __toESM(require_jsx_dev_runtime());
function UserDetails2() {
  const { state } = useLocation();
  let pubkey = state ? state == null ? void 0 : state.othersPubkey : "";
  const { user, params } = useLoaderData();
  const displayPubkey = pubkey ? pubkey : user == null ? void 0 : user.pubkey;
  const { displayName, name, picture, about, banner } = content_default(displayPubkey);
  const transition = useNavigation();
  const [progress, setProgress] = (0, import_react5.useState)(0);
  const followers = [];
  const followings = [];
  (0, import_react5.useEffect)(() => {
    transition.state == "idle" ? setProgress(0) : transition.state == "submitting" ? setProgress(50) : transition.state == "loading" ? setProgress(100) : setProgress(0);
  }, [transition.state]);
  const handleCopyPubkey = () => {
    copyPubkey(user == null ? void 0 : user.pubkey);
    Q.success("Public key copied to clipboard!", {
      position: "bottom-right",
      autoClose: 3e3,
      // 3 seconds
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true
    });
  };
  const isMyProfile = user.pubkey === params.pubkey;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_jsx_dev_runtime5.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "mt-5 flex", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "-mt-4 w-full rounded-md  bg-c-darkgray text-white", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "h-screen overflow-y-auto transition duration-500 scrollbar-hide", children: [
    transition.state === "loading" || transition.state == "submitting" ? /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
      index_modern_default,
      {
        color: "#00AFAF",
        height: 6,
        progress,
        onLoaderFinished: () => setProgress(0)
      },
      void 0,
      false,
      {
        fileName: "app/components/user-details/user-details.tsx",
        lineNumber: 56,
        columnNumber: 15
      },
      this
    ) : null,
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
      UserDetails,
      {
        about,
        banner,
        displayName,
        displayPubkey,
        handleCopyPubkey,
        name,
        picture,
        isMyProfile
      },
      void 0,
      false,
      {
        fileName: "app/components/user-details/user-details.tsx",
        lineNumber: 64,
        columnNumber: 13
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(UserDetailsFollows, { followers, followings }, void 0, false, {
      fileName: "app/components/user-details/user-details.tsx",
      lineNumber: 75,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(UserPosts, { suggestedFollows: [] }, void 0, false, {
      fileName: "app/components/user-details/user-details.tsx",
      lineNumber: 78,
      columnNumber: 15
    }, this) }, void 0, false, {
      fileName: "app/components/user-details/user-details.tsx",
      lineNumber: 77,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/user-details/user-details.tsx",
    lineNumber: 53,
    columnNumber: 11
  }, this) }, void 0, false, {
    fileName: "app/components/user-details/user-details.tsx",
    lineNumber: 52,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/components/user-details/user-details.tsx",
    lineNumber: 51,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/user-details/user-details.tsx",
    lineNumber: 50,
    columnNumber: 5
  }, this);
}

// app/routes/p.$pubkey.tsx
var import_jsx_dev_runtime6 = __toESM(require_jsx_dev_runtime());
function p_pubkey_default({ events }) {
  var _a;
  const { user } = useLoaderData();
  const { latestContactEvent } = contacts_default(user.pubkey);
  const authors = ((_a = latestContactEvent == null ? void 0 : latestContactEvent.tags) == null ? void 0 : _a.filter((tag) => tag[0] === "p").map((tag) => tag[1])) || [];
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_jsx_dev_runtime6.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Menu, { user }, void 0, false, {
      fileName: "app/routes/p.$pubkey.tsx",
      lineNumber: 36,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(MainContainer, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(TabContainer, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Tabs, { defaultSelectedTab: "posts", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "flex justify-between", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Link, { to: "/feed", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "flex py-2 text-c-lightgray", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("h1", { className: "ml-3 font-bold text-c-cyan", children: "BACK TO FEED" }, void 0, false, {
          fileName: "app/routes/p.$pubkey.tsx",
          lineNumber: 43,
          columnNumber: 19
        }, this) }, void 0, false, {
          fileName: "app/routes/p.$pubkey.tsx",
          lineNumber: 42,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/routes/p.$pubkey.tsx",
          lineNumber: 41,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/routes/p.$pubkey.tsx",
          lineNumber: 40,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(UserDetails2, {}, void 0, false, {
          fileName: "app/routes/p.$pubkey.tsx",
          lineNumber: 47,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/p.$pubkey.tsx",
        lineNumber: 39,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/p.$pubkey.tsx",
        lineNumber: 38,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(RightPane, { authors }, void 0, false, {
        fileName: "app/routes/p.$pubkey.tsx",
        lineNumber: 50,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/p.$pubkey.tsx",
      lineNumber: 37,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/p.$pubkey.tsx",
    lineNumber: 35,
    columnNumber: 5
  }, this);
}
export {
  p_pubkey_default as default
};
//# sourceMappingURL=/build/routes/p.$pubkey-55U3DJZF.js.map

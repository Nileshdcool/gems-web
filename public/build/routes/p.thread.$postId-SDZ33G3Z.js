import {
  FeedLoader,
  MainContainer,
  Menu,
  Posts,
  RightPane,
  TabContainer,
  contacts_default
} from "/build/_shared/chunk-TBTM2GPZ.js";
import "/build/_shared/chunk-AO5ZBG5V.js";
import "/build/_shared/chunk-7PPFV3VI.js";
import {
  require_node
} from "/build/_shared/chunk-TKUYKEFQ.js";
import {
  useSubscribe
} from "/build/_shared/chunk-VF2ZEHT7.js";
import "/build/_shared/chunk-XFYNK4ZR.js";
import {
  require_session
} from "/build/_shared/chunk-ZQW7CLJ5.js";
import "/build/_shared/chunk-6LNMZJIT.js";
import {
  Link,
  useLoaderData,
  useLocation
} from "/build/_shared/chunk-PBW5ITDT.js";
import {
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-GAVVBTB4.js";
import {
  __toESM
} from "/build/_shared/chunk-FFEYCVP6.js";

// app/routes/p.thread.$postId.tsx
var React = __toESM(require_react());
var import_node = __toESM(require_node());
var import_session = __toESM(require_session());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function UserPosts({
  suggestedFollows
}) {
  var _a;
  const { state } = useLocation();
  let id = state ? state == null ? void 0 : state.postId : "";
  let pubkey = state ? state == null ? void 0 : state.author : "";
  const { events: followingPosts } = useSubscribe({
    filters: [
      {
        kinds: [1],
        limit: 1e3
      }
    ],
    relays: [
      "wss://relay.gems.xyz",
      "wss://relay.damus.io",
      "wss://relay.snort.social"
    ],
    options: { cacheRefresh: true, force: true, closeAfterEose: false }
  });
  const { latestContactEvent } = contacts_default(pubkey);
  const { user } = useLoaderData();
  const authors = ((_a = latestContactEvent == null ? void 0 : latestContactEvent.tags) == null ? void 0 : _a.filter((tag) => tag[0] === "p").map((tag) => tag[1])) || [];
  authors.push(pubkey);
  const singlePost = React.useMemo(() => {
    if (id) {
      return followingPosts.find((event) => event.id === id);
    }
    return null;
  }, [id, followingPosts]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Menu, { user }, void 0, false, {
      fileName: "app/routes/p.thread.$postId.tsx",
      lineNumber: 60,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MainContainer, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TabContainer, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-1 flex justify-between", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/feed", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex py-2 text-c-lightgray", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "ml-3 font-bold text-c-cyan", children: "BACK TO FEED" }, void 0, false, {
            fileName: "app/routes/p.thread.$postId.tsx",
            lineNumber: 66,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/routes/p.thread.$postId.tsx",
            lineNumber: 65,
            columnNumber: 15
          }, this) }, void 0, false, {
            fileName: "app/routes/p.thread.$postId.tsx",
            lineNumber: 64,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mr-3 flex py-2  text-c-lightgray", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: " font-bold text-c-cyan", children: "THREAD" }, void 0, false, {
            fileName: "app/routes/p.thread.$postId.tsx",
            lineNumber: 70,
            columnNumber: 15
          }, this) }, void 0, false, {
            fileName: "app/routes/p.thread.$postId.tsx",
            lineNumber: 69,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/p.thread.$postId.tsx",
          lineNumber: 63,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-3 h-[1px] w-full bg-c-shadegray" }, void 0, false, {
          fileName: "app/routes/p.thread.$postId.tsx",
          lineNumber: 73,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-screen overflow-y-auto transition duration-500 scrollbar-hide ", children: singlePost ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Posts, { events: [singlePost] }, void 0, false, {
          fileName: "app/routes/p.thread.$postId.tsx",
          lineNumber: 75,
          columnNumber: 27
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FeedLoader, {}, void 0, false, {
          fileName: "app/routes/p.thread.$postId.tsx",
          lineNumber: 75,
          columnNumber: 61
        }, this) }, void 0, false, {
          fileName: "app/routes/p.thread.$postId.tsx",
          lineNumber: 74,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/p.thread.$postId.tsx",
        lineNumber: 62,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(RightPane, { authors }, void 0, false, {
        fileName: "app/routes/p.thread.$postId.tsx",
        lineNumber: 78,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/p.thread.$postId.tsx",
      lineNumber: 61,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/p.thread.$postId.tsx",
    lineNumber: 59,
    columnNumber: 5
  }, this);
}
export {
  UserPosts as default
};
//# sourceMappingURL=/build/routes/p.thread.$postId-SDZ33G3Z.js.map

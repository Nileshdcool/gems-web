import {
  Link
} from "/build/_shared/chunk-PBW5ITDT.js";
import {
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-GAVVBTB4.js";
import {
  __toESM
} from "/build/_shared/chunk-FFEYCVP6.js";

// app/components/common/tab.tsx
var import_react2 = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var TabsContext = import_react2.default.createContext({
  selectedTab: null,
  selectTab: (tab) => {
    throw new Error("should not be used without TabContext.Provider");
  }
});
function Tabs({
  children,
  defaultSelectedTab
}) {
  const [selectedTab, selectTab] = (0, import_react2.useState)(defaultSelectedTab);
  const contextValue = (0, import_react2.useMemo)(
    () => ({
      selectTab,
      selectedTab
    }),
    [selectedTab, selectTab]
  );
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TabsContext.Provider, { value: contextValue, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children }, void 0, false, {
    fileName: "app/components/common/tab.tsx",
    lineNumber: 32,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/common/tab.tsx",
    lineNumber: 31,
    columnNumber: 5
  }, this);
}
function TabList({ children }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children }, void 0, false, {
    fileName: "app/components/common/tab.tsx",
    lineNumber: 38,
    columnNumber: 10
  }, this);
}
function Tab({
  children,
  tab,
  link
}) {
  const { selectedTab, selectTab } = import_react2.default.useContext(TabsContext);
  if (link) {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: link, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "button",
      {
        className: selectedTab === tab ? "flex border-b border-c-cyan px-3 font-Roboto font-bold text-c-cyan" : "flex justify-center px-3 font-Roboto text-c-cyann",
        onClick: () => selectTab(tab),
        children
      },
      void 0,
      false,
      {
        fileName: "app/components/common/tab.tsx",
        lineNumber: 55,
        columnNumber: 9
      },
      this
    ) }, void 0, false, {
      fileName: "app/components/common/tab.tsx",
      lineNumber: 54,
      columnNumber: 7
    }, this);
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
    "button",
    {
      className: selectedTab === tab ? "flex border-b border-c-cyan px-3 font-Roboto font-bold text-c-cyan" : "flex justify-center px-3 font-Roboto text-c-cyann",
      onClick: () => selectTab(tab),
      children
    },
    void 0,
    false,
    {
      fileName: "app/components/common/tab.tsx",
      lineNumber: 70,
      columnNumber: 5
    },
    this
  );
}
function TabPanel({
  children,
  tab
}) {
  const { selectedTab } = import_react2.default.useContext(TabsContext);
  if (selectedTab !== tab)
    return null;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children }, void 0, false, {
    fileName: "app/components/common/tab.tsx",
    lineNumber: 94,
    columnNumber: 10
  }, this);
}

// app/utils/nostr-event.ts
function getThreadRoot(event) {
  var _a, _b, _c, _d;
  const rootEvent = (_b = (_a = event == null ? void 0 : event.tags) == null ? void 0 : _a.find(
    (t) => t[0] === "e" && t[3] === "root"
  )) == null ? void 0 : _b[1];
  if (rootEvent) {
    return rootEvent;
  }
  return (_d = (_c = event == null ? void 0 : event.tags) == null ? void 0 : _c.find((t) => t[0] === "e")) == null ? void 0 : _d[1];
}
function getReplyingToEvent(event) {
  var _a, _b;
  if (!event) {
    return void 0;
  }
  const replyTags = (_a = event.tags) == null ? void 0 : _a.filter(
    (tag) => tag[0] === "e" && tag[3] !== "mention"
  );
  if (replyTags.length === 1) {
    return replyTags[0][1];
  }
  const replyTag = (_b = event.tags) == null ? void 0 : _b.find(
    (tag) => tag[0] === "e" && tag[3] === "reply"
  );
  if (replyTag) {
    return replyTag[1];
  }
  if (replyTags.length > 1) {
    return replyTags[1][1];
  }
  return void 0;
}

export {
  Tabs,
  TabList,
  Tab,
  TabPanel,
  getThreadRoot,
  getReplyingToEvent
};
//# sourceMappingURL=/build/_shared/chunk-STZVJ64V.js.map

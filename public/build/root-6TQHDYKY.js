import {
  UserContext
} from "/build/_shared/chunk-7PPFV3VI.js";
import {
  require_node
} from "/build/_shared/chunk-TKUYKEFQ.js";
import {
  require_session
} from "/build/_shared/chunk-ZQW7CLJ5.js";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData
} from "/build/_shared/chunk-PBW5ITDT.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-GAVVBTB4.js";
import {
  __toESM
} from "/build/_shared/chunk-FFEYCVP6.js";

// app/root.tsx
var import_node = __toESM(require_node());
var import_session = __toESM(require_session());

// app/tailwind.css
var tailwind_default = "/build/_assets/tailwind-475SA4XV.css";

// app/root.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var links = () => [
  { rel: "stylesheet", href: tailwind_default },
  { rel: "preload", href: "https://fonts.googleapis.com" },
  { rel: "preload", href: "https://fonts.gstatic.com" },
  {
    href: "https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Roboto:wght@300;400;500;700&display=swap",
    rel: "stylesheet"
  }
];
function GemApp() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("html", { lang: "en", className: "h-full", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("meta", { charSet: "utf-8" }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 34,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("meta", { name: "viewport", content: "width=device-width,initial-scale=1" }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 35,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Meta, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 36,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Links, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 37,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/root.tsx",
      lineNumber: 33,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("body", { className: "h-full", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Outlet, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 40,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ScrollRestoration, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 41,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Scripts, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 42,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LiveReload, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 43,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/root.tsx",
      lineNumber: 39,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/root.tsx",
    lineNumber: 32,
    columnNumber: 5
  }, this);
}
function App() {
  const { user } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(UserContext.Provider, { value: user, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(GemApp, {}, void 0, false, {
    fileName: "app/root.tsx",
    lineNumber: 55,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/root.tsx",
    lineNumber: 54,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/root.tsx",
    lineNumber: 53,
    columnNumber: 5
  }, this);
}
export {
  App as default,
  links
};
//# sourceMappingURL=/build/root-6TQHDYKY.js.map

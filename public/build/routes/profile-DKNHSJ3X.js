import {
  content_default
} from "/build/_shared/chunk-VF2ZEHT7.js";
import "/build/_shared/chunk-XFYNK4ZR.js";
import {
  require_session
} from "/build/_shared/chunk-ZQW7CLJ5.js";
import {
  gem_default
} from "/build/_shared/chunk-6LNMZJIT.js";
import {
  useLoaderData
} from "/build/_shared/chunk-PBW5ITDT.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-GAVVBTB4.js";
import {
  __toESM
} from "/build/_shared/chunk-FFEYCVP6.js";

// app/components/settings/layout.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function Content({ children }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-c-darkgray min-w-[1093px] max-w-full border-l border-c-gray min-h-[752px] overflow-y-auto transition duration-500 font-Roboto", children }, void 0, false, {
    fileName: "app/components/settings/layout.tsx",
    lineNumber: 24,
    columnNumber: 5
  }, this);
}

// app/routes/profile.tsx
var import_session = __toESM(require_session());
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
function Profile() {
  const user = useLoaderData();
  const profileData = content_default(user == null ? void 0 : user.pubkey);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Content, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
      "div",
      {
        className: "bg-cover bg-center h-64",
        style: { backgroundImage: 'url("/path-to-your-banner-image.jpg")' },
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "bg-black bg-opacity-40 h-64 flex items-center justify-center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h1", { className: "text-3xl font-semibold text-white", children: "Welcome to My Profile" }, void 0, false, {
            fileName: "app/routes/profile.tsx",
            lineNumber: 30,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "text-lg text-white", children: "Discover more about me and my interests." }, void 0, false, {
            fileName: "app/routes/profile.tsx",
            lineNumber: 33,
            columnNumber: 11
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/profile.tsx",
          lineNumber: 29,
          columnNumber: 9
        }, this)
      },
      void 0,
      false,
      {
        fileName: "app/routes/profile.tsx",
        lineNumber: 24,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "max-w-3xl mx-auto mt-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "bg-white shadow-md rounded-lg p-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
        "img",
        {
          src: gem_default,
          alt: "Profile Picture",
          className: "rounded-full w-32 h-32 mx-auto -mt-16 border-4 border-white shadow-lg"
        },
        void 0,
        false,
        {
          fileName: "app/routes/profile.tsx",
          lineNumber: 43,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h2", { className: "text-xl font-semibold mt-4", children: profileData.name }, void 0, false, {
        fileName: "app/routes/profile.tsx",
        lineNumber: 49,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "text-gray-500", children: "Your Bio or Description" }, void 0, false, {
        fileName: "app/routes/profile.tsx",
        lineNumber: 50,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "mt-4" }, void 0, false, {
        fileName: "app/routes/profile.tsx",
        lineNumber: 51,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/profile.tsx",
      lineNumber: 41,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/profile.tsx",
      lineNumber: 40,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/profile.tsx",
    lineNumber: 22,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/profile.tsx",
    lineNumber: 21,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/profile.tsx",
    lineNumber: 20,
    columnNumber: 5
  }, this);
}
export {
  Profile as default
};
//# sourceMappingURL=/build/routes/profile-DKNHSJ3X.js.map

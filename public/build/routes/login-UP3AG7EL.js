import {
  Button,
  index_modern_default
} from "/build/_shared/chunk-AO5ZBG5V.js";
import {
  require_node
} from "/build/_shared/chunk-TKUYKEFQ.js";
import {
  require_session
} from "/build/_shared/chunk-ZQW7CLJ5.js";
import {
  IconCircleX,
  IconNostr,
  gem_default
} from "/build/_shared/chunk-6LNMZJIT.js";
import {
  Link,
  useNavigation,
  useSubmit
} from "/build/_shared/chunk-PBW5ITDT.js";
import {
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-GAVVBTB4.js";
import {
  __toESM
} from "/build/_shared/chunk-FFEYCVP6.js";

// app/routes/login.tsx
var import_node = __toESM(require_node());
var import_react8 = __toESM(require_react());
var import_session = __toESM(require_session());

// public/assets/images/onboardinglogo.png
var onboardinglogo_default = "/build/_assets/onboardinglogo-OQV2GK6J.png";

// app/components/landing.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function Landing({
  setShowModal
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg h-[90px]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex w-full", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "login h-[790px] w-1/2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: " mt-[120px] flex items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: onboardinglogo_default, alt: "", className: "w-1/2" }, void 0, false, {
        fileName: "app/components/landing.tsx",
        lineNumber: 18,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/components/landing.tsx",
        lineNumber: 17,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-8 flex justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: " w-1/2 items-center text-center text-xl text-c-lightgray ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: " font-Bebas", children: [
        "GEMS IS A DECENTRALIZED, OPEN SOURCE SOCIAL PLATFORM.",
        " "
      ] }, void 0, true, {
        fileName: "app/components/landing.tsx",
        lineNumber: 22,
        columnNumber: 17
      }, this) }, void 0, false, {
        fileName: "app/components/landing.tsx",
        lineNumber: 21,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/components/landing.tsx",
        lineNumber: 20,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/landing.tsx",
      lineNumber: 16,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-1/2 overflow-y-auto bg-gray-700", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: " mt-[150px] flex items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: gem_default, alt: "", className: "w-20" }, void 0, false, {
        fileName: "app/components/landing.tsx",
        lineNumber: 31,
        columnNumber: 17
      }, this) }, void 0, false, {
        fileName: "app/components/landing.tsx",
        lineNumber: 30,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-5 flex flex-col items-center justify-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-[1px] w-[300px] bg-white" }, void 0, false, {
          fileName: "app/components/landing.tsx",
          lineNumber: 34,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-1 h-[1px] w-[300px] bg-white" }, void 0, false, {
          fileName: "app/components/landing.tsx",
          lineNumber: 35,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/landing.tsx",
        lineNumber: 33,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-2 flex justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "font-Bebas text-6xl text-gray-300", children: [
        "WELCOME TO",
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "bg-gradient-to-r from-cyan-800 to-cyan-500 bg-clip-text text-transparent", children: "GEMS" }, void 0, false, {
          fileName: "app/components/landing.tsx",
          lineNumber: 40,
          columnNumber: 19
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/landing.tsx",
        lineNumber: 38,
        columnNumber: 17
      }, this) }, void 0, false, {
        fileName: "app/components/landing.tsx",
        lineNumber: 37,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-20 flex flex-col justify-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-center ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          Button,
          {
            size: "medium",
            color: "white",
            className: "mt-2 w-[400px] font-Bebas text-2xl ",
            onClick: () => setShowModal(true),
            children: "LOGIN WITH NOSTR KEYCHAIN"
          },
          void 0,
          false,
          {
            fileName: "app/components/landing.tsx",
            lineNumber: 47,
            columnNumber: 19
          },
          this
        ) }, void 0, false, {
          fileName: "app/components/landing.tsx",
          lineNumber: 46,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-center ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/how-to-get-nos2x", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          Button,
          {
            size: "medium",
            color: "cyan",
            className: "mt-2 w-[400px] font-Bebas text-2xl ",
            children: "DONT HAVE A NOSTR KEYCHAIN? CLICK HERE"
          },
          void 0,
          false,
          {
            fileName: "app/components/landing.tsx",
            lineNumber: 58,
            columnNumber: 21
          },
          this
        ) }, void 0, false, {
          fileName: "app/components/landing.tsx",
          lineNumber: 57,
          columnNumber: 19
        }, this) }, void 0, false, {
          fileName: "app/components/landing.tsx",
          lineNumber: 56,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/landing.tsx",
        lineNumber: 45,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: " mt-[150px] font-Bebas text-xl", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "flex items-center justify-center text-center text-c-lightgray", children: [
        "LEARN MORE AT",
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "ml-1 text-c-cyan", children: " GEMS.XYZ/FAQ" }, void 0, false, {
          fileName: "app/components/landing.tsx",
          lineNumber: 71,
          columnNumber: 19
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/landing.tsx",
        lineNumber: 69,
        columnNumber: 17
      }, this) }, void 0, false, {
        fileName: "app/components/landing.tsx",
        lineNumber: 68,
        columnNumber: 15
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/landing.tsx",
      lineNumber: 29,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/components/landing.tsx",
      lineNumber: 28,
      columnNumber: 11
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/landing.tsx",
    lineNumber: 15,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/components/landing.tsx",
    lineNumber: 14,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/landing.tsx",
    lineNumber: 13,
    columnNumber: 5
  }, this);
}

// app/components/auth/login-options.tsx
var import_react6 = __toESM(require_react());

// app/components/auth/nos2x-login.tsx
var import_react3 = __toESM(require_react());
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
function Nos2xLogin({
  navigation
}) {
  const submit = useSubmit();
  const formRef = (0, import_react3.useRef)(null);
  async function login2(event) {
    try {
      event.preventDefault();
      if (formRef.current === null) {
        window.alert("An error occured trying to get your public key.");
      }
      const pubkey = await window.nostr.getPublicKey();
      const relays = [
        "wss://relay.damus.io",
        "wss://relay.snort.social",
        "wss://relay.gems.xyz"
      ];
      const formData = new FormData(formRef.current);
      const ref = pubkey;
      formData.set("pubkey", ref);
      submit(formData, { method: "POST" });
    } catch (error) {
      if (error == "TypeError: Cannot read properties of undefined (reading 'getPublicKey')") {
        window.alert("No public key acquired. Install nos2x extension first.");
      } else {
        window.alert("An error occured trying to get your public key.");
      }
      return;
    }
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("form", { ref: formRef, onSubmit: login2, method: "post", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
    Button,
    {
      size: "medium",
      type: "submit",
      className: "items-ceter mt-2 flex w-[350px] justify-center font-Bebas text-xl ",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(IconNostr, {}, void 0, false, {
          fileName: "app/components/auth/nos2x-login.tsx",
          lineNumber: 62,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "ml-2", children: navigation.state === "submitting" ? "Authenticating..." : "NOS2X" }, void 0, false, {
          fileName: "app/components/auth/nos2x-login.tsx",
          lineNumber: 63,
          columnNumber: 11
        }, this)
      ]
    },
    void 0,
    true,
    {
      fileName: "app/components/auth/nos2x-login.tsx",
      lineNumber: 57,
      columnNumber: 9
    },
    this
  ) }, void 0, false, {
    fileName: "app/components/auth/nos2x-login.tsx",
    lineNumber: 56,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/auth/nos2x-login.tsx",
    lineNumber: 55,
    columnNumber: 5
  }, this);
}

// app/components/auth/alby-login.tsx
var import_react5 = __toESM(require_react());

// public/assets/images/sample/alby.png
var alby_default = "/build/_assets/alby-K2ZDYS5Y.png";

// app/components/auth/alby-login.tsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime());
function AlbyLogin({
  navigation
}) {
  const submit = useSubmit();
  const formRef = (0, import_react5.useRef)(null);
  async function login2(event) {
    try {
      event.preventDefault();
      if (formRef.current === null) {
        window.alert("An error occured trying to get your public key.");
      }
      const pubkey = await window.nostr.getPublicKey();
      const formData = new FormData(formRef.current);
      const ref = pubkey;
      formData.set("pubkey", ref);
      submit(formData, { method: "POST" });
    } catch (error) {
      if (error == "TypeError: Cannot read properties of undefined (reading 'getPublicKey')") {
        window.alert("No public key acquired. Install nos2x extension first.");
      } else {
        window.alert("An error occured trying to get your public key.");
      }
      return;
    }
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_jsx_dev_runtime3.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("form", { ref: formRef, onSubmit: login2, method: "post", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
    Button,
    {
      size: "medium",
      type: "submit",
      className: "items-ceter mt-2 flex w-[350px] justify-center font-Bebas text-xl ",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { src: alby_default, alt: "", className: "mr-2 w-8" }, void 0, false, {
          fileName: "app/components/auth/alby-login.tsx",
          lineNumber: 55,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "ml-2", children: navigation.state === "submitting" ? "Authenticating..." : "ALBY" }, void 0, false, {
          fileName: "app/components/auth/alby-login.tsx",
          lineNumber: 56,
          columnNumber: 11
        }, this)
      ]
    },
    void 0,
    true,
    {
      fileName: "app/components/auth/alby-login.tsx",
      lineNumber: 50,
      columnNumber: 9
    },
    this
  ) }, void 0, false, {
    fileName: "app/components/auth/alby-login.tsx",
    lineNumber: 49,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/auth/alby-login.tsx",
    lineNumber: 48,
    columnNumber: 5
  }, this);
}

// app/components/auth/login-options.tsx
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime());
function LoginOptions({
  setProgress,
  onClose
  // New prop
}) {
  const navigation = useNavigation();
  (0, import_react6.useEffect)(() => {
    navigation.state == "idle" ? setProgress(0) : navigation.state == "submitting" ? setProgress(50) : navigation.state == "loading" ? setProgress(100) : setProgress(0);
  }, [navigation.state, setProgress]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 backdrop-blur-sm", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "h-[280px] w-[400px] rounded-lg bg-c-gray px-3 py-5 font-Roboto text-xl text-c-lightgray", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "flex justify-end", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
      "button",
      {
        onClick: onClose,
        className: "text-c-lightgray hover:text-c-white focus:outline-none",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(IconCircleX, {}, void 0, false, {
          fileName: "app/components/auth/login-options.tsx",
          lineNumber: 35,
          columnNumber: 13
        }, this)
      },
      void 0,
      false,
      {
        fileName: "app/components/auth/login-options.tsx",
        lineNumber: 31,
        columnNumber: 11
      },
      this
    ) }, void 0, false, {
      fileName: "app/components/auth/login-options.tsx",
      lineNumber: 30,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "mt-5 flex flex-col items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "flex items-center justify-center font-Bebas text-4xl", children: [
      "Choose keychain",
      " "
    ] }, void 0, true, {
      fileName: "app/components/auth/login-options.tsx",
      lineNumber: 39,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/components/auth/login-options.tsx",
      lineNumber: 38,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "mt-5 flex items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Nos2xLogin, { navigation }, void 0, false, {
      fileName: "app/components/auth/login-options.tsx",
      lineNumber: 44,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/components/auth/login-options.tsx",
      lineNumber: 43,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "mt-3 flex items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(AlbyLogin, { navigation }, void 0, false, {
      fileName: "app/components/auth/login-options.tsx",
      lineNumber: 47,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/components/auth/login-options.tsx",
      lineNumber: 46,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/auth/login-options.tsx",
    lineNumber: 29,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/auth/login-options.tsx",
    lineNumber: 28,
    columnNumber: 5
  }, this);
}

// app/routes/login.tsx
var import_jsx_dev_runtime5 = __toESM(require_jsx_dev_runtime());
function login_default() {
  const [progress, setProgress] = (0, import_react8.useState)(0);
  const [showModal, setShowModal] = (0, import_react8.useState)(false);
  const handleCloseModal = () => {
    setShowModal(false);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_jsx_dev_runtime5.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
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
        fileName: "app/routes/login.tsx",
        lineNumber: 53,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Landing, { setShowModal }, void 0, false, {
      fileName: "app/routes/login.tsx",
      lineNumber: 59,
      columnNumber: 7
    }, this),
    showModal && /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(LoginOptions, { onClose: handleCloseModal, setProgress }, void 0, false, {
      fileName: "app/routes/login.tsx",
      lineNumber: 61,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/login.tsx",
    lineNumber: 52,
    columnNumber: 5
  }, this);
}
export {
  login_default as default
};
//# sourceMappingURL=/build/routes/login-UP3AG7EL.js.map

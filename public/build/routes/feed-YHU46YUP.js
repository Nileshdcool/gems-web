import {
  Tab,
  TabList,
  TabPanel,
  Tabs,
  getReplyingToEvent,
  getThreadRoot
} from "/build/_shared/chunk-STZVJ64V.js";
import {
  FeedLoader,
  MainContainer,
  Menu,
  PostButtonLoader,
  Posts,
  Q,
  RightPane,
  TabContainer,
  avatar_default,
  contacts_default,
  require_moment,
  useNostr
} from "/build/_shared/chunk-TBTM2GPZ.js";
import {
  Button
} from "/build/_shared/chunk-AO5ZBG5V.js";
import {
  useUser
} from "/build/_shared/chunk-7PPFV3VI.js";
import {
  require_node
} from "/build/_shared/chunk-TKUYKEFQ.js";
import {
  content_default,
  create,
  require_lodash,
  useSubscribe
} from "/build/_shared/chunk-VF2ZEHT7.js";
import {
  SimplePool,
  getEventHash,
  matchFilters
} from "/build/_shared/chunk-XFYNK4ZR.js";
import {
  require_session
} from "/build/_shared/chunk-ZQW7CLJ5.js";
import {
  IconCircleX,
  IconUploadImage,
  IconXSize
} from "/build/_shared/chunk-6LNMZJIT.js";
import {
  useLoaderData,
  useSearchParams
} from "/build/_shared/chunk-PBW5ITDT.js";
import {
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-GAVVBTB4.js";
import {
  __toESM
} from "/build/_shared/chunk-FFEYCVP6.js";

// app/routes/feed.tsx
var import_react10 = __toESM(require_react());
var import_session2 = __toESM(require_session());

// app/components/feed/new-post.tsx
var import_react = __toESM(require_react());
var import_moment = __toESM(require_moment());
var import_session = __toESM(require_session());
var import_node = __toESM(require_node());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function NewPost() {
  const [message, setMessage] = (0, import_react.useState)("");
  const [fileUrl, setFileUrl] = (0, import_react.useState)("");
  const [uploading, setUpLoading] = (0, import_react.useState)(true);
  const { publish } = useNostr();
  const { user } = useLoaderData();
  const { picture: picture2 } = content_default(user == null ? void 0 : user.pubkey);
  const [error, setError] = (0, import_react.useState)(false);
  const [selectedImage, setSelectedImage] = (0, import_react.useState)(null);
  async function uploadFile(files) {
    if (files) {
      const fileRef = files[0] || "";
      if (!fileRef) {
        setError(true);
        return;
      }
      setSelectedImage(fileRef);
      const data = new FormData();
      data.append("file", fileRef);
      const res = await fetch("/api/storage", {
        method: "POST",
        body: data
      });
      const json2 = await res.json();
      setFileUrl(json2.data.url);
      setMessage(message + json2.data.url);
      setUpLoading(false);
    }
  }
  function atPost() {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "button",
      {
        type: "submit",
        name: "_action",
        value: '{"NEW_POST"}',
        className: `rounded-md px-4 py-1 font-Roboto ${!message || !message.trim() ? "cursor-not-allowed bg-gray-400" : "bg-c-cyan"} text-c-white`,
        disabled: !message || !message.trim(),
        children: "Post"
      },
      void 0,
      false,
      {
        fileName: "app/components/feed/new-post.tsx",
        lineNumber: 62,
        columnNumber: 9
      },
      this
    ) }, void 0, false, {
      fileName: "app/components/feed/new-post.tsx",
      lineNumber: 61,
      columnNumber: 7
    }, this);
  }
  const handleDelete = () => {
    setSelectedImage(null);
    setFileUrl("");
    setMessage("");
  };
  const renderImagePreview = () => {
    if (fileUrl) {
      return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex rounded-lg", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "img",
          {
            src: fileUrl,
            alt: "Preview",
            className: "h-[150px] w-[150px] rounded-lg"
          },
          void 0,
          false,
          {
            fileName: "app/components/feed/new-post.tsx",
            lineNumber: 89,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "div",
          {
            className: "-ml-8 mt-2 flex cursor-pointer justify-end",
            onClick: handleDelete,
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-c-darkgray", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(IconXSize, { className: "" }, void 0, false, {
              fileName: "app/components/feed/new-post.tsx",
              lineNumber: 99,
              columnNumber: 15
            }, this) }, void 0, false, {
              fileName: "app/components/feed/new-post.tsx",
              lineNumber: 98,
              columnNumber: 13
            }, this)
          },
          void 0,
          false,
          {
            fileName: "app/components/feed/new-post.tsx",
            lineNumber: 94,
            columnNumber: 11
          },
          this
        )
      ] }, void 0, true, {
        fileName: "app/components/feed/new-post.tsx",
        lineNumber: 88,
        columnNumber: 9
      }, this);
    } else if (selectedImage) {
      return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex rounded-lg", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "img",
          {
            src: URL.createObjectURL(selectedImage),
            alt: "Preview",
            className: "h-[150px] w-[150px] rounded-lg"
          },
          void 0,
          false,
          {
            fileName: "app/components/feed/new-post.tsx",
            lineNumber: 107,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "div",
          {
            className: "-ml-8 mt-2 flex cursor-pointer justify-end",
            onClick: handleDelete,
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-c-darkgray", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(IconXSize, { className: "" }, void 0, false, {
              fileName: "app/components/feed/new-post.tsx",
              lineNumber: 117,
              columnNumber: 15
            }, this) }, void 0, false, {
              fileName: "app/components/feed/new-post.tsx",
              lineNumber: 116,
              columnNumber: 13
            }, this)
          },
          void 0,
          false,
          {
            fileName: "app/components/feed/new-post.tsx",
            lineNumber: 112,
            columnNumber: 11
          },
          this
        )
      ] }, void 0, true, {
        fileName: "app/components/feed/new-post.tsx",
        lineNumber: 106,
        columnNumber: 9
      }, this);
    } else {
      return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {}, void 0, false, {
        fileName: "app/components/feed/new-post.tsx",
        lineNumber: 123,
        columnNumber: 14
      }, this);
    }
  };
  const postToRelay = async (e) => {
    const event = {
      content: message,
      kind: 1,
      tags: [],
      created_at: (0, import_moment.default)().unix(),
      pubkey
    };
    if (selectedImage) {
      const data = new FormData();
      data.append("file", selectedImage);
      const res = await fetch("/api/storage", {
        method: "POST",
        body: data
      });
      const json2 = await res.json();
      event.content += json2.data.url;
    }
    event.id = getEventHash(event);
    e.preventDefault();
    const signatureOrEvent = await window.nostr.signEvent(event);
    switch (typeof signatureOrEvent) {
      case "string":
        event.sig = signatureOrEvent;
        break;
      case "object":
        event.sig = signatureOrEvent.sig;
        break;
      default:
        throw new Error("Failed to sign with Nostr extension.");
    }
    setMessage("");
    setFileUrl("");
    setSelectedImage(null);
    publish(event);
    Q.success("Post submitted!");
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-2 flex justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-[1px] w-[680px] bg-c-shadegray " }, void 0, false, {
      fileName: "app/components/feed/new-post.tsx",
      lineNumber: 171,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/feed/new-post.tsx",
      lineNumber: 170,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-3 rounded-md border border-c-cyan px-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-3 flex px-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        avatar_default,
        {
          pubkey: user == null ? void 0 : user.pubkey,
          userData: { picture: picture2 },
          className: "h-12 w-12 rounded-md"
        },
        void 0,
        false,
        {
          fileName: "app/components/feed/new-post.tsx",
          lineNumber: 176,
          columnNumber: 13
        },
        this
      ) }, void 0, false, {
        fileName: "app/components/feed/new-post.tsx",
        lineNumber: 175,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "ml-3 flex justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: " mb-2 w-[520px] ", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "min-h-[20px]", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "text", className: "sr-only" }, void 0, false, {
            fileName: "app/components/feed/new-post.tsx",
            lineNumber: 185,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "textarea",
            {
              placeholder: "Whats on your mind?",
              className: "min-h-[50px] w-full border-none bg-transparent text-sm focus-within:ring-0",
              onChange: (event) => setMessage(event.target.value),
              value: message,
              id: "message",
              name: "message"
            },
            void 0,
            false,
            {
              fileName: "app/components/feed/new-post.tsx",
              lineNumber: 186,
              columnNumber: 17
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: renderImagePreview() }, void 0, false, {
            fileName: "app/components/feed/new-post.tsx",
            lineNumber: 194,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/feed/new-post.tsx",
          lineNumber: 184,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-[1px] w-[520px] bg-c-shadegray" }, void 0, false, {
          fileName: "app/components/feed/new-post.tsx",
          lineNumber: 197,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/components/feed/new-post.tsx",
          lineNumber: 196,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex h-[28px] px-5 py-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "cursor-pointer text-c-lightbrown", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "fileUpload", className: "cursor-pointer", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(IconUploadImage, { className: "mr-3 cursor-pointer" }, void 0, false, {
              fileName: "app/components/feed/new-post.tsx",
              lineNumber: 203,
              columnNumber: 23
            }, this) }, void 0, false, {
              fileName: "app/components/feed/new-post.tsx",
              lineNumber: 202,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              "input",
              {
                type: "file",
                id: "fileUpload",
                accept: "image/*",
                onChange: (e) => uploadFile(e.target.files),
                multiple: true,
                className: "hidden"
              },
              void 0,
              false,
              {
                fileName: "app/components/feed/new-post.tsx",
                lineNumber: 205,
                columnNumber: 21
              },
              this
            )
          ] }, void 0, true, {
            fileName: "app/components/feed/new-post.tsx",
            lineNumber: 201,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "app/components/feed/new-post.tsx",
            lineNumber: 200,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-1 px-5", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "form",
            {
              onSubmit: (event) => {
                event.preventDefault();
                postToRelay(event);
              },
              method: "post",
              children: atPost()
            },
            void 0,
            false,
            {
              fileName: "app/components/feed/new-post.tsx",
              lineNumber: 216,
              columnNumber: 19
            },
            this
          ) }, void 0, false, {
            fileName: "app/components/feed/new-post.tsx",
            lineNumber: 215,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/feed/new-post.tsx",
          lineNumber: 199,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/feed/new-post.tsx",
        lineNumber: 183,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/feed/new-post.tsx",
        lineNumber: 182,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/feed/new-post.tsx",
      lineNumber: 174,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/feed/new-post.tsx",
      lineNumber: 173,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-2 flex justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-[1px] w-[680px] bg-c-shadegray" }, void 0, false, {
      fileName: "app/components/feed/new-post.tsx",
      lineNumber: 232,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/feed/new-post.tsx",
      lineNumber: 231,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/feed/new-post.tsx",
    lineNumber: 169,
    columnNumber: 5
  }, this);
}
function NewPostModal({ close }) {
  const [message, setMessage] = (0, import_react.useState)("");
  const [fileUrl, setFileUrl] = (0, import_react.useState)("");
  const [uploading, setUploading] = (0, import_react.useState)(false);
  const { publish } = useNostr();
  const user = useUser();
  const pubkey2 = user.pubkey;
  const [error, setError] = (0, import_react.useState)(false);
  const [selectedImage, setSelectedImage] = (0, import_react.useState)(null);
  async function uploadFile(files) {
    if (files) {
      const fileRef = files[0] || "";
      if (!fileRef) {
        setError(true);
        return;
      }
      setSelectedImage(fileRef);
      const data = new FormData();
      data.append("file", fileRef);
      const res = await fetch("/api/storage", {
        method: "POST",
        body: data
      });
      const json2 = await res.json();
      setFileUrl(json2.data.url);
      setMessage(message + json2.data.url);
      setUploading(false);
    }
  }
  function atPost() {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "button",
      {
        type: "submit",
        name: "_action",
        value: '{"NEW_POST"}',
        className: `rounded-md px-4 py-1 font-Roboto ${!message || !message.trim() ? "cursor-not-allowed bg-gray-400" : "bg-c-cyan"} text-c-white`,
        disabled: !message || !message.trim(),
        children: "Post"
      },
      void 0,
      false,
      {
        fileName: "app/components/feed/new-post.tsx",
        lineNumber: 272,
        columnNumber: 9
      },
      this
    ) }, void 0, false, {
      fileName: "app/components/feed/new-post.tsx",
      lineNumber: 271,
      columnNumber: 7
    }, this);
  }
  const handleDelete = () => {
    setSelectedImage(null);
    setFileUrl("");
    setMessage("");
  };
  const renderImagePreview = () => {
    if (fileUrl) {
      return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex rounded-lg", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "img",
          {
            src: fileUrl,
            alt: "Preview",
            className: "h-[150px] w-[150px] rounded-lg"
          },
          void 0,
          false,
          {
            fileName: "app/components/feed/new-post.tsx",
            lineNumber: 299,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "div",
          {
            className: "-ml-8 mt-2 flex cursor-pointer justify-end",
            onClick: handleDelete,
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-c-darkgray", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(IconXSize, { className: "" }, void 0, false, {
              fileName: "app/components/feed/new-post.tsx",
              lineNumber: 309,
              columnNumber: 15
            }, this) }, void 0, false, {
              fileName: "app/components/feed/new-post.tsx",
              lineNumber: 308,
              columnNumber: 13
            }, this)
          },
          void 0,
          false,
          {
            fileName: "app/components/feed/new-post.tsx",
            lineNumber: 304,
            columnNumber: 11
          },
          this
        )
      ] }, void 0, true, {
        fileName: "app/components/feed/new-post.tsx",
        lineNumber: 298,
        columnNumber: 9
      }, this);
    } else if (selectedImage) {
      return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex rounded-lg", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "img",
          {
            src: URL.createObjectURL(selectedImage),
            alt: "Preview",
            className: "h-[150px] w-[150px] rounded-lg"
          },
          void 0,
          false,
          {
            fileName: "app/components/feed/new-post.tsx",
            lineNumber: 317,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "div",
          {
            className: "-ml-8 mt-2 flex cursor-pointer justify-end",
            onClick: handleDelete,
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-c-darkgray", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(IconXSize, { className: "" }, void 0, false, {
              fileName: "app/components/feed/new-post.tsx",
              lineNumber: 327,
              columnNumber: 15
            }, this) }, void 0, false, {
              fileName: "app/components/feed/new-post.tsx",
              lineNumber: 326,
              columnNumber: 13
            }, this)
          },
          void 0,
          false,
          {
            fileName: "app/components/feed/new-post.tsx",
            lineNumber: 322,
            columnNumber: 11
          },
          this
        )
      ] }, void 0, true, {
        fileName: "app/components/feed/new-post.tsx",
        lineNumber: 316,
        columnNumber: 9
      }, this);
    } else {
      return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {}, void 0, false, {
        fileName: "app/components/feed/new-post.tsx",
        lineNumber: 333,
        columnNumber: 14
      }, this);
    }
  };
  async function postToRelayAndDb() {
    const event = {
      content: message,
      kind: 1,
      tags: [],
      created_at: (0, import_moment.default)().unix(),
      pubkey: pubkey2
    };
    if (selectedImage) {
      const data = new FormData();
      data.append("file", selectedImage);
      const res = await fetch("/api/storage", {
        method: "POST",
        body: data
      });
      const json2 = await res.json();
      event.content += json2.data.url;
    }
    event.id = getEventHash(event);
    const signatureOrEvent = await window.nostr.signEvent(event);
    switch (typeof signatureOrEvent) {
      case "string":
        event.sig = signatureOrEvent;
        break;
      case "object":
        event.sig = signatureOrEvent.sig;
        break;
      default:
        throw new Error("Failed to sign with Nostr extension.");
    }
    setMessage("");
    setFileUrl("");
    setSelectedImage(null);
    publish(event);
    close();
    Q.success("Post submitted!");
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute inset-0 flex items-center  justify-center bg-black bg-opacity-30 backdrop-blur-sm ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "max-h-[full] min-h-[100px] w-[550px] rounded-lg  bg-c-gray py-2 font-Roboto text-xl text-c-lightgray", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-3 px-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "div",
      {
        className: "flex cursor-pointer items-center justify-end",
        onClick: close,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(IconCircleX, {}, void 0, false, {
          fileName: "app/components/feed/new-post.tsx",
          lineNumber: 386,
          columnNumber: 15
        }, this)
      },
      void 0,
      false,
      {
        fileName: "app/components/feed/new-post.tsx",
        lineNumber: 382,
        columnNumber: 13
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      avatar_default,
      {
        pubkey: displayPubkey,
        userData: { picture },
        className: "h-12 w-12 rounded-full",
        alt: ""
      },
      void 0,
      false,
      {
        fileName: "app/components/feed/new-post.tsx",
        lineNumber: 389,
        columnNumber: 15
      },
      this
    ) }, void 0, false, {
      fileName: "app/components/feed/new-post.tsx",
      lineNumber: 388,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-center ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "  mb-2 ", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: " ml-10 mt-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "text", className: "sr-only" }, void 0, false, {
          fileName: "app/components/feed/new-post.tsx",
          lineNumber: 400,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "textarea",
          {
            placeholder: "Whats on your mind?",
            className: "max-h-[300px] min-h-[100px] w-full resize border-none bg-transparent  text-base focus-within:ring-0",
            onChange: (event) => setMessage(event.target.value),
            value: message,
            id: "message",
            name: "message"
          },
          void 0,
          false,
          {
            fileName: "app/components/feed/new-post.tsx",
            lineNumber: 401,
            columnNumber: 19
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: renderImagePreview() }, void 0, false, {
          fileName: "app/components/feed/new-post.tsx",
          lineNumber: 409,
          columnNumber: 19
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/feed/new-post.tsx",
        lineNumber: 399,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-[1px] w-[520px] bg-c-shadegray" }, void 0, false, {
        fileName: "app/components/feed/new-post.tsx",
        lineNumber: 412,
        columnNumber: 19
      }, this) }, void 0, false, {
        fileName: "app/components/feed/new-post.tsx",
        lineNumber: 411,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex h-[28px] px-5 py-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "cursor-pointer text-c-lightbrown", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "fileUpload", className: "cursor-pointer", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(IconUploadImage, { className: "mr-3 cursor-pointer " }, void 0, false, {
            fileName: "app/components/feed/new-post.tsx",
            lineNumber: 418,
            columnNumber: 25
          }, this) }, void 0, false, {
            fileName: "app/components/feed/new-post.tsx",
            lineNumber: 417,
            columnNumber: 23
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "input",
            {
              type: "file",
              id: "fileUpload",
              accept: "image/*",
              onChange: (e) => uploadFile(e.target.files),
              multiple: true,
              className: "hidden"
            },
            void 0,
            false,
            {
              fileName: "app/components/feed/new-post.tsx",
              lineNumber: 420,
              columnNumber: 23
            },
            this
          )
        ] }, void 0, true, {
          fileName: "app/components/feed/new-post.tsx",
          lineNumber: 416,
          columnNumber: 21
        }, this) }, void 0, false, {
          fileName: "app/components/feed/new-post.tsx",
          lineNumber: 415,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-1 px-5", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "button",
          {
            type: "submit",
            name: "_action",
            value: '{"NEW_POST"}',
            className: `rounded-md px-4 py-1 font-Roboto ${!message || !message.trim() ? "cursor-not-allowed bg-gray-400" : "bg-c-cyan"} text-c-white`,
            disabled: !message || !message.trim(),
            onClick: postToRelayAndDb,
            children: "Post"
          },
          void 0,
          false,
          {
            fileName: "app/components/feed/new-post.tsx",
            lineNumber: 431,
            columnNumber: 21
          },
          this
        ) }, void 0, false, {
          fileName: "app/components/feed/new-post.tsx",
          lineNumber: 430,
          columnNumber: 19
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/feed/new-post.tsx",
        lineNumber: 414,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/feed/new-post.tsx",
      lineNumber: 398,
      columnNumber: 15
    }, this) }, void 0, false, {
      fileName: "app/components/feed/new-post.tsx",
      lineNumber: 397,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/feed/new-post.tsx",
    lineNumber: 381,
    columnNumber: 11
  }, this) }, void 0, false, {
    fileName: "app/components/feed/new-post.tsx",
    lineNumber: 380,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/components/feed/new-post.tsx",
    lineNumber: 379,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/feed/new-post.tsx",
    lineNumber: 378,
    columnNumber: 5
  }, this);
}

// app/components/layout/feed.tsx
var import_react8 = __toESM(require_react());

// app/components/feed/following.tsx
var import_react3 = __toESM(require_react());
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
function FollowingFeed({
  followings
}) {
  const filterOptions = [
    {
      name: "Posts",
      filter: {
        kinds: [1],
        authors: followings,
        limit: 100
      },
      filterFn: (event) => !getReplyingToEvent(event)
    },
    {
      name: "Posts & replies",
      filter: {
        kinds: [1, 6],
        authors: followings,
        limit: 100
      },
      filterFn: (event) => getThreadRoot(event)
    }
  ];
  const filter = filterOptions[1];
  const { events: followingPosts, eose } = useSubscribe({
    filters: [filter.filter],
    relays: [
      "wss://relay.gems.xyz",
      "wss://relay.damus.io",
      "wss://relay.snort.social"
    ],
    options: { cacheRefresh: true, force: true, closeAfterEose: false }
  });
  const posts = (0, import_react3.useMemo)(() => {
    const filtered = followingPosts.filter((event) => {
      if (filter.filterFn) {
        return filter.filterFn(event);
      }
      return true;
    }).sort((a, b) => b.created_at - a.created_at);
    return filtered;
  }, [followingPosts, filter]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: !posts || posts.length === 0 || !eose ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(FeedLoader, {}, void 0, false, {
    fileName: "app/components/feed/following.tsx",
    lineNumber: 58,
    columnNumber: 9
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Posts, { events: posts }, void 0, false, {
    fileName: "app/components/feed/following.tsx",
    lineNumber: 60,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/components/feed/following.tsx",
    lineNumber: 56,
    columnNumber: 5
  }, this);
}

// node_modules/nostr-hooks/dist/hooks/usePubkey.js
var import_react4 = __toESM(require_react());

// node_modules/nostr-hooks/dist/store/index.js
var import_lodash2 = __toESM(require_lodash());

// node_modules/nostr-hooks/dist/utils/index.js
var import_lodash = __toESM(require_lodash());
var generateSubId = () => {
  return Math.random().toString(36).substring(2);
};
var isFilterCorrupted = (filter) => {
  return import_lodash.default.find(filter, (value) => {
    if (typeof value === "number") {
      return false;
    }
    if (typeof value === "object") {
      return value.length === 0 || value.some((v) => typeof v === "string" && v.length === 0);
    }
    return typeof value === "string" && value.length === 0;
  });
};
var mergeFilters = (filters) => {
  return import_lodash.default.chain(filters).filter((f) => !isFilterCorrupted(f)).groupBy((f) => {
    const joinedKeys = import_lodash.default.keys(f).join(",");
    const joinedValues = import_lodash.default.values(f).join(",");
    return `${joinedKeys},${f.kinds ? f.kinds.join(",") : ""},${f.since || ""},${f.until || ""},${f.limit ? joinedValues : ""},${f.search ? joinedValues : ""}`;
  }).flatMap((groupedFilters) => import_lodash.default.mergeWith({}, ...groupedFilters, (objValue, srcValue) => import_lodash.default.isArray(objValue) ? import_lodash.default.uniq(objValue.concat(srcValue)) : void 0)).value();
};

// node_modules/nostr-hooks/dist/store/index.js
var useNostrStore = create()((set, get) => ({
  eventMap: /* @__PURE__ */ new Map(),
  isBatching: false,
  isPurging: false,
  pool: new SimplePool(),
  pubkey: "",
  queueMap: /* @__PURE__ */ new Map(),
  subMap: /* @__PURE__ */ new Map(),
  addEventAndInsertSubIds: (newEvent, newSubIds) => set((store) => {
    let found = false;
    store.eventMap.forEach((_subIds, _event) => {
      if (_event.id === newEvent.id) {
        found = true;
        newSubIds.forEach((newSubId) => _subIds.add(newSubId));
        return;
      }
    });
    if (found === false)
      store.eventMap.set(newEvent, new Set(newSubIds));
    return { eventMap: store.eventMap };
  }),
  clearQueue: () => set({ queueMap: /* @__PURE__ */ new Map() }),
  deleteSubIdFromAllEvents: (subId) => set((store) => {
    store.eventMap.forEach((subIds) => subIds.delete(subId));
    return { eventMap: store.eventMap };
  }),
  deleteSubIdFromSubMap: (subId) => set((store) => {
    store.subMap.delete(subId);
    return { subMap: store.subMap };
  }),
  handleCacheRefresh: (subId, config) => {
    get().insertIntoQueue(config, subId);
    set((store) => {
      store.subMap.forEach((sub, subId2) => {
        if (import_lodash2.default.isEqual(sub.config.filters, config.filters)) {
          sub.eose = false;
          get().insertIntoQueue(sub.config, subId2);
        }
      });
      return { subMap: store.subMap };
    });
    if (get().isBatching === false) {
      setTimeout(get().processQueue, config.options?.batchingInterval || 500);
      get().setIsBatching(true);
    }
  },
  handleInvalidate: (subId, config) => {
    get().insertIntoQueue(config, subId);
    set((store) => {
      store.eventMap.forEach((__, event) => {
        if (matchFilters(config.filters, event)) {
          store.eventMap.delete(event);
        }
      });
      store.subMap.forEach((sub, subId2) => {
        if (import_lodash2.default.isEqual(sub.config.filters, config.filters)) {
          sub.eose = false;
          get().insertIntoQueue(sub.config, subId2);
        }
      });
      return { eventMap: store.eventMap, subMap: store.subMap };
    });
    if (get().isBatching === false) {
      setTimeout(get().processQueue, config.options?.batchingInterval || 500);
      get().setIsBatching(true);
    }
  },
  handleNewSub: ({ filters, relays, options }, subId) => {
    get().insertToSubMap(subId, { filters, relays, options });
    if (options?.invalidate) {
      get().handleInvalidate(subId, { filters, relays, options });
      return;
    }
    let alreadyHasEvents = false;
    get().eventMap.forEach((__, event) => {
      if (matchFilters(filters, event)) {
        alreadyHasEvents = true;
        get().insertSubIdToAnEvent(subId, event);
      }
    });
    if (alreadyHasEvents) {
      if (options?.cacheRefresh) {
        get().handleCacheRefresh(subId, { filters, relays, options });
        return;
      }
      let nextEose = true;
      get().subMap.forEach(({ eose: __eose, config: { filters: __filters } }, __subId) => {
        if (__subId === subId)
          return;
        if (__eose === true)
          return;
        if (import_lodash2.default.isEqual(__filters, filters)) {
          nextEose = false;
          return;
        }
      });
      get().setEoseBySubIds([subId], nextEose);
      return;
    }
    if (options?.force) {
      const newQueueMap = /* @__PURE__ */ new Map();
      newQueueMap.set(subId, { filters, relays, options });
      get().handlePoolSub(newQueueMap);
      return;
    }
    get().insertIntoQueue({ filters, relays, options }, subId);
    if (get().isBatching === false) {
      setTimeout(get().processQueue, options?.batchingInterval || 500);
      get().setIsBatching(true);
    }
  },
  handlePoolSub: (queueMap) => {
    let closeAfterEose = true;
    const filters = [];
    const relays = [];
    queueMap.forEach((config) => {
      filters.push(...config.filters);
      relays.push(...config.relays);
      if (config.options?.closeAfterEose === false) {
        closeAfterEose = false;
      }
    });
    const pool = get().pool;
    const sub = pool.sub(import_lodash2.default.uniq(relays), mergeFilters(filters));
    sub.on("event", (event) => {
      queueMap.forEach((config, subId) => {
        if (matchFilters(config.filters, event)) {
          get().addEventAndInsertSubIds(event, [subId]);
        }
      });
    });
    sub.on("eose", () => {
      if (closeAfterEose) {
        sub.unsub();
      }
      queueMap.forEach((config) => {
        get().setEoseByFilters(config.filters, true);
      });
    });
  },
  insertIntoQueue: (config, subId) => set((store) => {
    store.queueMap.set(subId, config);
    return { queueMap: store.queueMap };
  }),
  insertSubIdToAnEvent: (newSubId, event) => set((store) => {
    store.eventMap.forEach((_subIds, _event) => {
      if (_event.id === event.id) {
        _subIds.add(newSubId);
        return;
      }
    });
    return { eventMap: store.eventMap };
  }),
  insertToSubMap: (subId, config) => set((store) => {
    store.subMap.set(subId, { config, eose: false });
    return { subMap: store.subMap };
  }),
  loadMore: (subId) => {
    const config = get().subMap.get(subId)?.config;
    if (!config)
      return;
    const eventsOfThisSubId = [];
    get().eventMap.forEach((subIds, event) => subIds.has(subId) && eventsOfThisSubId.push(event));
    const oldestEventTimestamp = import_lodash2.default.min(eventsOfThisSubId.map((event) => event.created_at));
    if (oldestEventTimestamp) {
      config.filters = config.filters.map((filter) => ({
        ...filter,
        until: oldestEventTimestamp - 1
      }));
    }
    get().insertIntoQueue(config, subId);
    if (get().isBatching === false) {
      setTimeout(get().processQueue, config.options?.batchingInterval || 500);
      get().setIsBatching(true);
    }
  },
  processQueue: () => {
    const queueMap = get().queueMap;
    if (queueMap.size === 0)
      return;
    get().setIsBatching(false);
    get().handlePoolSub(queueMap);
    get().clearQueue();
  },
  purgeEvents: () => {
    set((store) => {
      store.eventMap.forEach((subIds, event) => subIds.size === 0 && store.eventMap.delete(event));
      return { eventMap: store.eventMap };
    });
    get().setIsPurging(false);
  },
  setEoseByFilters: (filters, eose) => set((store) => {
    store.subMap.forEach((sub) => import_lodash2.default.isEqual(sub.config.filters, filters) && (sub.eose = eose));
    return { subMap: store.subMap };
  }),
  setEoseBySubIds: (subIds, eose) => set((store) => {
    store.subMap.forEach((sub, subId) => subIds.includes(subId) && (sub.eose = eose));
    return { subMap: store.subMap };
  }),
  setPubkey: (pubkey2) => set({ pubkey: pubkey2 }),
  setIsBatching: (isBatching) => set({ isBatching }),
  setIsPurging: (isPurging) => set({ isPurging }),
  unSub: (subId) => {
    get().deleteSubIdFromAllEvents(subId);
    get().deleteSubIdFromSubMap(subId);
    if (get().isPurging === false) {
      setTimeout(get().purgeEvents, 1e3 * 10);
      get().setIsPurging(true);
    }
  }
}));

// node_modules/nostr-hooks/dist/hooks/usePublish.js
var import_react5 = __toESM(require_react());

// node_modules/nostr-hooks/dist/hooks/useSubscribe.js
var import_react6 = __toESM(require_react());
var useSubscribe2 = ({ filters, relays, options }) => {
  const subId = (0, import_react6.useRef)(generateSubId());
  const shouldCreateSub = (0, import_react6.useRef)(true);
  const handleSub = useNostrStore((0, import_react6.useCallback)((store) => store.handleNewSub, []));
  const handleUnSub = useNostrStore((0, import_react6.useCallback)((store) => store.unSub, []));
  const handleInvalidate = useNostrStore((0, import_react6.useCallback)((store) => store.handleInvalidate, []));
  const loadMore = useNostrStore((0, import_react6.useCallback)((store) => store.loadMore, []));
  const sub = useNostrStore((0, import_react6.useCallback)((store) => store.subMap.get(subId.current), [subId.current]));
  const events = useNostrStore((0, import_react6.useCallback)((store) => {
    const subscribedEvents = [];
    store.eventMap.forEach((subIds, event) => {
      if (subIds.has(subId.current)) {
        subscribedEvents.push(event);
      }
    });
    return subscribedEvents;
  }, [subId.current]));
  (0, import_react6.useEffect)(() => {
    if (options?.enabled === false) {
      shouldCreateSub.current = false;
      return;
    }
    if (options?.invalidate === true) {
      shouldCreateSub.current = true;
      return;
    }
    if (sub) {
      shouldCreateSub.current = false;
      return;
    }
    shouldCreateSub.current = true;
  }, [options?.enabled, options?.invalidate]);
  (0, import_react6.useEffect)(() => {
    if (shouldCreateSub.current) {
      shouldCreateSub.current = false;
      handleSub({ filters, relays, options }, subId.current);
    }
  }, [shouldCreateSub.current, filters, relays, options, handleSub, subId.current]);
  (0, import_react6.useEffect)(() => {
    return () => {
      handleUnSub(subId.current);
    };
  }, [handleUnSub, subId.current]);
  return {
    events,
    eose: sub?.eose || false,
    invalidate: () => handleInvalidate(subId.current, { filters, relays, options }),
    loadMore: () => loadMore(subId.current)
  };
};
var useSubscribe_default = useSubscribe2;

// app/components/feed/global.tsx
var import_react7 = __toESM(require_react());

// app/components/feed/feed-btn-loader.tsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime());
var FeedBtnLoader = ({
  buttonText,
  module,
  onClick
}) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
    Button,
    {
      size: "medium",
      className: "mt-2 w-[400px] font-Bebas text-2xl",
      onClick: () => onClick(module),
      children: buttonText != "LOADING" ? buttonText : /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex items-center justify-center", children: [
        buttonText,
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(PostButtonLoader, {}, void 0, false, {
          fileName: "app/components/feed/feed-btn-loader.tsx",
          lineNumber: 28,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/feed/feed-btn-loader.tsx",
        lineNumber: 26,
        columnNumber: 11
      }, this)
    },
    void 0,
    false,
    {
      fileName: "app/components/feed/feed-btn-loader.tsx",
      lineNumber: 18,
      columnNumber: 7
    },
    this
  ) }, void 0, false, {
    fileName: "app/components/feed/feed-btn-loader.tsx",
    lineNumber: 17,
    columnNumber: 5
  }, this);
};
var feed_btn_loader_default = FeedBtnLoader;

// app/components/feed/global.tsx
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime());
function GlobalFeed({
  suggestedFollows
}) {
  const [uniqueFollowingPosts, setUniqueFollowingPosts] = (0, import_react7.useState)([]);
  const filterOptions = [
    {
      name: "Posts",
      filter: {
        kinds: [1],
        limit: 5
      },
      filterFn: (event) => !getReplyingToEvent(event)
    },
    {
      name: "Posts & replies",
      filter: {
        kinds: [1, 6],
        limit: 5
      }
    }
  ];
  const filter = filterOptions[1];
  const {
    events: followingPosts,
    eose,
    invalidate,
    loadMore
  } = useSubscribe_default({
    filters: [filter.filter],
    relays: [
      "wss://relay.gems.xyz",
      "wss://relay.damus.io",
      "wss://relay.snort.social"
    ],
    options: {
      batchingInterval: 500,
      enabled: true,
      cacheRefresh: true,
      force: true,
      closeAfterEose: true
    }
  });
  (0, import_react7.useEffect)(() => {
    if (eose) {
      if (followingPosts && followingPosts.length > 0) {
        const latestTimestamp = uniqueFollowingPosts.length > 0 ? uniqueFollowingPosts[0].created_at : 0;
        const uniqueIds = new Set(uniqueFollowingPosts.map((post) => post.id));
        const newPosts = followingPosts.filter(
          (post) => post.created_at > latestTimestamp && !uniqueIds.has(post.id)
        );
        const combinedPosts = [...uniqueFollowingPosts, ...newPosts];
        const sortedPosts = combinedPosts.sort(
          (a, b) => b.created_at - a.created_at
        );
        setUniqueFollowingPosts(sortedPosts);
      }
    }
  }, [eose]);
  const handleButtonClick = async (module) => {
    if (module == "ShowRecent") {
      invalidate();
    } else {
    }
  };
  console.log(uniqueFollowingPosts);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_jsx_dev_runtime4.Fragment, { children: !uniqueFollowingPosts || uniqueFollowingPosts.length === 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(FeedLoader, {}, void 0, false, {
    fileName: "app/components/feed/global.tsx",
    lineNumber: 98,
    columnNumber: 9
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { children: [
    uniqueFollowingPosts.length > 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
      feed_btn_loader_default,
      {
        buttonText: !eose ? "LOADING" : "SHOW RECENT POSTS",
        module: "ShowRecent",
        onClick: handleButtonClick
      },
      void 0,
      false,
      {
        fileName: "app/components/feed/global.tsx",
        lineNumber: 102,
        columnNumber: 13
      },
      this
    ) : "",
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "mt-2 flex justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "h-[1px] w-[680px] bg-c-shadegray " }, void 0, false, {
      fileName: "app/components/feed/global.tsx",
      lineNumber: 113,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/components/feed/global.tsx",
      lineNumber: 112,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Posts, { events: uniqueFollowingPosts }, void 0, false, {
      fileName: "app/components/feed/global.tsx",
      lineNumber: 115,
      columnNumber: 11
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/feed/global.tsx",
    lineNumber: 100,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/components/feed/global.tsx",
    lineNumber: 96,
    columnNumber: 5
  }, this);
}

// app/components/layout/feed.tsx
var import_jsx_dev_runtime5 = __toESM(require_jsx_dev_runtime());
function Feed({
  setNewPost,
  pubkey: pubkey2
}) {
  var _a;
  const [scrollTop, setScrollTop] = (0, import_react8.useState)(0);
  const { latestContactEvent, contactEose } = contacts_default(pubkey2);
  const authors = ((_a = latestContactEvent == null ? void 0 : latestContactEvent.tags) == null ? void 0 : _a.filter((tag) => tag[0] === "p").map((tag) => tag[1])) || [];
  authors.push(pubkey2);
  const handleScroll = (event) => {
    const scrollTop2 = event.currentTarget.scrollTop;
    setScrollTop(scrollTop2);
  };
  let [searchParams] = useSearchParams();
  let tab = searchParams.get("tab") || "following";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(MainContainer, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(TabContainer, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Tabs, { defaultSelectedTab: tab, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "flex items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(TabList, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "mt-3 flex h-auto w-[350px] justify-between px-3", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Tab, { tab: "following", children: "FOLLOWING" }, void 0, false, {
          fileName: "app/components/layout/feed.tsx",
          lineNumber: 42,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Tab, { tab: "global", children: "GLOBAL" }, void 0, false, {
          fileName: "app/components/layout/feed.tsx",
          lineNumber: 43,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Tab, { tab: "mypost", link: `/p/${pubkey2}`, children: "MY POSTS" }, void 0, false, {
          fileName: "app/components/layout/feed.tsx",
          lineNumber: 44,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/layout/feed.tsx",
        lineNumber: 41,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/components/layout/feed.tsx",
        lineNumber: 40,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/layout/feed.tsx",
        lineNumber: 39,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(TabPanel, { tab: "following", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "h-screen", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "h-screen overflow-y-auto transition duration-500 scrollbar-hide ", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(NewPost, {}, void 0, false, {
          fileName: "app/components/layout/feed.tsx",
          lineNumber: 53,
          columnNumber: 17
        }, this),
        contactEose ? /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(FollowingFeed, { followings: authors }, void 0, false, {
          fileName: "app/components/layout/feed.tsx",
          lineNumber: 55,
          columnNumber: 19
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(FeedLoader, {}, void 0, false, {
          fileName: "app/components/layout/feed.tsx",
          lineNumber: 57,
          columnNumber: 19
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/layout/feed.tsx",
        lineNumber: 52,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/components/layout/feed.tsx",
        lineNumber: 51,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/layout/feed.tsx",
        lineNumber: 50,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(TabPanel, { tab: "global", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "h-screen", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
        "div",
        {
          className: "h-screen overflow-y-auto transition duration-500 scrollbar-hide",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: scrollTop != 0 ? "block" : "hidden" }, void 0, false, {
              fileName: "app/components/layout/feed.tsx",
              lineNumber: 68,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(NewPost, {}, void 0, false, {
              fileName: "app/components/layout/feed.tsx",
              lineNumber: 69,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(GlobalFeed, { suggestedFollows: [] }, void 0, false, {
              fileName: "app/components/layout/feed.tsx",
              lineNumber: 70,
              columnNumber: 17
            }, this)
          ]
        },
        void 0,
        true,
        {
          fileName: "app/components/layout/feed.tsx",
          lineNumber: 64,
          columnNumber: 15
        },
        this
      ) }, void 0, false, {
        fileName: "app/components/layout/feed.tsx",
        lineNumber: 63,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/layout/feed.tsx",
        lineNumber: 62,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(TabPanel, { tab: "mypost" }, void 0, false, {
        fileName: "app/components/layout/feed.tsx",
        lineNumber: 74,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/layout/feed.tsx",
      lineNumber: 38,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/layout/feed.tsx",
      lineNumber: 37,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(RightPane, { authors }, void 0, false, {
      fileName: "app/components/layout/feed.tsx",
      lineNumber: 77,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/layout/feed.tsx",
    lineNumber: 36,
    columnNumber: 5
  }, this);
}

// app/routes/feed.tsx
var import_jsx_dev_runtime6 = __toESM(require_jsx_dev_runtime());
function feed_default() {
  let { user } = useLoaderData();
  let [newPost, setNewPost] = (0, import_react10.useState)(false);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_jsx_dev_runtime6.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Menu, { user }, void 0, false, {
      fileName: "app/routes/feed.tsx",
      lineNumber: 21,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Feed, { setNewPost, pubkey: user.pubkey }, void 0, false, {
      fileName: "app/routes/feed.tsx",
      lineNumber: 22,
      columnNumber: 7
    }, this),
    newPost && /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(NewPostModal, { close: () => setNewPost(false) }, void 0, false, {
      fileName: "app/routes/feed.tsx",
      lineNumber: 23,
      columnNumber: 19
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/feed.tsx",
    lineNumber: 20,
    columnNumber: 5
  }, this);
}
export {
  feed_default as default
};
//# sourceMappingURL=/build/routes/feed-YHU46YUP.js.map

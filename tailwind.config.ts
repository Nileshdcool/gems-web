import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      Bebas: ["Bebas Neue", "cursive"],
      Roboto: ["Roboto", "sans-serif"],
    },

    extend: {
      _backgroundColor: (theme: (arg0: string) => any) => ({
        ...theme("colors"),
        "c-cyan": "#16BDCA",
        "c-gray": "#374151",
        "c-darkgray": "#1F2A37",
        "c-lightgray": "#D1D5DB",
        "c-lightbrown": "#8dd7fc",
        "c-lightergray": "#9CA3AF",
        "c-brown": "#111928",
        "c-shadegray": "#4B5563",
        "c-graylight": "#6B7280",
        "c-green": "#31C48D",
        "c-red": "#F05252",
        "c-button": "#0694A2",
        "c-whitee": "#F3F4F6",
        "c-onboarding": "#212939",
        "c-onboardingbutton": "#122877",
        "c-keychain2": "#5054B2",
        "c-keychain3": "#685CAF",
        "c-keychain4": "#6F4FA4",
        "c-keychain4a": "#825ea8",
        "c-keychain1": "#3D4A64",
        "c-hover": "#2B3545",
      }),
      get backgroundColor() {
        return this._backgroundColor;
      },
      set backgroundColor(value) {
        this._backgroundColor = value;
      },
      _textColor: (theme: (arg0: string) => any) => ({
        ...theme("colors"),
        // eslint-disable-next-line no-dupe-keys
        "c-cyan": "#16BDCA",
        "c-gray": "#9CA3AF",
        "c-darkgray": "#6B7280",
        "c-lightgray": "#D1D5DB",
        "c-lightergray": "#F9FAFB",
        "c-brown": "#F8F4EE",
        "c-shadegray": "##f0f0f0",
        "c-lightbrown": "#9CA0A5",
        "c-dirtwhite": "#E5E7EB",
        "c-grayscale": "#F3F4F6",
        "c-dark": "#111928",
        "c-green": "#31C48D",
        "c-white": "#E5E7EB",
        "c-button": "#0694A2",
        "c-whitee": "#F3F4F6",
        "c-onboarding": "#212939",
        "c-red": "#F05252",
        "c-gray1": "#73787E",
        "c-cyann": "#A2CBCE",
        "c-purple": "#916CF1",
      }),
      get textColor() {
        return this._textColor;
      },
      set textColor(value) {
        this._textColor = value;
      },
      _borderColor: (theme: (arg0: string) => any) => ({
        ...theme("colors"),
        "c-cyan": "#16BDCA",
        "c-gray": "#374151",
        "c-darkgray": "#148DCB",
        "c-lightbrown": "#8dd7fc",
        "c-lightgray": "#357EC6",
        "c-brown": "#F8F4EE",
        "c-shadegray": "#4B5563",
        "c-shadergray": "#6B7280",
        "c-lighterbrown": "#9CA3AF",
        "c-error": "#F98080",
        "c-red": "#F05252",
        "c-green": "#31C48D",
        "c-dark": "#111928",
        "c-button": "#0694A2",
        "c-onboarding": "#212939",
      }),
      get borderColor() {
        return this._borderColor;
      },
      set borderColor(value) {
        this._borderColor = value;
      },
    },
  },
  variants: {
    backgroundColor: ["focus-within", "hover", "focus", "disabled"],
    borderColor: ["focus-within", "hover", "focus", "disabled"],
    textColor: ["focus-within", "hover", "focus", "disabled"],
  },
  plugins: [require("tailwind-scrollbar-hide"), require("flowbite/plugin")],
} satisfies Config;

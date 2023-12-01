import type { DetailedHTMLProps, ButtonHTMLAttributes } from "react";

export type ButtonSize = "xsmall" | "small" | "medium" | "large";
export type ThemeColor =
  | "blue"
  | "slate"
  | "green"
  | "red"
  | "yellow"
  | "cyan"
  | "white";

const SIZE_STYLES: Record<ButtonSize, string> = {
  xsmall: " py-1 px-2 text-sm",
  small: " py-1 px-6",
  medium: "py-2 px-3",
  large: "py-4 px-6",
};

const SOLID_STYLES: Record<ThemeColor, string> = {
  white: "bg-white",
  blue: "bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white font-Roboto",
  slate:
    "bg-slate-600 hover:bg-slate-500 active:bg-slate-700 text-white font-Roboto",
  green:
    "bg-green-600 hover:bg-green-500 active:bg-green-700 text-white font-Roboto",
  red: "bg-c-red hover:bg-red-400 active:bg-red-700 text-white font-Roboto",
  yellow:
    "bg-yellow-600 hover:bg-yellow-500 active:bg-yellow-700 text-white font-Roboto",
  cyan: "bg-c-cyan hover:bg-cyan-400 text-c-whitee",
};

const OUTLINE_STYLES: Record<ThemeColor, string> = {
  white: "text-black",
  blue: "border text-blue-600 border-blue-600 hover:bg-blue-100 active:bg-blue-200 font-Roboto",
  slate:
    "border text-slate-600 border-slate-600 hover:bg-slate-100 active:bg-slate-200 font-Roboto",
  green:
    "border text-green-600 border-green-600 hover:bg-green-100 active:bg-green-200 font-Roboto",
  red: "border text-red-600 border-red-600 hover:bg-red-100 active:bg-red-200 font-Roboto",
  yellow:
    "border text-yellow-600 border-yellow-600 hover:bg-yellow-100 active:bg-yellow-200 font-Roboto",
  cyan: "border-none text-c-whitee hover:bg-c-cyann",
};

function buttonStyle(
  size: ButtonSize = "medium",
  color: ThemeColor = "slate",
  outline = false
) {
  let sizeStyle = SIZE_STYLES[size];
  let colorStyle = outline ? OUTLINE_STYLES[color] : SOLID_STYLES[color];
  return `inline-block rounded ${sizeStyle} ${colorStyle}`;
}

interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  size?: ButtonSize;
  color?: ThemeColor;
  outline?: boolean;
  link?: boolean;
}

export function Button({
  size,
  color,
  outline,
  link,
  className,
  ...props
}: ButtonProps): JSX.Element {
  return (
    <button
      {...props}
      className={`${className} ${
        link ? "link" : buttonStyle(size, color, outline)
      }`}
    ></button>
  );
}

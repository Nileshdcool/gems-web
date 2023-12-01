import { Link } from "@remix-run/react";
import { IconCirclex } from "public/assets/icons";
import type { ReactNode } from "react";

interface TitleProps {
  title: String;
}

export function Title(props: TitleProps) {
  return (
    <div className="py-6 px-16 flex justify-between">
      <h1 className="text-xl text-c-lightgray ">{props.title}</h1>
      <Link to="/feed">
        <div className="text-c-lightgray">
          <IconCirclex />
        </div>
      </Link>
    </div>
  );
}

export function Content({ children }: { children?: ReactNode }): JSX.Element {
  return (
    <div className="bg-c-darkgray min-w-[1093px] max-w-full border-l border-c-gray min-h-[752px] overflow-y-auto transition duration-500 font-Roboto">
      {children}
    </div>
  );
}

export function SubTitle(props: TitleProps) {
  return (
    <div className="mt-6 px-16 flex justify-between">
      <h1 className="text-lg text-c-lightgray font-semibold ">{props.title}</h1>
    </div>
  );
}
export function Context(props: TitleProps) {
  return (
    <div className="mt-2 px-16 flex justify-between">
      <h1 className="text-sm text-c-gray">{props.title}</h1>
    </div>
  );
}

export function Body({ children }: { children?: ReactNode }): JSX.Element {
  return <div className=" px-16">{children}</div>;
}

export function Line({ children }: { children?: ReactNode }): JSX.Element {
  return (
    <div className="  bg-c-gray ">
      <div className=" h-[2px]"></div>
    </div>
  );
}

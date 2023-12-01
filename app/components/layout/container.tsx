import type { ReactNode } from "react";

export function MainContainer({
  children,
}: {
  children: ReactNode;
}): JSX.Element {
  return <div className="flex  justify-center">{children}</div>;
}

export function TabContainer({ children }: { children: ReactNode }) {
  return (
    <div className="w-[680px] rounded-t-md border border-c-gray bg-c-darkgray text-white ">
      {children}
    </div>
  );
}

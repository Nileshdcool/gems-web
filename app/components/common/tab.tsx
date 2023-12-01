import { Link } from "@remix-run/react";
import React, { useState, useMemo } from "react";

const TabsContext = React.createContext<{
  selectedTab: string | null;
  selectTab: (tab: string) => void;
}>({
  selectedTab: null,
  selectTab: (tab: string) => {
    throw new Error("should not be used without TabContext.Provider");
  },
});

export function Tabs({
  children,
  defaultSelectedTab,
}: {
  children: React.ReactNode;
  defaultSelectedTab: string;
}) {
  const [selectedTab, selectTab] = useState(defaultSelectedTab);
  const contextValue = useMemo(
    () => ({
      selectTab,
      selectedTab,
    }),
    [selectedTab, selectTab]
  );

  return (
    <TabsContext.Provider value={contextValue}>
      <div>{children}</div>
    </TabsContext.Provider>
  );
}

export function TabList({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}

export function Tab({
  children,
  tab,
  link,
}: {
  tab: string;
  children: React.ReactNode;
  link?: string;
}) {
  const { selectedTab, selectTab } = React.useContext(TabsContext);

  if (link) {
    return (
      <Link to={link}>
        <button
          className={
            selectedTab === tab
              ? "flex border-b border-c-cyan px-3 font-Roboto font-bold text-c-cyan"
              : "flex justify-center px-3 font-Roboto text-c-cyann"
          }
          onClick={() => selectTab(tab)}
        >
          {children}
        </button>
      </Link>
    );
  }

  return (
    <button
      className={
        selectedTab === tab
          ? "flex border-b border-c-cyan px-3 font-Roboto font-bold text-c-cyan"
          : "flex justify-center px-3 font-Roboto text-c-cyann"
      }
      onClick={() => selectTab(tab)}
    >
      {children}
    </button>
  );
}

export function TabPanel({
  children,
  tab,
}: {
  tab: string;
  children?: React.ReactNode;
}) {
  const { selectedTab } = React.useContext(TabsContext);

  if (selectedTab !== tab) return null;

  return <div>{children}</div>;
}

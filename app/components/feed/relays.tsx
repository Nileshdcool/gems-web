import React from "react";
import { IconLock } from "public/assets/icons";
// import * as Icon from "react-icons/md";
import type { Relay } from "~/services/db.client";
export default function Relays({ relays }: { relays: Relay[] }) {
  return (
    <>
      <div className="px-4">
        <div>
          Below are the relays this user publishes to. Join one or more to make
          sure you never miss their updates
        </div>
      </div>
      <div className="px-4">
        {relays
          ? relays.map((relay: Relay) => (
              <UsersRelay key={relay.url} relay={relay} />
            ))
          : null}
      </div>
    </>
  );
}

export function UsersRelay({ key, relay }: { key: string; relay: Relay }) {
  return (
    <>
      <div
        className=" mt-2 flex h-[45px] w-full items-center justify-between rounded-md border-2 border-c-shadegray px-3"
        id={key}
      >
        <div className="flex items-center ">
          <IconLock />
          <p className="ml-1">{relay.url}</p>
        </div>
        <div className="flex items-center">
          {/* <Icon.MdOutlineLogout /> */}
          <button className="ml-2">Leave</button>
        </div>
      </div>
    </>
  );
}

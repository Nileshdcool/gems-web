import { useState } from "react";
import { ValidatedForm } from "remix-validated-form";
import { IconOnline } from "~/assets/Icons";
import type { Relay } from "~/services/db.client";
import { deleteRelay } from "~/services/db.client/relays.client";
import { DeleteRelayValidator } from "~/services/validators/relay";
import { Button } from "../common/button";
import { HiddenField } from "../common/hidden-field";
import RelayForm from "./relay-form";

export default function Relays({ relays }: { relays: Relay[] }) {
  const [addRelay, setAddRelay] = useState(false);

  const remove = function removeRelay(id: number): (evt: Event) => void {
    return function (evt: Event): void {
      evt.preventDefault();
      deleteRelay(id);
    };
  };

  return (
    <div className="px-24 flex justify-between">
      <div>
        <table className="w-[600px] mt-4">
          <thead className="">
            <tr className="  font-light font-Roboto text-c-whitee">
              <th className="text-start py-2 text-lg ">Name</th>
              <th className="text-start py-2 text-lg ">URL</th>
              <th className="text-start py-2 text-lg ">Read</th>
              <th className="text-start py-2 text-lg">Write</th>
              <th className="text-start py-2 text-lg ">Status</th>
              <th className="text-start py-2 text-lg ">Action</th>
            </tr>
          </thead>
          <tbody className="w-full">
            {relays
              ? relays.map((relay: Relay) => (
                  <RelayItem key={relay.url} relay={relay} remove={remove} />
                ))
              : null}
          </tbody>
        </table>
      </div>
      <div className="mr-2 mt-5">
        <Button size="small" color="cyan" onClick={() => setAddRelay(true)}>
          Add
        </Button>
      </div>
      {addRelay && (
        <RelayForm close={() => setAddRelay(false)} label="New Relay" />
      )}
    </div>
  );
}

export function RelayItem({
  key,
  relay,
  remove,
}: {
  key: string;
  relay: Relay;
  remove: any;
}) {
  return (
    <tr className="items-center mt-1" id={key}>
      <td className="">
        <p className="text-c-whitee">{relay.name}</p>
      </td>
      <td className="">
        <p className="text-c-whitee">{relay.url}</p>
      </td>
      <td>
        <input
          type="checkbox"
          defaultChecked={relay.read}
          className="w-4 h-4 mt-1 text-c-cyan bg-c-brown rounded-sm border-c-gray dark:border-c-cyan focus:ring-none focus:outline-none outline-none focus:border-c-gray"
        />
      </td>
      <td>
        <input
          type="checkbox"
          defaultChecked={relay.write}
          className="w-4 h-4 mt-1 text-c-cyan bg-c-brown rounded-sm border-c-gray dark:border-c-cyan focus:ring-none focus:outline-none outline-none focus:border-c-gray"
        />
      </td>
      <td>
        <div className="flex items-center">
          <IconOnline />
          <span className="ml-2 text-c-whitee">{relay.status}</span>
        </div>
      </td>
      <td>
        <ValidatedForm method="delete" validator={DeleteRelayValidator}>
          <HiddenField name="_action" value="deleteRelay" />
          <HiddenField name="relayId" value={relay.id} />
          <Button size="xsmall" color="red" onClick={remove(relay.id!)}>
            {" "}
            Remove{" "}
          </Button>
        </ValidatedForm>
      </td>
    </tr>
  );
}

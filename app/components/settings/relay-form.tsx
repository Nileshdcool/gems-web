import { useFormContext, ValidatedForm } from "remix-validated-form";
import { createRelay } from "~/services/db.client/relays.client";
import { AddRelayValidator } from "~/services/validators/relay";
import { Button } from "../common/button";
import { HiddenField } from "../common/hidden-field";

interface props {
  close: () => void;
  label: string;
}

const RelayForm = ({ close, label }: props) => {
  let form = useFormContext("relay-form");

  function closeModal() {
    close();
  }

  function addRelay() {
    let formData = form.getValues();
    createRelay({
      url: formData.get("url") as string,
      read: formData.get("read") as any,
      write: formData.get("write") as any,
    });
    closeModal();
  }

  return (
    <>
      <div className="absolute inset-0 bg-black bg-opacity-30  flex justify-center items-center backdrop-blur-sm ">
        <div className="py-2 px-3 bg-c-gray text-c-lightgray rounded-lg  text-xl w-[400px] h-[250px] font-Roboto">
          <div className="flex justify-center mt-10 text-center px-10">
            <h1 className="text-c-lightgray font-semibold items-center">
              {label}
            </h1>
          </div>
          <ValidatedForm id="relay-form" validator={AddRelayValidator}>
            <HiddenField name="_action" value="addRelay" />
            <div className="flex justify-center mt-5 px-3">
              <input
                type="text"
                name="url"
                autoComplete="off"
                aria-label="Text"
                placeholder="Relay example: wss://relay1.gems.xyz"
                className="placeholder-gray-500 fornt-Roboto text-sm w-[270px] ml-1 h-[30px] text-white bg-transparent rounded-[4px] border-none ring-1 focus:ring-gray-400 ring-gray-500  focus:ring-1 mt-1 px-2 bg-c-brown"
              />
              <div className="flex ml-3">
                <div className="flex flex-col items-center">
                  <label
                    htmlFor="read"
                    className="text-c-lightgray text-sm font-Roboto font-regular"
                  >
                    Read
                  </label>
                  <input
                    name="read"
                    type="checkbox"
                    className="w-4 h-4  text-c-cyan bg-c-brown rounded-sm border-c-gray dark:border-c-cyan focus:ring-none focus:outline-none outline-none focus:border-c-gray"
                  />
                </div>
                <div className=" ml-3 flex flex-col items-center">
                  <label
                    htmlFor="write"
                    className="text-c-lightgray text-sm font-Roboto font-regular"
                  >
                    Write
                  </label>
                  <input
                    name="write"
                    type="checkbox"
                    className="w-4 h-4  text-c-cyan bg-c-brown rounded-sm border-c-gray dark:border-c-cyan focus:ring-none focus:outline-none outline-none focus:border-c-gray"
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-center mt-4 mb-5">
              <button
                className="py-2 px-3 rounded-md border border-c-lighterbrown text-c-gray text-base font-Roboto font-regular"
                onClick={close}
              >
                CANCEL
              </button>
              <Button
                color="cyan"
                className="py-2 px-7  ml-4 text-c-lightergray text-base"
                onClick={addRelay}
              >
                Add
              </Button>
            </div>
          </ValidatedForm>
        </div>
      </div>
    </>
  );
};

export default RelayForm;

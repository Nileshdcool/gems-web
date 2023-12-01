import { useState } from "react";
import { Button } from "../common/button";

export default function Account() {
  const [hover, setHover] = useState("");
  return (
    <div className="px-16 mt-5 mb-10">
      <div className="px-10">
        <div className="">
          <h1 className="text-c-whitee font-bold">ACCOUNT REMOVAL</h1>
          <div className="flex justify-between mt-4">
            <div>
              <p className="text-c-gray font-Roboto w-[500px]">
                This is temporary. Disabling your account means you can recover
                it at any time after taking this action.
              </p>
            </div>
            <Button
              size="medium"
              color="red"
              className=" -mt-2 text-c-whitee h-10"
              onMouseEnter={() => setHover("disable")}
              onMouseLeave={() => setHover("")}
            >
              {hover === "disable" ? "Coming Soon" : "Disable Account"}
            </Button>
          </div>
          <div className="flex justify-between mt-5">
            <div className="">
              <h1 className="text-c-gray font-Roboto">
                This is permanent. When you delete your account, you won't able
                to retrieve the{" "}
              </h1>
              <p className="text-c-gray font-Roboto">
                content or information you had on Gems.
              </p>
            </div>
            <div className="">
              <button
                className=" -mt-2 px-4 py-2 border border-c-red rounded-md text-c-whitee"
                onMouseEnter={() => setHover("delete")}
                onMouseLeave={() => setHover("")}
              >
                {hover === "delete" ? "Coming Soon" : "Delete Account"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

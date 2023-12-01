import { Link } from "@remix-run/react";
import { Button } from "./common/button";
import gems from "public/assets/images/logo/gem.png";
import gem from "public/assets/images/onboardinglogo.png";

export function Landing({
  setShowModal,
}: {
  // eslint-disable-next-line @typescript-eslint/ban-types
  setShowModal: Function;
}): JSX.Element {
  return (
    <div>
      <div className="bg h-[90px]">
        <div className="flex w-full">
          <div className="login h-[790px] w-1/2">
            <div className=" mt-[120px] flex items-center justify-center">
              <img src={gem} alt="" className="w-1/2" />
            </div>
            <div className="mt-8 flex justify-center">
              <div className=" w-1/2 items-center text-center text-xl text-c-lightgray ">
                <p className=" font-Bebas">
                  GEMS IS A DECENTRALIZED, OPEN SOURCE SOCIAL PLATFORM.{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="w-1/2 overflow-y-auto bg-gray-700">
            <div className="">
              <div className=" mt-[150px] flex items-center justify-center">
                <img src={gems} alt="" className="w-20" />
              </div>
              <div className="mt-5 flex flex-col items-center justify-center">
                <div className="h-[1px] w-[300px] bg-white"></div>
                <div className="mt-1 h-[1px] w-[300px] bg-white"></div>
              </div>
              <div className="mt-2 flex justify-center">
                <h1 className="font-Bebas text-6xl text-gray-300">
                  WELCOME TO{" "}
                  <span className="bg-gradient-to-r from-cyan-800 to-cyan-500 bg-clip-text text-transparent">
                    GEMS
                  </span>
                </h1>
              </div>
              <div className="mt-20 flex flex-col justify-center">
                <div className="flex justify-center ">
                  <Button
                    size={"medium"}
                    color={"white"}
                    className="mt-2 w-[400px] font-Bebas text-2xl "
                    onClick={() => setShowModal(true)}
                  >
                    LOGIN WITH NOSTR KEYCHAIN
                  </Button>
                </div>
                <div className="flex justify-center ">
                  <Link to="/how-to-get-nos2x">
                    <Button
                      size={"medium"}
                      color={"cyan"}
                      className="mt-2 w-[400px] font-Bebas text-2xl "
                    >
                      DONT HAVE A NOSTR KEYCHAIN? CLICK HERE
                    </Button>
                  </Link>
                </div>
              </div>
              <div className=" mt-[150px] font-Bebas text-xl">
                <p className="flex items-center justify-center text-center text-c-lightgray">
                  LEARN MORE AT{" "}
                  <span className="ml-1 text-c-cyan"> GEMS.XYZ/FAQ</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* } */}
    </div>
  );
}

interface props {
  close: () => void;
}

export const ChangeUserName = ({ close }: props) => {
  return (
    <div className="">
      <div className="absolute inset-0 bg-black bg-opacity-30  flex justify-center items-center backdrop-blur-sm ">
        <div className="py-2 px-3 bg-c-gray text-c-lightgray rounded-lg  text-xl w-[400px] h-[225px]">
          <div className="flex justify-center mt-5">
            <h1 className="font-Roboto text-2xl text-c-lightgray flex-justify-center font-bold">
              Change your Username
            </h1>
          </div>
          <div className="flex justify-center">
            <p className="text-c-gray font-Roboto text-sm">
              Enter your new username and your existing password
            </p>
          </div>
          <div className="flex justify-center mt-5">
            <form className="px-5 py-2">
              <div className="flex flex-col">
                <label className="text-base font-bold">USERNAME</label>
                <input
                  type="text"
                  id="username"
                  value={""}
                  className="w-[350px] h-[32px] bg-c-brown focus:ring-cyan-500 outline-none rounded-md text-c-lightergray mt-1"
                  placeholder="username"
                />
              </div>
              <div className="flex justify-end py-4">
                <button
                  className="py-2 px-2 rounded-md  text-c-gray text-base font-Roboto font-regular leading-5"
                  onClick={close}
                >
                  Cancel
                </button>
                <button className="py-2 px-5 rounded-md bg-c-cyan text-c-lightergray text-base font-Roboto font-regular leading-5 ml-5">
                  Done
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export const ChangeWalletName = ({ close }: props) => {
  return (
    <div className="">
      <div className="absolute inset-0 bg-black bg-opacity-30  flex justify-center items-center backdrop-blur-sm ">
        <div className="py-2 px-3 bg-c-gray text-c-lightgray rounded-lg  text-xl w-[400px] h-[250px]">
          <div className="flex justify-center mt-5">
            <h1 className="font-Roboto text-2xl text-c-lightgray flex-justify-center font-bold">
              Change your wallet name
            </h1>
          </div>
          <div className="flex justify-center">
            <p className="text-c-gray font-Roboto text-sm">
              Enter your new wallet name below
            </p>
          </div>
          <div className="flex justify-center mt-5">
            <form className="px-5 py-2">
              <div className="flex flex-col">
                <label className="text-base font-bold">WALLET NAME</label>
                <input
                  type="text"
                  id="username"
                  value={""}
                  className="w-[350px] h-[32px] bg-c-brown focus:ring-cyan-500 outline-none rounded-md text-c-lightergray mt-1"
                  placeholder="wallet1"
                />
              </div>
              <div className="flex justify-end py-4">
                <button
                  className="py-2 px-2 rounded-md  text-c-gray text-base font-Roboto font-regular leading-5"
                  onClick={close}
                >
                  Cancel
                </button>
                <button className="py-2 px-5 rounded-md bg-c-cyan text-c-lightergray text-base font-Roboto font-regular leading-5 ml-5">
                  Done
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export const AddEmail = ({ close }: props) => {
  return (
    <div className="">
      <div className="absolute inset-0 bg-black bg-opacity-30  flex justify-center items-center backdrop-blur-sm ">
        <div className="py-2 px-3 bg-c-gray text-c-lightgray rounded-lg  text-xl w-[400px] h-[225px]">
          <div className="flex justify-center mt-5">
            <h1 className="font-Roboto text-2xl text-c-lightgray flex-justify-center font-bold">
              Email Address
            </h1>
          </div>
          <div className="flex justify-center">
            <p className="text-c-gray font-Roboto text-sm">
              Add your email address here
            </p>
          </div>
          <div className="flex justify-center mt-5">
            <form className="px-5 py-2">
              <div className="flex flex-col">
                <label className="text-base font-bold">EMAIL ADDRESS</label>
                <input
                  type="text"
                  id="username"
                  value={""}
                  className="w-[350px] h-[32px] bg-c-brown focus:ring-cyan-500 outline-none rounded-md text-c-lightergray mt-1"
                  placeholder="example@gemmy.club"
                />
              </div>
              <div className="flex justify-end py-4">
                <button
                  className="py-2 px-2 rounded-md  text-c-gray text-base font-Roboto font-regular leading-5"
                  onClick={close}
                >
                  Cancel
                </button>
                <button className="py-2 px-5 rounded-md bg-c-cyan text-c-lightergray text-base font-Roboto font-regular leading-5 ml-5">
                  Done
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Unlink = ({ close }: props) => {
  return (
    <div className="">
      <div className="absolute inset-0 bg-black bg-opacity-30  flex justify-center items-center backdrop-blur-sm ">
        <div className="py-2 px-3 bg-c-gray text-c-lightgray rounded-lg  text-xl w-[340px] h-[225px]">
          <div className="flex justify-center mt-10 px-5 text-center">
            <h1 className="font-Roboto text-xl text-c-lightgray flex-justify-center font-bold">
              Do you want to remove the linked wallet?
            </h1>
          </div>
          <div className="flex justify-center mt-3">
            <form className="px-5 py-2">
              <div className="flex justify-end py-2">
                <button
                  className="py-2 px-2 rounded-md  text-c-gray text-base font-Roboto font-regular leading-5"
                  onClick={close}
                >
                  Cancel
                </button>
                <button className="py-2 px-5 rounded-md bg-c-red text-c-lightergray text-base font-Roboto font-regular leading-5 ml-5">
                  Remove
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

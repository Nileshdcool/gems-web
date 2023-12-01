import {
  IconCircleX,
  IconDollor,
  IconItalic,
  IconListOl,
  IconListUl,
} from "public/assets/icons";
import Search from "public/assets/images/icons/search.svg";
import gems4 from "public/assets/images/sample/gemmy8.png";
import gems5 from "public/assets/images/sample/gemmy9.png";
import gems6 from "public//assets/images/sample/gemmy10.avif";
import gems7 from "public/assets/images/sample/gemmy11.png";
import gems8 from "public/assets/images/sample/gemmy12.avif";
import gems9 from "public/assets/images/sample/gemmy13.png";

interface props {
  close: () => void;
}
const SendinChat = ({ close }: props) => {
  return (
    <div className="">
      <div className="absolute inset-0 flex items-center  justify-center bg-black bg-opacity-30 backdrop-blur-sm ">
        <div className="min-h-[460px] w-[320px] rounded-lg bg-c-gray px-3  py-2 text-xl text-c-lightgray">
          <div className="">
            <div className="flex justify-between py-2">
              <h1 className=" font-regular mt-3 font-Roboto text-sm text-c-lightgray">
                Send in Chat to:
              </h1>
              <div className="cursor-pointer" onClick={close}>
                <IconCircleX className="cursor-pointer" />
              </div>
            </div>
            <div className="flex ">
              <form
                action="search"
                className="flex rounded-lg border border-c-shadergray pr-2"
              >
                <input
                  type="text"
                  name=""
                  autoComplete="on"
                  aria-label="Search"
                  placeholder=""
                  className="fornt-regular h-[32px] w-[296px] rounded-md border-none bg-c-brown px-2 py-2 font-Roboto text-sm text-c-lightgray placeholder-gray-500"
                />
                <img src={Search} alt="" className="-ml-6 w-4" />
              </form>
            </div>
            <div className=" h-[250px] w-[300px] overflow-y-auto px-2 py-2 transition duration-500 scrollbar-hide">
              <div className="mt-2 flex">
                <img
                  src={gems4}
                  alt=""
                  className="h-[40px] w-[40px] rounded-full"
                />
                <p className="font-regular mt-3 px-2 font-Roboto text-sm text-c-dirtwhite">
                  Chat Name
                </p>
              </div>
              <div className="mt-2 flex">
                <img
                  src={gems5}
                  alt=""
                  className="h-[40px] w-[40px] rounded-full"
                />
                <p className="font-regular mt-3 px-2 font-Roboto text-sm text-c-dirtwhite">
                  Chat Name
                </p>
              </div>
              <div className="mt-2 flex">
                <img
                  src={gems6}
                  alt=""
                  className="h-[40px] w-[40px] rounded-full"
                />
                <p className="font-regular mt-3 px-2 font-Roboto text-sm text-c-dirtwhite">
                  Chat Name
                </p>
              </div>
              <div className="mt-2 flex">
                <img
                  src={gems7}
                  alt=""
                  className="h-[40px] w-[40px] rounded-full"
                />
                <p className="font-regular mt-3 px-2 font-Roboto text-sm text-c-dirtwhite">
                  Chat Name
                </p>
              </div>

              <div className="mt-2 flex">
                <img
                  src={gems8}
                  alt=""
                  className="h-[40px] w-[40px] rounded-full"
                />
                <p className="font-regular mt-3 px-2 font-Roboto text-sm text-c-dirtwhite">
                  Chat Name
                </p>
              </div>
              <div className="mt-2 flex">
                <img
                  src={gems9}
                  alt=""
                  className="h-[40px] w-[40px] rounded-full"
                />
                <p className="font-regular mt-3 px-2 font-Roboto text-sm text-c-dirtwhite">
                  Folder Name
                </p>
              </div>
            </div>
            <div className="mt-4 flex justify-center">
              <div className=" mb-2 h-[60px] w-[520px]">
                <form
                  action="#"
                  className=" rounded-lg border border-black bg-c-shadegray"
                >
                  <div className="focus-within:ring-c-cyan overflow-hidden rounded-b-lg rounded-t-lg border border-transparent shadow-sm focus-within:border-c-cyan focus-within:ring-1">
                    <label htmlFor="text" className="sr-only"></label>
                    <textarea
                      name="text"
                      id="text"
                      className="block h-[32px] w-full resize border-0 bg-c-brown px-2 py-1 text-c-lightgray focus:ring-0 sm:text-sm"
                      defaultValue={""}
                    />
                  </div>
                  <div className="flex">
                    <div className="flex h-[28px] px-5 py-1">
                      <div className="flex items-center text-c-gray">
                        <h1 className="flex items-center font-bold text-c-gray">
                          B
                        </h1>
                      </div>
                      <div className="ml-5 flex items-center text-c-gray">
                        <IconItalic className="mr-3" />
                      </div>
                      <div className="ml-5 flex items-center text-c-gray">
                        <IconDollor className="mr-3" />
                      </div>
                      <div className="ml-5 flex items-center text-black">|</div>
                      <div className="ml-5 text-c-gray">
                        <IconListUl className="mr-3" />
                      </div>
                      <div className="ml-5 text-c-gray">
                        <IconListOl className="mr-3" />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="flex justify-center py-4">
              <button className="font-regular rounded-md border border-c-lighterbrown px-2  py-2 font-Roboto text-base text-c-lightergray ">
                Send without comment
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SendinChat;

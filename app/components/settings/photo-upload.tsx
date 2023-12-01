import { useState } from "react";
import { IconUploadCover } from "~/assets/Icons";

interface props {
  close: () => void;
  setFileUrl: (url: string) => void;
  fileUrl: string;
}

export const PhotoUpload = ({ close, setFileUrl, fileUrl }: props) => {
  const [error, setError] = useState<boolean>(false);

  async function uploadFile(files: FileList | null) {
    if (files) {
      const fileRef = files[0] || "";
      if (!fileRef) {
        setError(true);
        return;
      }
      const data = new FormData();
      data.append("file", fileRef);
      const res = await fetch("/api/storage", {
        method: "POST",
        body: data,
      });
      const json = await res.json();
      setFileUrl(json.data.url);
    }
  }

  return (
    <div>
      <div className="absolute inset-0 bg-black bg-opacity-30  flex justify-center items-center backdrop-blur-sm ">
        <div className="py-2 px-3 bg-c-gray text-c-lightgray rounded-lg  text-xl w-[400px] h-[405px]">
          <div className="flex justify-center mt-5">
            <h1 className="font-Roboto text-xl text-c-lightgray flex-justify-center font-bold">
              SELECT IMAGE
            </h1>
          </div>
          <div className="flex justify-center mt-2">
            <p className="font-Roboto text-sm">Image should not exceed 10MB</p>
          </div>
          <form>
            <div className="flex justify-center mt-2">
              <div className="  flex justify-center">
                {error && <p className="">File not supported</p>}
                <div className="flex flex-col items-center rounded-b-2xl rounded-r-2xl border-hidden">
                  <div className="w-[250px] h-[210px] mt-5">
                    <img
                      src={fileUrl}
                      alt=""
                      className=" rounded-xl border-hidden w-[250px] h-[210px] bg-c-whitee"
                    />
                  </div>

                  {!fileUrl && (
                    <>
                      <div className=" absolute flex items-center flex-col mt-16">
                        <IconUploadCover />
                        <label
                          htmlFor="fileUpload"
                          className="cursor-pointer font-Roboto text-black text-sm"
                        >
                          Click here to select image
                        </label>
                        <span className="text-xxs font-Roboto text-black">
                          (jpeg, jpg, png, webp)
                        </span>
                        <input
                          type="file"
                          id="fileUpload"
                          onChange={(e) => uploadFile(e.target.files)}
                          className="hidden cursor-pointer"
                        />
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
            <div className="flex justify-end py-4 px-10">
              <button
                className="py-2 px-2 rounded-md  text-c-gray text-base font-Roboto font-regular leading-5"
                onClick={close}
              >
                Cancel
              </button>
              <button
                className="py-2 px-5 rounded-md bg-c-cyan text-c-lightergray text-base font-Roboto font-regular leading-5 ml-5"
                onClick={close}
              >
                Done
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

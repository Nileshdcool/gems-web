import BannerImage from "~/components/banner";
import AvatarImage from "~/components/avatar";
import mask from "~/utils/pubkey";
import { IconCopy } from "../../../public/assets/icons";
import { Link } from "@remix-run/react";

type UserDetailsProps = {
  displayPubkey: any;
  banner: any;
  picture: any;
  displayName: any;
  handleCopyPubkey: any;
  name: any;
  about: any;
  isMyProfile: boolean;
};

export default function UserDetails({
  displayPubkey,
  banner,
  picture,
  displayName,
  handleCopyPubkey,
  name,
  about,
  isMyProfile,
}: UserDetailsProps): JSX.Element {
  return (
    <div>
      <div className="mt-[3px] py-1">
        <div className="flex justify-center">
          <div className="  flex h-[165px] w-full justify-center border-gray-500">
            <BannerImage
              pubkey={displayPubkey}
              userData={{ banner: banner }}
              className="h-[165px] w-full"
            />
          </div>
        </div>

        <div className=" flex items-center justify-between">
          <div className="flex">
            <div className="-mt-14 flex px-4 ">
              <AvatarImage
                pubkey={displayPubkey}
                userData={{ picture: picture }}
                className="h-[120px] w-[120px] rounded-md border border-c-gray"
              />
            </div>
            <div className="mt-3">
              <label className="mt-16 font-Roboto text-xl font-black text-c-white">
                {displayName ?? mask(displayPubkey)}
              </label>
              <div className="flex items-center text-c-lightgray ">
                {displayPubkey ? (
                  <button
                    className="flex items-center"
                    onClick={handleCopyPubkey}
                  >
                    <div className="text-c-cyan">
                      <IconCopy />
                    </div>

                    <span className=" ml-2 mr-3"> {mask(displayPubkey)} </span>
                  </button>
                ) : null}
                <span className="">@{name ?? mask(displayPubkey)}</span>
              </div>
            </div>
          </div>
          {isMyProfile ? (
            <div className="mr-4">
              <Link to="/settings/profile/edit">
                <button className="rounded-sm bg-c-cyan px-3 py-2 font-Roboto hover:bg-cyan-900">
                  Edit Profile
                </button>
              </Link>
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
      <div className="mt-4 h-[60px] overflow-y-auto px-4 transition duration-500 scrollbar-hide">
        <h1 className="text-Roboto text-sm text-c-white">{about}</h1>
      </div>
    </div>
  );
}

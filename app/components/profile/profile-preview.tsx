import mask from "~/utils/pubkey";
import defaultBanner from "~/assets/images/sample/banner.png";

export interface ProfilePreviewProps {
  publicKey: string;
  avatar: string;
  banner: string;
  name: string;
  username: string;
  bio: string;
}

export default function ProfilePreview({
  props,
}: {
  props: ProfilePreviewProps;
}) {
  return (
    <>
      <div className=" ml-2">
        <h1 className="text-c-lightgray text-xl font-Roboto">PREVIEW</h1>
      </div>
      <div className="ml-3 border w-[675px] border-c-gray mt-3">
        <div className="py-5">
          <div className="flex justify-center ml-3 show">
            <img
              src={props.banner ? props.banner : defaultBanner}
              alt="banner"
              className="w-[650px] h-[100px] rounded-t-lg"
            />
          </div>
          <div className="inline-block ml-12 -mt-14">
            <img
              src={props.avatar!}
              alt=""
              className="w-[100px] h-[100px] border-4 border-white rounded-lg"
            />
          </div>
          <div className="flex flex-col justify-between px-[40px] -mt-10">
            <label className="text-c-lightgray text-xl font-bold ml-[130px] font-Roboto">
              {props.name}
            </label>
            <span className="text-lg ml-[130px] font-regular text-c-lightgray font-Roboto">
              {mask(props.publicKey)} @{props.username}
            </span>
          </div>
        </div>
        <div className="ml-12 py-4 -mt-8">
          <p className="w-[620px] break-words text-c-whitee">{props.bio}</p>
        </div>
      </div>
    </>
  );
}

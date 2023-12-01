import defaultBanner from "~/assets/images/sample/banner.png";
import * as Icon from "react-icons/bs";
import { useEffect, useState } from "react";
import type { ProfilePreviewProps } from "./profile-preview";
import ProfilePreview from "./profile-preview";
import { ControlledTextField } from "../common/text-field";
import { useControlField, ValidatedForm } from "remix-validated-form";
import { EditProfileValidator } from "~/services/validators/profile";
import { SubmitButton } from "../common/submit-button";
import { Line } from "../settings/layout";
import { ControlledTextArea } from "../common/textarea";
import { PhotoUpload } from "../settings/photo-upload";
import { HiddenField } from "../common/hidden-field";

export type Profile = {
  publicKey: string;
  avatar: string;
  banner: string;
  name: string;
  username: string;
  bio: string;
  email: string;
};

type ProfileFormProps = {
  profile: Profile;
  submitLabel: string;
};

function ProfileFields({ submitLabel }: { submitLabel: string }) {
  const [changeAvatar, setChangeAvatar] = useState(false);
  const [changeBanner, setChangeBanner] = useState(false);
  let [publicKey] = useControlField<string>("publicKey");
  let [banner, setBanner] = useControlField<string>("banner");
  let [avatar, setAvatar] = useControlField<string>("avatar");
  let [name] = useControlField<string>("name");
  let [username] = useControlField<string>("username");
  let [bio] = useControlField<string>("bio");
  let [avatarUrl, setAvatarUrl] = useState<string>("");
  let [bannerUrl, setBannerUrl] = useState<string>("");

  let [previewProps, setPreviewProps] = useState<ProfilePreviewProps>({
    publicKey: publicKey,
    avatar: avatar,
    banner: banner,
    name: name,
    username: username,
    bio: bio,
  });

  useEffect(() => {
    if (avatarUrl) {
      setAvatar(avatarUrl);
    }

    if (bannerUrl) {
      setBanner(bannerUrl);
    }

    setPreviewProps({
      publicKey: publicKey,
      avatar: avatar,
      banner: banner,
      name: name,
      username: username,
      bio: bio,
    } as ProfilePreviewProps);
  }, [
    setPreviewProps,
    publicKey,
    avatar,
    banner,
    name,
    username,
    bio,
    avatarUrl,
    bannerUrl,
    setAvatar,
    setBanner,
  ]);

  return (
    <div className="py-4 font-Roboto">
      <div className="flex justify-center px-16 show">
        <div className="ml-7">
          <img
            src={banner ? banner : defaultBanner}
            alt="banner"
            className="w-[900px] h-[130px] rounded-t-lg"
          />
          <div className=" -mt-9 flex justify-end">
            <div className=" absolute hidee">
              <button
                className="mt-1 w-9 h-9 bg-c-lightgray rounded-full flex justify-center items-center "
                onClick={() => setChangeBanner(true)}
              >
                <Icon.BsCamera className="px-2 py-2 w-8 h-8" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="px-14 ">
        <div className="-mt-14 inline-block ml-20">
          <img
            src={avatar}
            alt="avatar"
            className="w-[120px] h-[120px] border-4 border-white rounded-lg"
          />
        </div>
        <div className="px-20 ml-20 -mt-9 flex">
          <button
            className="mt-2 ml-2 w-9 h-9 bg-c-lightgray rounded-full flex justify-center items-center"
            onClick={() => setChangeAvatar(true)}
          >
            <Icon.BsCamera className="px-2 py-2 w-8 h-8" />
          </button>
        </div>
      </div>
      <div className="flex px-16 ml-16 justify-start">
        <div className="w-[600px]">
          <ControlledTextField
            name="name"
            label="Display Name"
            className="text-c-lightgray"
          />
          <ControlledTextField
            name="username"
            label="Username"
            className="text-c-lightgray mt-4"
          />
          <ControlledTextArea
            name="bio"
            label="Bio"
            className="text-c-lightgray mt-4"
          />
          <HiddenField name="avatar" value={avatar} />
          <HiddenField name="banner" value={banner} />
        </div>
      </div>
      <div className="ml-8 px-16 py-5">
        <SubmitButton label={submitLabel} size="small" color="cyan" />
      </div>
      <div className="px-16 mt-5">
        <Line />
      </div>
      <div className="px-16 mt-5 ">
        <ProfilePreview props={previewProps} />
      </div>
      {changeAvatar && (
        <PhotoUpload
          close={() => setChangeAvatar(false)}
          setFileUrl={setAvatarUrl}
          fileUrl={avatarUrl}
        />
      )}
      {changeBanner && (
        <PhotoUpload
          close={() => setChangeBanner(false)}
          setFileUrl={setBannerUrl}
          fileUrl={bannerUrl}
        />
      )}
    </div>
  );
}

export default function ProfileForm({
  profile,
  submitLabel,
}: ProfileFormProps) {
  return (
    <ValidatedForm
      id="edit-profile"
      defaultValues={profile}
      validator={EditProfileValidator}
      method="post"
    >
      <ProfileFields submitLabel={submitLabel} />
    </ValidatedForm>
  );
}

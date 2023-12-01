import { useNavigation } from "@remix-run/react";
import { copyPubkey } from "~/utils/pubkey";
import UserPosts from "../feed/user-posts";
import LoadingBar from "react-top-loading-bar";
import { useEffect, useState } from "react";
import useProfileContent from "~/services/nostr/profiles/content";
import { toast } from "react-toastify";
import UserDetailsProfile from "./user-details-profile";
import UserDetailsFollows from "~/components/user-details/user-details-follows";

type UserDetailsProps = {
  pubkey?: string;
  user: any;
};

export default function UserDetails({
  pubkey,
  user,
}: UserDetailsProps): JSX.Element {
  const displayPubkey = pubkey ? pubkey : user?.pubkey;
  const { displayName, name, picture, about, banner } =
    useProfileContent(displayPubkey);
  const transition = useNavigation();
  const [progress, setProgress] = useState(0);

  const followers: any[] = [];
  const followings: any[] = [];

  useEffect(() => {
    transition.state == "idle"
      ? setProgress(0)
      : transition.state == "submitting"
      ? setProgress(50)
      : transition.state == "loading"
      ? setProgress(100)
      : setProgress(0);
  }, [transition.state]);

  const handleCopyPubkey = () => {
    copyPubkey(displayPubkey);
    toast.success("Public key copied to clipboard!", {
      position: "bottom-right",
      autoClose: 3000, // 3 seconds
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  const isMyProfile: boolean =
    (pubkey || user?.pubkey) && pubkey === user?.pubkey;

  return (
    <>
      <div className="mt-5 flex">
        <div className="-mt-4 w-full rounded-md  bg-c-darkgray text-white">
          <div className="h-screen overflow-y-auto transition duration-500 scrollbar-hide">
            {transition.state === "loading" ||
            transition.state == "submitting" ? (
              <LoadingBar
                color="#00AFAF"
                height={6}
                progress={progress}
                onLoaderFinished={() => setProgress(0)}
              />
            ) : null}

            <UserDetailsProfile
              about={about}
              banner={banner}
              displayName={displayName}
              displayPubkey={displayPubkey}
              handleCopyPubkey={handleCopyPubkey}
              name={name}
              picture={picture}
              isMyProfile={isMyProfile}
            />

            <UserDetailsFollows followers={followers} followings={followings} />

            <div className="">
              <UserPosts suggestedFollows={[]} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

import banner from "public/assets/images/sample/banner.png";
import { Link } from "@remix-run/react";
import type { AuthUser } from "~/services/session.server";
import useProfileContent from "~/services/nostr/profiles/content";
import mask from "~/utils/pubkey";
import { useState } from "react";
import { ChangeUserName, AddEmail } from "~/components/settings/modal";
import { Button } from "../common/button";

export default function Profile({ user }: { user: AuthUser }) {
  const profileData = useProfileContent(user?.pubkey);

  const [users, setUsers] = useState(false);
  const [email, setEmail] = useState(false);
  const [hover, setHover] = useState("");
  return (
    <div>
      <div className="px-16">
        <div className="flex justify-center">
          <img
            src={profileData.banner ? profileData.banner : banner}
            alt="banner"
            className="w-[900px] h-[120px] rounded-t-lg"
          />
        </div>
        <div>
          <div className="-mt-14 inline-block ml-20">
            <img
              src={profileData.picture!}
              alt="avatar"
              className="w-[100px] h-[100px] border-4 border-white rounded-lg"
            />
          </div>
          <div className="flex justify-between px-[40px] -mt-10">
            <label className="text-c-lightgray text-2xl font-bold ml-[150px]">
              {profileData.name}
            </label>
            <Link to="./edit">
              <Button size="medium" color="cyan">
                Edit User Profile
              </Button>
            </Link>
          </div>
        </div>
        <div className="w-[900px] border border-2 border-c-gray rounded-md mt-4 ml-10">
          <div className="flex justify-between mt-4">
            <div className="px-4">
              <h1 className="text-c-gray">NOSTR PUBLIC KEY</h1>
              <p className="text-c-whitee italic">{mask(user.pubkey)}</p>
            </div>
            {/* <div className="px-4 mt-1">
              <Button size={"small"} color={"slate"} className="">
                Copy
              </Button>
            </div> */}
          </div>
          <div className="flex justify-between mt-3">
            <div className="px-4">
              <h1 className="text-c-gray">USERNAME</h1>
              <p className="text-c-whitee">@{profileData.name}</p>
            </div>
            {/* <div className="px-4 mt-1">
              <Button
                size={"small"}
                color={"slate"}
                onClick={() => setUsers(true)}
              >
                Edit
              </Button>
            </div> */}
          </div>

          <div className="flex justify-between mt-3">
            <div className="px-4">
              <h1 className="text-c-gray">EMAIL</h1>
              <p className="text-c-whitee mb-2">
                {profileData?.email ? profileData!.email : <br></br>}
              </p>
            </div>
            <div className="px-4 mt-1">
              <Button
                size={"small"}
                color={"slate"}
                // className="  text-c-whitee bg-c-graylight rounded-md hover:bg-gray-400"
                // onClick={() => setEmail(true)}
                onMouseEnter={() => setHover("add")}
                onMouseLeave={() => setHover("")}
              >
                {hover === "add" ? "Coming Soon" : "Add"}
              </Button>
            </div>
          </div>
        </div>
      </div>
      {users && <ChangeUserName close={() => setUsers(false)} />}
      {email && <AddEmail close={() => setEmail(false)} />}
    </div>
  );
}

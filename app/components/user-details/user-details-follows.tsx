import { Link } from "@remix-run/react";

type UserDetailsProps = {
  followers: any[];
  followings: any[];
};

export default function UserDetailsFollows({
  followers,
  followings,
}: UserDetailsProps): JSX.Element {
  return (
    <div className="mt-3 flex px-4 ">
      <div className="flex cursor-pointer">
        <Link to="./followers">
          <h1 className="font-regular flex w-1/4 font-Roboto text-sm text-c-lightgray">
            Followers
            <span className="ml-4 font-bold text-c-cyan">
              {followers?.length}
            </span>
          </h1>
        </Link>
      </div>
      <div className="ml-5 flex cursor-pointer">
        <Link to="./following">
          <h2 className="font-regular flex w-3/4 font-Roboto text-sm text-c-lightgray">
            Following{" "}
            <span className=" ml-4 font-bold text-c-cyan">
              {followings?.length}
            </span>
          </h2>
        </Link>
      </div>
    </div>
  );
}

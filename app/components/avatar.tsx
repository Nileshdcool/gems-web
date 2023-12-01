import React from "react";
import { avatar } from "~/utils/pubkey";

interface AvatarImageProps {
  pubkey: string;
  userData: {
    picture?: string;
  };
  className?: string;
}

const AvatarImage: React.FC<AvatarImageProps> = ({
  pubkey,
  userData,
  className,
}) => {
  const defaultImage = avatar(pubkey);

  const handleError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const target = e.target as HTMLImageElement;
    if (target.src !== defaultImage) {
      target.src = defaultImage;
    }
  };

  return (
    <img
      src={userData?.picture ? userData.picture : defaultImage}
      alt=""
      className={className}
      onError={handleError}
    />
  );
};

export default AvatarImage;

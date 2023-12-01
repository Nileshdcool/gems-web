import React from "react";
import banner from "../../public/assets/images/sample/banner.png";
interface BannerImageProps {
  pubkey: string;
  userData: {
    banner?: string;
  };
  className?: string;
}

const BannerImage: React.FC<BannerImageProps> = ({
  pubkey,
  userData,
  className,
}) => {
  const defaultImage = banner;

  const handleError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const target = e.target as HTMLImageElement;
    if (target.src !== defaultImage) {
      target.src = defaultImage;
    }
  };

  return (
    <img
      src={userData?.banner ? userData.banner : defaultImage}
      alt=""
      className={className}
      onError={handleError}
    />
  );
};

export default BannerImage;

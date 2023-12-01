import React from "react";
import Linkify from "react-linkify";

interface TextProps {
  content: string;
}

export default function Content({ content }: TextProps) {
  const isImage = (url: string) =>
    /\.(jpg|jpeg|png|webp|avif|gif|svg)$/.test(url);

  const urlRegex = /(https?:\/\/[^\s]+)/g;
  const match = content.match(urlRegex);
  const imageUrl = match ? match[0] : "";
  const textWithLinks = content.replace(urlRegex, "");

  const handleError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const target = e.target as HTMLImageElement;
    target.src =
      "https://cdn4.iconfinder.com/data/icons/general-office/91/General_Office_60-1024.png";
  };

  return (
    <h1 className="font-regular -mt-7 ml-[70px] w-[580px] break-words pr-3 font-Roboto text-base text-c-lightgray">
      <Linkify>{textWithLinks}</Linkify>
      {imageUrl && isImage(imageUrl) && (
        <a href={imageUrl} target="_blank" rel="noopener noreferrer">
          <img
            src={imageUrl}
            alt="post"
            className="mt-2 flex w-max rounded-lg"
            onError={handleError}
          />
        </a>
      )}
    </h1>
  );
}

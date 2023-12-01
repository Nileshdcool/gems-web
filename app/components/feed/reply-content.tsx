interface TextProps {
  content: any;
}

export default function ReplyContent({ content }: TextProps) {
  function isImage(url: string) {
    return /\.(jpg|jpeg|png|webp|avif|gif|svg)$/.test(url);
  }
  const urlRegex = /(https?:\/\/[^\s]+)/g;
  const match = content.match(urlRegex);
  const imageUrl = match ? match[0] : "";
  const textWithLinks = content.replace(urlRegex, (url: any) => "");

  return (
    <h1 className="font-regular -mt-7 ml-[70px] w-[552px] break-words pr-3 font-Roboto text-base text-c-lightgray">
      <div dangerouslySetInnerHTML={{ __html: textWithLinks }} />
      <a
        href={imageUrl}
        className="mt-5 text-c-lightgray underline underline-offset-8 visited:text-gray-400 hover:text-c-cyan"
        target="_blank"
        rel="noopener noreferrer"
      >
        {imageUrl}
      </a>
      {isImage(imageUrl) ? (
        <img src={imageUrl} alt="" className="mt-2 flex w-max rounded-lg" />
      ) : null}
    </h1>
  );
}

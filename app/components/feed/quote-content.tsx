interface TextProps {
  content: any;
}

const URL_REGEX =
  // /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/gm;
  /(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[-a-z0-9@:%._\+~#=\.]+\.[a-z]{1,6}[-a-z0-9@:%_\+.~#?!&//=;]*/gi;

export default function Content({ content }: TextProps) {
  function isImage(url: string) {
    return /\.(jpg|jpeg|png|webp|avif|gif|svg)$/.test(url);
  }
  const urlRegex = /(https?:\/\/[^\s]+)/g;
  const match = content.match(urlRegex);
  const imageUrl = match ? match[0] : "";
  const textWithLinks = content.replace(urlRegex, (url: any) => "");

  return (
    <h1 className="font-regular -mt-7 ml-[55px] max-h-[300px] min-h-[240px] w-[450px] overflow-y-auto break-words pr-3 font-Roboto text-sm text-c-lightgray transition duration-500 scrollbar-hide">
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
        <img
          src={imageUrl}
          alt="image"
          className="mt-2 flex w-max rounded-lg"
        />
      ) : null}
    </h1>
  );
}

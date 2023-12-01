import { useEffect, useState } from "react";
import { useProfile } from "~/services/nostr/profile";
import mask, { avatar, convertBech32ToHex } from "~/utils/pubkey";
import { SearchLoader } from "./loader";
import { useNavigate } from "@remix-run/react";
import moment from "moment";
import { type Event as NostrEvent, getEventHash } from "nostr-tools";
import { useNostr } from "~/services/nostr/core";
import { useUser } from "~/services/auth/user-context";
import { IconX } from "public/assets/icons";
import LoadingBar from "react-top-loading-bar";

declare const window: any;
interface SearchModalProps {
  query?: string;
  close: () => void;
  pubkey: string;
}

export default function SearchModal({ query, close }: SearchModalProps) {
  const [convertedQuery, setConvertedQuery] = useState<string>("");

  useEffect(() => {
    if (isValidHex(query!)) {
      setConvertedQuery(query!);
    } else {
      const bech32ConvertedQuery = convertBech32ToHex(query!);
      if (bech32ConvertedQuery) {
        setConvertedQuery(bech32ConvertedQuery);
      }
    }
  }, [query]);

  function isValidHex(input: string): boolean {
    const hexRegex = /^([0-9A-Fa-f]{2})+$/;
    return hexRegex.test(input);
  }

  return (
    <SearchModalWrapper>
      <div
        className="flex cursor-pointer justify-end px-3 text-c-whitee"
        onClick={close}
      >
        <IconX />
      </div>
      {convertedQuery.length === 64 ? (
        <SearchResult
          key={query}
          pubkey={convertedQuery}
          close={close}
          query={query}
        />
      ) : (
        <SearchLoader />
      )}
    </SearchModalWrapper>
  );
}

export function RecentSearchModal({ close }: SearchModalProps): JSX.Element {
  const searches = [];

  return (
    <SearchModalWrapper>
      <div
        className="flex cursor-pointer justify-end px-3 text-c-whitee"
        onClick={close}
      >
        <IconX />
      </div>
      {searches?.length === 0 ? (
        <SearchLoader />
      ) : (
        searches?.map((search) => (
          <SearchResult key={search} pubkey={search} close={close} />
        ))
      )}
    </SearchModalWrapper>
  );
}

export function SearchResult({ pubkey, close }: SearchModalProps) {
  const navigate = useNavigate();
  const { data: userData } = useProfile({ pubkey });
  const { publish } = useNostr();
  const [followButton, setFollowButton] = useState("Follow");
  const user = useUser();
  const [progress, setProgress] = useState(0);

  const saveToRecent = async () => {
    //create search
  };

  const follow = async () => {
    const event: NostrEvent = {
      content: "",
      kind: 3,
      tags: [["p", pubkey]],
      created_at: moment().unix(),
      pubkey: user.pubkey!,
    };
    event.id = getEventHash(event);
    const signatureOrEvent = await window.nostr.signEvent(event);

    switch (typeof signatureOrEvent) {
      case "string":
        event.sig = signatureOrEvent;
        break;
      case "object":
        event.sig = signatureOrEvent.sig;
        break;
      default:
        throw new Error("Failed to sign with Nostr extension.");
    }

    publish(event);
    //create following
    setFollowButton("Followed");
  };

  const handleClick = () => {
    navigate(`/platform/feed/${pubkey}`, { state: { othersPubkey: pubkey } });
    saveToRecent();
    close();
  };

  return (
    <>
      <LoadingBar
        color="#00AFAF"
        height={6}
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <div className="w-full cursor-pointer" onClick={handleClick}>
        <div className=" flex rounded-lg px-2 py-3 hover:bg-gray-800">
          {userData?.picture == null ? (
            <img
              src={avatar(pubkey)}
              alt=""
              className="ml-2 h-12  w-12 rounded-md border border-gray-500"
            />
          ) : (
            <img
              src={userData?.picture}
              alt=""
              className="ml-2 h-12  w-12 rounded-md border border-gray-500"
            />
          )}
          <div className="ml-3 flex w-full flex-col">
            <div className=" flex items-center justify-between ">
              <h1 className="font-regular font-Roboto text-sm text-c-lightgray">
                {userData?.name ? userData?.name : mask(pubkey)}
              </h1>
              <button
                name="follow"
                value={followButton}
                className="rounded-md bg-c-lightergray px-2 py-1 text-sm"
                onClick={(e) => follow()}
              >
                {followButton}
              </button>
            </div>
            <p className="text-sm text-c-lightgray">
              <p className="ml-1 text-xs text-c-gray">{mask(pubkey)}</p>
            </p>
            <div className="max-h-[100px] min-h-[50px] overflow-y-auto transition duration-500 scrollbar-hide ">
              <p className="mt-1 text-xs text-c-lightgray">{userData?.about}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function SearchModalWrapper({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <div className="absolute">
      <div className="absolute max-h-[400px] min-h-[200px] w-[400px] rounded-lg border bg-c-gray py-4 shadow-lg">
        <div className="h-[380px] overflow-y-auto transition duration-500 scrollbar-hide">
          {children}
        </div>
      </div>
    </div>
  );
}

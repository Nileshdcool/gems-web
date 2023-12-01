import { SuggestedLoader } from "~/components/loader";
import SuggestedFollows from "./suggested-follows";
import { Link } from "@remix-run/react";
import { useEffect, useState } from "react";
import useProfileContacts from "~/services/nostr/profiles/contacts";

export default function RightPane({ authors }: { authors: string[] }) {
  const pubkey = authors[1];
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const { latestContactEvent, contactEose } = useProfileContacts(pubkey);

  useEffect(() => {
    if (latestContactEvent) {
      const newAuthorsList =
        latestContactEvent.tags
          ?.filter((tag) => tag[0] === "p" && !authors.includes(tag[1]))
          .map((tag) => tag[1]) || [];
      const uniqueAuthors = Array.from(new Set(newAuthorsList));
      setSuggestions(uniqueAuthors.slice(0, 10));
    }
  }, [latestContactEvent, pubkey, authors]);

  return (
    <div className="flex flex-col">
      {authors ? (
        <div className=" ml-1 h-[480px] w-[250px] rounded-md border border-c-gray bg-c-darkgray">
          <div className="flex justify-center">
            <div className="mt-3 h-[1px] w-[220px] bg-c-shadegray "></div>
          </div>
          <div className="ml-3 mt-2 font-Roboto text-c-whitee">
            <h1 className=" ">Suggested Follows :</h1>
          </div>
          <div className="flex justify-center">
            <div className="mt-3 h-[1px] w-[220px] bg-c-shadegray "></div>
          </div>
          <div className="mt-2 px-4">
            <div className="h-[380px] overflow-y-auto transition duration-500 scrollbar-hide">
              {!contactEose || suggestions.length == 0 ? (
                <SuggestedLoader />
              ) : (
                <SuggestedFollows suggestedFollows={suggestions} />
              )}
            </div>
          </div>
          <Link to="./suggested-user">
            <div className="ml-4 mt-1 cursor-pointer">
              <h1 className="text-sm text-c-cyan">SHOW MORE</h1>
            </div>
          </Link>
        </div>
      ) : (
        <SuggestedLoader />
      )}
    </div>
  );
}

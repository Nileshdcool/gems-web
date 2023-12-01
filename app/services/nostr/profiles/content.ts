import { useEffect, useState } from "react";
import { nip19 } from "nostr-tools";
import useProfileHex from "./hex";
import useProfileMetadata from "./metadata";

export interface IAuthor {
  id: string;
  picture: string;
  name: string;
  displayName: string;
  nip05: string;
  about: string;
  banner: string;
  lud06: string;
  website: string;
  following: string[];
}

const useProfileContent = (profileAddress: string | undefined) => {
  const hex = useProfileHex(profileAddress);
  const {
    isFetchingMetadata,
    isMetadataEmpty,
    metadataEose,
    latestMetadataEvent,
    metadata,
  } = useProfileMetadata(hex);

  const [author, setAuthor] = useState<IAuthor>({
    about: "",
    banner: "",
    following: [],
    id: "",
    lud06: "",
    name: "",
    nip05: "",
    picture: "",
    website: "",
    displayName: "",
  });
  const [npub, setNpub] = useState<string | undefined>(undefined);

  useEffect(() => {
    setAuthor({
      about: metadata.about || "",
      banner: metadata.banner || "",
      following: metadata.following || [],
      id: metadata.id || "",
      lud06: metadata.lud06 || "",
      name: metadata.name || "",
      nip05: metadata.nip05 || "",
      picture: metadata.picture || "",
      website: metadata.website || "",
      displayName: metadata.display_name || metadata.name,
    });

    setNpub((!!profileAddress && nip19.npubEncode(hex)) || undefined);
  }, [
    hex,
    latestMetadataEvent?.content,
    metadata.about,
    metadata.banner,
    metadata.display_name,
    metadata.following,
    metadata.id,
    metadata.lud06,
    metadata.name,
    metadata.nip05,
    metadata.picture,
    metadata.website,
    profileAddress,
  ]);

  return {
    ...author,
    npub,
    isFetchingMetadata,
    isMetadataEmpty,
    metadataEose,
    latestMetadataEvent,
  };
};

export default useProfileContent;

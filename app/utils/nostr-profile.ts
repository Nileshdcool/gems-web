import { nip05, nip19 } from "nostr-tools";

export default async function getProfileHex(profileAddress: string) {
  const profileAddressType = getProfileAddressType(profileAddress);

  if (profileAddressType === "nip05") {
    profileAddress = profileAddress.replace("%40", "@");
    if (!profileAddress.includes("@")) {
      if (profileAddress.includes(".")) {
        profileAddress = "_@" + profileAddress;
      } else {
        profileAddress += "@gems.xyz";
      }
    }

    const profile = await nip05.queryProfile(profileAddress);

    if (!profile || !profile.pubkey) throw new Error("profile not found");

    return profile.pubkey;
  } else if (profileAddressType === "nip19") {
    const { data } = nip19.decode(profileAddress);

    if (!data) throw new Error("profile not found");

    return data.toString();
  } else if (profileAddressType === "hex") {
    return profileAddress;
  } else {
    throw new Error("profile not found");
  }
}

type profileAddressType = "nip05" | "nip19" | "hex" | "unknown";

export const getProfileAddressType = (
  profileAddress: string
): profileAddressType => {
  if (profileAddress.includes("%40")) {
    return "nip05";
  } else if (profileAddress.startsWith("npub1")) {
    return "nip19";
  } else if (profileAddress.length === 64) {
    return "hex";
  } else {
    return "nip05";
  }
};

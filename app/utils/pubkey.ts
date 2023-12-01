import { bech32 } from "bech32";
import { toast } from "react-toastify";

export default function mask(pubkey: string): string {
  return pubkey.slice(0, 4) + "..." + pubkey.slice(-4);
}

export function avatar(pubkey: string): string {
  return `https://api.dicebear.com/5.x/bottts/svg?seed=${pubkey}`;
}

export function isNpubBech32(input: string): boolean {
  try {
    const decoded = bech32.decode(input);
    return decoded.prefix === "npub";
  } catch (err) {
    return false;
  }
}

export function convertBech32ToHex(bech32Str: string): string | null {
  if (isNpubBech32(bech32Str)) {
    const decoded = bech32.decode(bech32Str);
    const uint8Array = new Uint8Array(bech32.fromWords(decoded.words));
    const hexStr = Array.from(uint8Array)
      .map((byte) => byte.toString(16).padStart(2, "0"))
      .join("");

    return hexStr;
  }

  return null;
}

export function isValidPubkey(pubkey: string): boolean {
  const hexPattern = /^#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
  return hexPattern.test(pubkey);
}

export const copyPubkey = (pubkey: string) => {
  navigator.clipboard.writeText(pubkey);
  toast.success("Public key copied!", {
    position: toast.POSITION.TOP_CENTER,
  });
};

import { useEffect, useState } from "react";
import { nip19 } from "nostr-tools";
import type { Metadata } from "./types";
import { useNostrEvents } from "./core";

export function useProfile({
  pubkey,
  enabled: _enabled = true,
}: {
  pubkey: string;
  enabled?: boolean;
}) {
  const [profile, setProfile] = useState<Metadata | undefined>();
  const [cache, setCache] = useState<Record<string, Metadata>>({});

  const { onEvent, isLoading } = useNostrEvents({
    filter: {
      kinds: [0],
      authors: [pubkey],
    },
    enabled: _enabled,
  });

  useEffect(() => {
    if (cache[pubkey]) {
      setProfile(cache[pubkey]);
    } else {
      const cachedProfile = localStorage.getItem(pubkey);
      if (cachedProfile) {
        const cachedProfileJSON = JSON.parse(cachedProfile);
        setProfile(cachedProfileJSON);
        setCache((oldCache) => ({ ...oldCache, [pubkey]: cachedProfileJSON }));
      } else {
        onEvent((rawMetadata) => {
          try {
            const metadata: Metadata = JSON.parse(rawMetadata.content);
            const metaPubkey = rawMetadata.pubkey;

            if (metadata && metaPubkey === pubkey) {
              setProfile(metadata);
              setCache((oldCache) => ({ ...oldCache, [pubkey]: metadata }));
              localStorage.setItem(metaPubkey, JSON.stringify(metadata));
            }
          } catch (err) {
            console.error(err, rawMetadata);
          }
        });
      }
    }
  }, [pubkey, onEvent, cache]);

  const npub = nip19.npubEncode(pubkey);

  return {
    isLoading,
    data: profile
      ? {
          ...profile,
          npub,
        }
      : undefined,
  };
}

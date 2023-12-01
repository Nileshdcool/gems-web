import { Author, RelayPool } from "nostr-relaypool";
import { useEffect, useState } from "react";

export type NostrPersonData = {
  persons: [];
  followings: [];
};

export const useLoadNostrPersonData: any = (
  pubkey: string,
  condition: (data?: NostrPersonData) => Promise<boolean>
) => {
  const [personData, setPersonData] = useState<NostrPersonData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);
  const relays = [
    "wss://relay.damus.io",
    "wss://relay.snort.social",
    "wss://relay.gems.xyz",
  ];
  const relayPool = new RelayPool();
  const author = new Author(relayPool, relays, pubkey);
  const [network, setNetwork] = useState<any>([]);
  const [followings, setFollowing] = useState<any>([]);
  const [isConditionSatisfied, setIsConditionSatisfied] =
    useState<boolean>(false);

  useEffect(() => {
    if (isConditionSatisfied) {
      return;
    }

    const fetchPersons = async () => {
      if (await condition()) {
        setIsConditionSatisfied(true);
        return;
      }

      try {
        setLoading(true);

        author.secondFollows(
          (secondFollows: any) => {
            setNetwork(secondFollows);
          },
          0,
          true
        );

        author.follows((followings: any) => {
          setFollowing(followings);
        }, 0);

        if (network.length > 0 && followings.length > 0) {
          relayPool.close();
          let followingPubkeys = followings.map((following: any) => {
            return following.pubkey;
          });
          let networkPubkeys = network.map((net: any) => {
            return net[0];
          });

          const newPersonData = {
            persons: networkPubkeys,
            followings: followingPubkeys,
          };

          setPersonData(newPersonData);
          setLoading(false);

          if (await condition(newPersonData)) {
            setIsConditionSatisfied(true);
          }
        }
      } catch (err: any) {
        setError(err);
      }
    };

    fetchPersons();
  });

  return { personData, loading, error };
};

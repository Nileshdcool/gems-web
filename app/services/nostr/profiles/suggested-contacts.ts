import useSubscribe from "../subscribe";
import useStore from "~/services/store";
import type { Event } from "nostr-tools";
import { useMemo, useState } from "react";

const useSuggestedProfileContacts = (pubkeys: string[] | undefined) => {
  const [latestSuggestedContactEvents, setlatestSuggestedContactEvents] =
    useState<Array<Event> | undefined>(undefined);
  const [userRelays, setUserRelays] = useState({} as any);
  const defaultRelays = useStore((store) => store.relays);

  const { events: contactEvents, eose: suggedEose } = useSubscribe({
    relays: defaultRelays,
    filters: [{ authors: pubkeys, kinds: [3] }],
    options: {
      enabled: !!pubkeys,
      cacheRefresh: true,
      closeAfterEose: false,
    },
  });

  const isFetchingContacts = !suggedEose && !contactEvents.length;
  const isContactsEmpty = suggedEose && !contactEvents.length;

  const latestEventsByPubkey = useMemo(() => {
    return contactEvents?.reduce((acc, currEvent) => {
      const existingEvent = acc[currEvent.pubkey];

      if (!existingEvent || currEvent.created_at > existingEvent.created_at) {
        acc[currEvent.pubkey] = currEvent;
      }

      return acc;
    }, {} as { [key: string]: Event });
  }, [contactEvents]);

  const latestEventsArray = useMemo(() => {
    return latestEventsByPubkey ? Object.values(latestEventsByPubkey) : [];
  }, [latestEventsByPubkey]);
  setlatestSuggestedContactEvents(latestEventsArray);
  try {
    latestEventsArray.forEach((latest) => {
      setUserRelays(JSON.parse(latest.content || "{}"));
    });
  } catch (e) {
    console.error(e);
  }

  const defaultRelaysObj = useMemo(
    () =>
      defaultRelays.reduce((prev, curr) => {
        prev[curr] = { read: true, write: true };
        return prev;
      }, {} as any),
    [defaultRelays]
  );

  const relaysOrDefaults = Object.keys(userRelays).length
    ? userRelays
    : defaultRelaysObj;

  return {
    isFetchingContacts,
    isContactsEmpty,
    latestSuggestedContactEvents,
    suggedEose,
    relays: userRelays,
    relaysOrDefaults,
  };
};

export default useSuggestedProfileContacts;

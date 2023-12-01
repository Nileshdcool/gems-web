import { useSubscribe as useNostrHooksSubscribe } from "./hooks";
import { useState, useEffect } from "react";
import type { Event, Filter } from "nostr-tools";
import type { SubscriptionOptions } from "nostr-relaypool";
import { RelayPool } from "nostr-relaypool";
import localState from "../state";

let globalRelayPool: RelayPool | null = null;

const DEFAULT_RELAYS = [
  "wss://relay.damus.io",
  "wss://relay.snort.social",
  "wss://relay.gems.xyz",
];

const useRelayPoolSubscribe = (ops: {
  relays: string[];
  filters: Filter[];
  options: SubscriptionOptions;
  maxDelayms: number;
  onEose: () => {
    //
  };
  relayPool?: RelayPool;
  enabled: boolean;
}) => {
  const { relays, filters, options, maxDelayms, onEose, enabled } = ops;
  const [events, setEvents] = useState<Event[]>([]);
  const [eose, setEose] = useState(false);
  let initalRelayPool = ops.relayPool;
  if (!initalRelayPool) {
    if (!globalRelayPool) {
      globalRelayPool = new RelayPool(DEFAULT_RELAYS, {
        useEventCache: true,
        logErrorsAndNotices: true,
      });
    }
    initalRelayPool = globalRelayPool;
  }

  const [relayPool] = useState<RelayPool>(initalRelayPool);
  const [unsubscribe, setUnsubscribe] = useState<() => void>(() => () => ({}));

  options.allowDuplicateEvents = false;

  useEffect(() => {
    if (!enabled) return;
    setUnsubscribe(() => {
      relayPool.subscribe(
        filters,
        relays,
        (event: any) => {
          setEvents((prevEvents: Event[]) => {
            if (prevEvents.some((e) => e.id === event.id)) {
              return prevEvents;
            } else {
              return [...prevEvents, event];
            }
          });
        },
        maxDelayms,
        onEose,
        options
      );
      setUnsubscribe(() => () => {
        //
      });
    });
  }, [enabled]);

  const invalidate = () => {
    setEvents([]);
    setEose(false);
    unsubscribe();
  };

  const loadMore = () => {
    // TODO
  };

  return { events, eose, invalidate, loadMore };
};

let useRelayPool = false;
localState.get("useRelayPool").on((value: any) => {
  useRelayPool = !!value;
});

export default function useSubscribe(opts: any) {
  const relayPoolSubscribe = useRelayPoolSubscribe({
    ...opts,
    enabled: useRelayPool,
  });
  const nostrHooksSubscribe = useNostrHooksSubscribe({
    ...opts,
    enabled: !useRelayPool,
  });

  return useRelayPool ? relayPoolSubscribe : nostrHooksSubscribe;
}

import type { ReactNode } from "react";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

import type { Relay, Filter, Event as NostrEvent, Sub } from "nostr-tools";
import { relayInit } from "nostr-tools";

import { uniqBy } from "./utils";
import type { Metadata } from "./types";

type OnConnectFunc = (relay: Relay) => void;
type OnDisconnectFunc = (relay: Relay) => void;
type OnEventFunc = (event: NostrEvent) => void;
type OnDoneFunc = () => void;
type OnSubscribeFunc = (sub: Sub, relay: Relay) => void;

interface NostrContextType {
  isLoading: boolean;
  debug?: boolean;
  connectedRelays: Relay[];
  onConnect: (_onConnectCallback?: OnConnectFunc) => void;
  onDisconnect: (_onDisconnectCallback?: OnDisconnectFunc) => void;
  publish: (event: NostrEvent) => void;
}

const NostrContext = createContext<NostrContextType>({
  isLoading: true,
  connectedRelays: [],
  onConnect: () => null,
  onDisconnect: () => null,
  publish: () => null,
});

const log = (
  isOn: boolean | undefined,
  type: "info" | "error" | "warn",
  ...args: unknown[]
) => {
  if (!isOn) return;
  console[type](...args);
};

// export function NostrProvider({
//   children,
//   relayUrls,
//   debug,
// }: {
//   children: ReactNode;
//   relayUrls: string[];
//   debug?: boolean;
// }) {
//   const [isLoading, setIsLoading] = useState(true);
//   const [connectedRelays, setConnectedRelays] = useState<Relay[]>([]);

//   let onConnectCallback: null | OnConnectFunc = null;
//   let onDisconnectCallback: null | OnDisconnectFunc = null;

//   const isFirstRender = useRef(true);

//   const connectToRelays = useCallback(() => {
//     relayUrls.forEach(async (relayUrl) => {
//       const relay = relayInit(relayUrl);
//       relay.connect();

//       relay.on("connect", () => {
//         setIsLoading(false);
//         onConnectCallback?.(relay);
//         setConnectedRelays((prev) => uniqBy([...prev, relay], "url"));
//       });

//       relay.on("disconnect", () => {
//         onDisconnectCallback?.(relay);
//         setConnectedRelays((prev) => prev.filter((r) => r.url !== relayUrl));
//       });

//       relay.on("error", () => {
//         log(debug, "error", `❌ nostr (${relayUrl}): Connection error!`);
//       });
//     });
//   }, []);

//   useEffect(() => {
//     if (isFirstRender.current) {
//       isFirstRender.current = false;
//       connectToRelays();
//     }
//   }, []);

//   const publish = (event: NostrEvent) => {
//     return connectedRelays.map((relay) => {
//       return relay.publish(event);
//     });
//   };

//   const value: NostrContextType = {
//     debug,
//     isLoading,
//     connectedRelays,
//     publish,
//     onConnect: (_onConnectCallback?: OnConnectFunc) => {
//       if (_onConnectCallback) {
//         onConnectCallback = _onConnectCallback;
//       }
//     },
//     onDisconnect: (_onDisconnectCallback?: OnDisconnectFunc) => {
//       if (_onDisconnectCallback) {
//         onDisconnectCallback = _onDisconnectCallback;
//       }
//     },
//   };

//   return (
//     <></>
//   );
// }

export function useNostr() {
  return useContext(NostrContext);
}

export function useNostrEvents({
  filter,
  enabled = true,
}: {
  filter: Filter;
  enabled?: boolean;
}) {
  const {
    isLoading: isLoadingProvider,
    onConnect,
    debug,
    connectedRelays,
  } = useNostr();

  const [isLoading, setIsLoading] = useState(true);
  const [events, setEvents] = useState<NostrEvent[]>([]);
  const [otherMeta, setOtherMeta] = useState<Record<string, Metadata>>({});
  const metadataFetched = useRef<Record<string, boolean>>({});

  const [eventsLatest, setEventsLatest] = useState<NostrEvent[]>([]);

  const [unsubscribe, setUnsubscribe] = useState<() => void | void>(() => {
    return;
  });

  let onEventCallback: null | OnEventFunc = null;
  let onSubscribeCallback: null | OnSubscribeFunc = null;
  let onDoneCallback: null | OnDoneFunc = null;

  // Lets us detect changes in the nested filter object for the useEffect hook
  const filterBase64 =
    typeof window !== "undefined" ? window.btoa(JSON.stringify(filter)) : null;

  const _unsubscribe = (sub: Sub, relay: Relay) => {
    return sub.unsub();
  };

  const subscribe = useCallback((relay: Relay, filter: Filter) => {
    const sub = relay.sub([filter]);
    setIsLoading(true);

    const unsubscribeFunc = () => {
      _unsubscribe(sub, relay);
    };

    setUnsubscribe(() => unsubscribeFunc);

    sub.on("event", (event: NostrEvent) => {
      onEventCallback?.(event);
      setEvents((_events) => {
        return [event, ..._events];
      });
    });

    sub.on("event", (event: NostrEvent) => {
      const pubkeysToFetch = events
        .filter((event) => metadataFetched.current[event.pubkey] !== true)
        .map((event) => event.pubkey);
      pubkeysToFetch.forEach(
        (pubkey) => (metadataFetched.current[pubkey] = true)
      );

      const metadata = JSON.parse(event.content) as Metadata;

      setOtherMeta((cur) => ({
        ...cur,
        [event.pubkey]: metadata,
      }));
    });

    sub.on("event", (event: NostrEvent) => {
      onEventCallback?.(event);
      setEventsLatest((_events) => {
        return [event, ..._events];
      });
    });

    sub.on("eose", () => {
      setIsLoading(false);
      onDoneCallback?.();
    });

    return sub;
  }, []);

  useEffect(() => {
    if (!enabled) return;

    const relaySubs = connectedRelays.map((relay) => {
      const sub = subscribe(relay, filter);

      onSubscribeCallback?.(sub, relay);

      return {
        sub,
        relay,
      };
    });

    return () => {
      relaySubs.forEach(({ sub, relay }) => {
        _unsubscribe(sub, relay);
      });
    };
  }, [connectedRelays, filterBase64, enabled]);

  const uniqEvents = events.length > 0 ? uniqBy(events, "id") : [];
  const sortedEvents = uniqEvents.sort((a, b) => b.created_at - a.created_at);

  return {
    isLoading: isLoading || isLoadingProvider,
    events: sortedEvents,
    eventsLatest: sortedEvents,
    otherMeta: otherMeta,
    onConnect,
    connectedRelays,
    unsubscribe,
    onSubscribe: (_onSubscribeCallback: OnSubscribeFunc) => {
      if (_onSubscribeCallback) {
        onSubscribeCallback = _onSubscribeCallback;
      }
    },
    onEvent: (_onEventCallback: OnEventFunc) => {
      if (_onEventCallback) {
        onEventCallback = _onEventCallback;
      }
    },
    onDone: (_onDoneCallback: OnDoneFunc) => {
      if (_onDoneCallback) {
        onDoneCallback = _onDoneCallback;
      }
    },
  };
}

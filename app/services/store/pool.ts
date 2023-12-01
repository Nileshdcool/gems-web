import type { Event, Filter, Pub, Sub } from "nostr-tools";
import { SimplePool } from "nostr-tools";
import type { StateCreator } from "zustand";

export interface PoolSlice {
  pool: {
    simplePool: SimplePool;
    sub: (filters: Filter[]) => Sub;
    list: (filters: Filter[]) => Promise<Event[]>;
    publish: (event: Event) => Pub;
  };
  relays: string[];
}

const _pool = new SimplePool();

const createPoolSlice: StateCreator<PoolSlice> = (_set, get) => ({
  pool: {
    simplePool: _pool,
    sub: (filters: Filter[]) => _pool.sub(get().relays, filters),
    list: (filters: Filter[]) => _pool.list(get().relays, filters),
    publish: (event: Event) => _pool.publish(get().relays, event),
  },
  relays: [
    "wss://relay.damus.io",
    "wss://relay.snort.social",
    "wss://relay.gems.xyz",
  ],
});

export default createPoolSlice;

import type { RelaySettings } from "../db-client/relay.client";
import type { TaggedRawEvent, u256 } from "./types";
import { EventKind } from "./types";

export const uniqBy = <T>(arr: T[], key: keyof T): T[] => {
  return Object.values(
    arr.reduce(
      (map, item) => ({
        ...map,
        [`${item[key]}`]: item,
      }),
      {}
    )
  );
};

export const uniqValues = (value: string, index: number, self: string[]) => {
  return self.indexOf(value) === index;
};

export const dateToUnix = (_date?: Date) => {
  const date = _date || new Date();

  return Math.floor(date.getTime() / 1000);
};

// use if relay is valid
export const isRelay = (url: string) => {
  typeof url === "string" && url.match(/^wss?:\/\/.+/);
};

type FetchOpts = {
  method?: string;
  headers?: Record<string, string | boolean>;
  body?: string | FormData;
};

export const fetchJson = async (url: string, opts: FetchOpts = {}) => {
  if (!opts.headers) {
    opts.headers = {};
  }

  opts.headers["Accept"] = "application/json";

  const res = await fetch(url, opts as RequestInit);
  const json = await res.json();

  return json;
};

export const Reaction = {
  Positive: "+",
  Negative: "-",
};

/**
 * Return normalized reaction content
 */
export function normalizeReaction(content: string) {
  switch (content) {
    case "-":
      return Reaction.Negative;
    case "👎":
      return Reaction.Negative;
    default:
      return Reaction.Positive;
  }
}

/**
 * Get reactions to a specific event (#e + kind filter)
 */
export function getReactions(
  notes: TaggedRawEvent[],
  id: u256,
  kind = EventKind.Reaction
) {
  return (
    notes?.filter(
      (a) => a.kind === kind && a.tags.some((a) => a[0] === "e" && a[1] === id)
    ) || []
  );
}
/**
 * Default search relays
 */
export const SearchRelays = new Map<string, RelaySettings>([
  ["wss://relay.gems/xyz", { read: true, write: false }],
]);

export function debounce(timeout: number, fn: () => void) {
  const t = setTimeout(fn, timeout);
  return () => clearTimeout(t);
}

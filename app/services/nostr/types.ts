export type RawEvent = {
  id: u256;
  pubkey: HexKey;
  created_at: number;
  kind: number;
  tags: string[][];
  content: string;
  sig: string;
};

export interface TaggedRawEvent extends RawEvent {
  /**
   * A list of relays this event was seen on
   */
  relays: string[];
}

/**
 * Basic raw key as hex
 */
export type HexKey = string;

/**
 * A 256bit hex id
 */
export type u256 = string;

/**
 * Raw REQ filter object
 */
export type RawReqFilter = {
  ids?: u256[];
  authors?: u256[];
  kinds?: number[];
  "#e"?: u256[];
  "#p"?: u256[];
  "#t"?: string[];
  search?: string;
  since?: number;
  until?: number;
  limit?: number;
};

/**
 * Medatadata event content
 */
export type UserMetadata = {
  name?: string;
  display_name?: string;
  about?: string;
  picture?: string;
  website?: string;
  banner?: string;
  nip05?: string;
  lud06?: string;
  lud16?: string;
};

export const enum EventKind {
  Unknown = -1,
  SetMetadata = 0,
  TextNote = 1,
  RecommendServer = 2,
  ContactList = 3, // NIP-02
  DirectMessage = 4, // NIP-04
  Deletion = 5, // NIP-09
  Repost = 6, // NIP-18
  Reaction = 7, // NIP-25
  BadgeAward = 8, // NIP-58
  Relays = 10002, // NIP-65
  Ephemeral = 20_000,
  Auth = 22242, // NIP-42
  PubkeyLists = 30000, // NIP-51a
  NoteLists = 30001, // NIP-51b
  TagLists = 30002, // NIP-51c
  Badge = 30009, // NIP-58
  ProfileBadges = 30008, // NIP-58
  ZapRequest = 9734, // NIP 57
  ZapReceipt = 9735, // NIP 57
  Search = 30003, // NIP-51d
}

export interface Metadata {
  name?: string;
  username?: string;
  display_name?: string;
  picture?: string;
  banner?: string;
  about?: string;
  website?: string;
  lud06?: string;
  lud16?: string;
  nip05?: string;
}

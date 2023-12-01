import moment from "moment";

moment.updateLocale("en", {
  relativeTime: {
    future: "in %s",
    past: "%s ago",
    s: "just now",
    m: "1m",
    mm: "%dm",
    h: "1hr",
    hh: "%dhr",
    d: "1d",
    dd: "%dd",
    M: "1mo",
    MM: "%dmo",
    y: "1y",
    yy: "%dy",
  },
});
export const timestamps = moment().subtract(5, "d");
export const ago = timestamps.unix();
export const until = moment().subtract(20, "m").unix();
export const now = moment().unix();
export const yesterday = moment().subtract(1, "d").unix();

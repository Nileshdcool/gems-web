export function removeSubdomainAndTLD(url: string): string {
  const parsedUrl = new URL(url);
  const hostnameParts = parsedUrl.hostname.split(".");

  if (hostnameParts.length > 2) {
    hostnameParts.splice(0, 1);
  }

  hostnameParts.splice(-1, 1);

  return hostnameParts.join(".");
}

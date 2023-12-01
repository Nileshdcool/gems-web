import { IconNostr } from "public/assets/icons";
import { Button } from "../common/button";
import type { HexKey } from "~/services/nostr/types";
import { useSubmit } from "@remix-run/react";
import { useRef } from "react";

declare const window: Window &
  typeof globalThis & {
    nostr: {
      getPublicKey: () => Promise<HexKey>;
    };
  };

export default function Nos2xLogin({
  navigation,
}: {
  navigation: { state: string };
}): JSX.Element {
  const submit = useSubmit();
  const formRef = useRef<HTMLFormElement>(null);

  async function login(event: React.FormEvent<HTMLFormElement>) {
    try {
      event.preventDefault();

      if (formRef.current === null) {
        window.alert("An error occured trying to get your public key.");
      }

      const pubkey = await window.nostr.getPublicKey();
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const relays: string[] = [
        "wss://relay.damus.io",
        "wss://relay.snort.social",
        "wss://relay.gems.xyz",
      ];
      const formData = new FormData(formRef.current!);
      const ref = pubkey;
      formData.set("pubkey", ref);
      submit(formData, { method: "POST" });
    } catch (error) {
      if (
        error ==
        "TypeError: Cannot read properties of undefined (reading 'getPublicKey')"
      ) {
        window.alert("No public key acquired. Install nos2x extension first.");
      } else {
        window.alert("An error occured trying to get your public key.");
      }
      return;
    }
  }

  return (
    <>
      <form ref={formRef} onSubmit={login} method="post">
        <Button
          size="medium"
          type="submit"
          className="items-ceter mt-2 flex w-[350px] justify-center font-Bebas text-xl "
        >
          <IconNostr />
          <span className="ml-2">
            {navigation.state === "submitting" ? "Authenticating..." : "NOS2X"}
          </span>
        </Button>
      </form>
    </>
  );
}

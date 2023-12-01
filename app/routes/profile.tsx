import { Content, Title } from "~/components/settings/layout";
import Account from "~/components/settings/account";
import Bio from "~/components/profile/profile";
import type { AuthUser } from "~/services/session.server";
import { getUser } from "~/services/session.server";
import type { LoaderArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

export async function loader({ request }: LoaderArgs): Promise<any> {
  const user = await getUser(request);

  return user;
}

export default function Profile() {
  const user: AuthUser = useLoaderData();

  return (
    <>
      <Content>
        <Title title={"PROFILE"} />
        <Bio user={user} />
        <div className="px-10 flex justify-center">
          <div className="w-[960px] h-[2px] bg-c-gray mt-7" />
        </div>
        <div className="px-10 flex justify-center">
          <div className="w-[960px] h-[2px] bg-c-gray mt-5"></div>
        </div>
        <Account />
      </Content>
    </>
  );
}

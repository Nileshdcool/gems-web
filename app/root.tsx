import type { LinksFunction, LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";
import { getUser } from "~/services/session.server";
import stylesheet from "~/tailwind.css";
import { UserContext } from "./services/auth/user-context";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
  { rel: "preload", href: "https://fonts.googleapis.com" },
  { rel: "preload", href: "https://fonts.gstatic.com" },
  {
    href: "https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Roboto:wght@300;400;500;700&display=swap",
    rel: "stylesheet",
  },
];

export const loader = (async ({ request }) => {
  return json({ user: await getUser(request) });
}) satisfies LoaderFunction;

function GemApp() {
  return (
    <html lang="en" className="h-full">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="h-full">
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

export default function App() {
  const { user } = useLoaderData<typeof loader>();

  return (
    <>
      <UserContext.Provider value={user!}>
        <GemApp />
      </UserContext.Provider>
    </>
  );
}

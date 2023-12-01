import {
  IconMaso,
  IconChain,
  IconMember,
  IconSettingCheck,
  IconSmallAppearance,
  IconSmallKeyBoard,
  IconSmallProfile,
  IconSmallText,
} from "public/assets/icons";

export interface Section {
  path: string;
  name: string;
  icon: string;
  children: any;
}

export interface Apps {
  path: string;
  name: string;
  icon: string;
  children: any;
}

export function UserSetting() {
  const sections: Array<Section> = [
    {
      name: "Profile",
      path: "profile",
      icon: IconSmallProfile.name,
      children: [
        {
          id: 1,
          name: "Edit",
          path: "profile.edit",
        },
      ],
    },
  ];

  return sections;
}

export function AppSetting() {
  const appsettings: Array<Apps> = [
    {
      name: "Appearance",
      path: "appearance",
      icon: IconSmallAppearance.name,
      children: [],
    },
    {
      name: "Text and Image",
      path: "text-image",
      icon: IconSmallText.name,
      children: [],
    },
    {
      name: "Keyboard",
      path: "keyboard",
      icon: IconSmallKeyBoard.name,
      children: [],
    },
  ];
  return appsettings;
}

export async function getSections() {
  const sections: Array<Section> = [
    { path: "members", name: "Members", icon: IconMember.name, children: [] },
    { path: "role", name: "Role", icon: IconSettingCheck.name, children: [] },
    { path: "invites", name: "Invites", icon: IconChain.name, children: [] },
    { path: "ban", name: "Bans", icon: IconMaso.name, children: [] },
  ];
  return sections;
}

export const ChatSetting = [
  { id: 1, name: "AutoMods", pathname: "automods" },
  { id: 2, name: "Moderation", pathname: "moderation" },
  { id: 3, name: "Logs", pathname: "log" },
];

export const Channel = [
  { id: 1, name: "Overview", pathname: "overview" },
  { id: 2, name: "Permission", pathname: "permission" },
  { id: 3, name: "Action", pathname: "action" },
];

import {
  LayoutDashboard,
  NotepadText,
  Settings,
  UserRound,
} from "lucide-react";

export const ListMenu = [
  {
    name: "Dashboard",
    url: "/",
    icon: <LayoutDashboard />,
  },
  {
    name: "Transaksi",
    url: "/transaksi",
    icon: <NotepadText />,
  },
  {
    name: "Personal",
    url: "/personal",
    icon: <UserRound />,
  },
  {
    name: "Pengaturan",
    url: "/pengaturan",
    icon: <Settings />,
  },
];

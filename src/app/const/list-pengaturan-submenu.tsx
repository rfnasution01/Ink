import {
  AppWindow,
  Backpack,
  Columns4,
  Library,
  Rows3,
  Settings2,
} from "lucide-react";

export const ListPengaturanSubMenu = [
  {
    name: "Pengaturan",
    url: "/pengaturan",
    icon: <Settings2 />,
  },
  {
    name: "Sub Kategori",
    url: "/pengaturan/sub-kategori",
    icon: <Rows3 />,
  },
  {
    name: "Kategori",
    url: "/pengaturan/kategori",
    icon: <Library />,
  },
  {
    name: "Aset Grup",
    url: "/pengaturan/aset-grup",
    icon: <Columns4 />,
  },
  {
    name: "Aset",
    url: "/pengaturan/aset",
    icon: <Backpack />,
  },
  {
    name: "Status",
    url: "/pengaturan/status",
    icon: <AppWindow />,
  },
];

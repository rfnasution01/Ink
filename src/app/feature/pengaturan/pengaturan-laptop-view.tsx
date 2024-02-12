import { ListPengaturanSubMenu } from "@/app/const/list-pengaturan-submenu";
import { ReactNode } from "react";
import { PengaturanMenuList } from ".";

export function PengaturanLaptopView({ children }: { children: ReactNode }) {
  return (
    <div className="p-10 flex flex-col gap-y-10">
      <PengaturanMenuList />
      <div className="">{children}</div>
    </div>
  );
}

"use client";
import { ListPengaturanSubMenu } from "@/app/const/list-pengaturan-submenu";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function PengaturanMenuList() {
  const pathName = usePathname();
  const routeSegments = pathName.split("/");
  const desiredRoute = `/${routeSegments[1]}/${routeSegments[2]}`;

  return (
    <div className="flex items-center">
      {ListPengaturanSubMenu.map((item, idx) => (
        <Link
          href={item?.url}
          className={`flex items-center justify-center gap-2 p-4 ${
            desiredRoute === item?.url ||
            (pathName === item?.url && item?.name === "Pengaturan")
              ? "bg-[#F2F8FF] text-[#1094DD] border-b-2 border-[#1094DD]"
              : "border-[transparent]"
          } hover:bg-[#F2F8FF] hover:text-[#1094DD] border-b-2 hover:border-[#1094DD] transition duration-300 ease-in-out`}
          key={idx}
        >
          <span>{item?.icon}</span>
          <h5>{item.name}</h5>
        </Link>
      ))}
    </div>
  );
}

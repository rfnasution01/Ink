"use client";
import { ListMenu } from "@/app/const";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function MainLayoutFooterMenu() {
  const pathName = usePathname();
  const pathSegements = pathName.split("/");
  const path = pathSegements[1];
  return (
    <nav>
      <ul className="flex flex-row gap-2">
        {ListMenu?.map((item, idx) => (
          <li key={idx} className="flex-1 ">
            <Link
              href={item?.url}
              key={idx}
              className={`flex flex-col items-center gap-1 ${
                (item?.name.toLowerCase() === "dashboard" && path === "") ||
                item?.name.toLowerCase() === path
                  ? "text-[#1094DD]"
                  : "text-[#0f172a]"
              } hover:text-[#1094DD] transition duration-300 ease-in-out`}
            >
              <span>{item?.icon}</span>
              <h5 className="text-lg">{item?.name}</h5>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

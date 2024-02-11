"use client";
import { ListMenu } from "@/app/const";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function MainLayoutListMenu({ isShow }: { isShow: boolean }) {
  const pathName = usePathname();
  const pathSegements = pathName.split("/");
  const path = pathSegements[1];
  return (
    <nav>
      <ul>
        {ListMenu?.map((item, idx) => (
          <li key={idx}>
            <Link
              href={item?.url}
              key={idx}
              className={`flex items-center ${
                isShow ? "justify-start" : "justify-center"
              } gap-3 my-2 p-2 border-l-2 ${
                (item?.name.toLowerCase() === "dashboard" && path === "") ||
                item?.name.toLowerCase() === path
                  ? "border-[#1094DD] bg-[#F2F8FF] text-[#1094DD]"
                  : "border-[transparent]"
              } hover:border-l-2 hover:border-[#1094DD] hover:bg-[#F2F8FF] hover:text-[#1094DD] transition duration-300 ease-in-out`}
            >
              <span>{item?.icon}</span>
              {isShow && <h5 className="text-lg">{item?.name}</h5>}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

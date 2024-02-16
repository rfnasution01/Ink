"use client";
import {
  capitalizeFirstLetterFromLowercase,
  getPathObjects,
} from "@/app/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Breadcrumb() {
  const pathName = usePathname();
  const path = pathName.substring(1);
  const pathSegments = path.split("/");

  const newPath = getPathObjects(pathSegments);

  return (
    <div className="flex gap-x-2 items-center">
      {newPath?.map((item, idx) => (
        <div className="flex gap-x-2 items-center" key={idx}>
          <Link
            href={item?.url}
            style={{
              textDecoration: "none",
              color: idx < pathSegments.length - 1 ? "#000" : "grey",
              cursor: idx < pathSegments.length - 1 ? "pointer" : "not-allowed",
            }}
          >
            {item?.name === ""
              ? "Home"
              : capitalizeFirstLetterFromLowercase(item?.name)}
          </Link>
          <span>{idx < pathSegments.length - 1 && "/"}</span>
        </div>
      ))}
    </div>
  );
}

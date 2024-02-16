"use client";
import { ReactNode } from "react";
import { PengaturanMenuList } from ".";
import { Breadcrumb } from "@/app/components";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { capitalizeFirstLetterFromLowercase } from "@/app/utils";

export function PengaturanLaptopView({ children }: { children: ReactNode }) {
  const pathName = usePathname();
  const routeSegments = pathName.split("/");
  const desiredRoute = `/${routeSegments[1]}/${routeSegments[2]}`;
  const subPathNow = routeSegments[2];
  const pathNow = routeSegments[1];

  return (
    <div className="p-10 flex flex-col gap-y-4">
      <PengaturanMenuList />
      <div className="bg-white p-10 rounded-lg shadow flex flex-col gap-y-4">
        <div
          className={`flex ${
            routeSegments.length > 3 ? "justify-between" : "justify-end"
          } items-center`}
        >
          {routeSegments.length > 3 && (
            <Link
              href={desiredRoute}
              className="flex flex-row items-center gap-2 hover:text-sky-700"
            >
              <span>
                <ArrowLeft />
              </span>
              <h5>Kembali</h5>
            </Link>
          )}
          <Breadcrumb />
        </div>

        <div className="flex flex-col mt-4 gap-y-8">
          {routeSegments.length <= 3 && (
            <h5 style={{ fontSize: "20px", fontWeight: 500 }}>
              List{" "}
              {capitalizeFirstLetterFromLowercase(
                (subPathNow ?? pathNow).toLowerCase()
              )}
            </h5>
          )}
          <div>{children}</div>
        </div>
      </div>
    </div>
  );
}

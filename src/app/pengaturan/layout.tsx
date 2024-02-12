import type { Metadata } from "next";
import {
  PengaturanLaptopView,
  PengaturanMobileView,
} from "../feature/pengaturan";

export const metadata: Metadata = {
  title: "Pengaturan",
  description:
    "Pantau dan kelola keuangan Anda dengan mudah bersama Ink, solusi terpercaya untuk pencatatan keuangan yang efisien.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="">
      <div className="hidden lg:block">
        <PengaturanLaptopView>{children}</PengaturanLaptopView>
      </div>
      <div className="block lg:hidden">
        <PengaturanMobileView />
      </div>
    </div>
  );
}

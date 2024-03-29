import type { Metadata } from "next";
import "./globals.css";
import { LoginLayout, MainLayout } from "./layouts";
import { usePathname } from "next/navigation";

export const metadata: Metadata = {
  title: "Ink",
  description:
    "Pantau dan kelola keuangan Anda dengan mudah bersama Ink, solusi terpercaya untuk pencatatan keuangan yang efisien.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#f0f4f7]">
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";
import { LoginLayout, MainLayout } from "./layouts";
import { useSession } from "./utils";

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
  const session = useSession;
  return (
    <html lang="en">
      <body className="bg-[#f0f4f7]">
        <div className="">
          {session ? <MainLayout /> : <LoginLayout children={children} />}
        </div>
      </body>
    </html>
  );
}

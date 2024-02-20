import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Ink",
  description:
    "Pantau dan kelola keuangan Anda dengan mudah bersama Ink, solusi terpercaya untuk pencatatan keuangan yang efisien.",
};

export default function LoginLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#f0f4f7]">
        <div className="min-h-screen flex items-center justify-center">
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}

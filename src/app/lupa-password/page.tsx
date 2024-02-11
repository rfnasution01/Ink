import { Metadata } from "next";
import { LupaPasswordLaptopView, LupaPasswordMobileView } from "../feature";

export const metadata: Metadata = {
  title: "Ink - Lupa Password",
  description:
    "Pantau dan kelola keuangan Anda dengan mudah bersama Ink, solusi terpercaya untuk pencatatan keuangan yang efisien.",
};

export default function LupaPassword() {
  return (
    <article className="bg-white shadow rounded-lg lg:min-w-[30vw] max-w-[70vw] lg:min-h-[80vh]">
      <div className="hidden lg:block">
        <LupaPasswordLaptopView />
      </div>
      <div className="block lg:hidden">
        <LupaPasswordMobileView />
      </div>
    </article>
  );
}

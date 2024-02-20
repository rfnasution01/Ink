import { Metadata } from "next";
import { LoginLaptopView, LoginMobileView } from "../../feature";

export const metadata: Metadata = {
  title: "Ink - Login",
  description:
    "Pantau dan kelola keuangan Anda dengan mudah bersama Ink, solusi terpercaya untuk pencatatan keuangan yang efisien.",
};

export default function Masuk() {
  return (
    <article className="bg-white shadow rounded-lg lg:min-w-[30vw] lg:min-h-[80vh]">
      <div className="hidden lg:block">
        <LoginLaptopView />
      </div>
      <div className="block lg:hidden">
        <LoginMobileView />
      </div>
    </article>
  );
}

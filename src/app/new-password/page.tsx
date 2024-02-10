import { Metadata } from "next";
import { NewPasswordLaptopView, NewPasswordMobileView } from "../feature";

export const metadata: Metadata = {
  title: "Ink - New Password",
  description:
    "Pantau dan kelola keuangan Anda dengan mudah bersama Ink, solusi terpercaya untuk pencatatan keuangan yang efisien.",
};

export default function NewPassword() {
  return (
    <article className="lg:bg-white shadow rounded-lg lg:min-w-[30vw] lg:min-h-[80vh]">
      <div className="hidden lg:block">
        <NewPasswordLaptopView />
      </div>
      <div className="block lg:hidden">
        <NewPasswordMobileView />
      </div>
    </article>
  );
}

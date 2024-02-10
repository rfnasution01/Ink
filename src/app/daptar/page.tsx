import { Metadata } from "next";
import { DaptarLaptopView, DaptarMobileView } from "../feature/daptar";

export const metadata: Metadata = {
  title: "Ink - Daptar",
  description:
    "Pantau dan kelola keuangan Anda dengan mudah bersama Ink, solusi terpercaya untuk pencatatan keuangan yang efisien.",
};

export default function Daptar() {
  return (
    <article className="rounded-lg">
      <div className="hidden lg:block">
        <DaptarLaptopView />
      </div>
      <div className="block lg:hidden">
        <DaptarMobileView />
      </div>
    </article>
  );
}

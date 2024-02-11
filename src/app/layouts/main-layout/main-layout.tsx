import { ReactNode } from "react";
import { MainLayoutLaptopView, MainLayoutMobileView } from ".";

export function MainLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen">
      <div className="hidden lg:block">
        <MainLayoutLaptopView>{children}</MainLayoutLaptopView>
      </div>
      <div className="block lg:hidden">
        <MainLayoutMobileView>{children}</MainLayoutMobileView>
      </div>
    </div>
  );
}

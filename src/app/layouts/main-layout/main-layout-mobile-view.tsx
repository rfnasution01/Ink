import { ReactNode } from "react";
import { MainLayoutFooterMenu, MainLayoutHeaderMobile } from ".";

export function MainLayoutMobileView({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <div className="">
        <div className="bg-white p-4 shadow">
          <MainLayoutHeaderMobile />
        </div>
        <div className="max-h-[80vh] overflow-y-auto">{children}</div>
      </div>
      <div className="p-4 bg-white shadow-lg">
        <MainLayoutFooterMenu />
      </div>
    </div>
  );
}

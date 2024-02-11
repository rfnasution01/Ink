import { ReactNode } from "react";
import { MainLayoutSidebar } from ".";

export function MainLayoutLaptopView({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex">
      <aside
        className="sticky top-0 left-0 max-h-[100vh] shadow-lg bg-white"
        style={{}}
      >
        <MainLayoutSidebar />
      </aside>
      <section className="min-h-screen flex-1">{children}</section>
    </div>
  );
}

import { ReactNode } from "react";

export function LoginLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <main>{children}</main>
    </div>
  );
}

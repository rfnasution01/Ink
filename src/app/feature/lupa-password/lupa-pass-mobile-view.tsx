import { LupaPasswordFooter, LupaPasswordForm, LupaPasswordTitle } from ".";

export function LupaPasswordMobileView() {
  return (
    <div className="flex flex-col gap-4">
      <LupaPasswordTitle />
      <LupaPasswordForm />
      <LupaPasswordFooter />
    </div>
  );
}

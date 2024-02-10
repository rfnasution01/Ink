import { LupaPasswordFooter, LupaPasswordForm, LupaPasswordTitle } from ".";

export function LupaPasswordLaptopView() {
  return (
    <div className="flex flex-col gap-4 max-w-[30vw]">
      <LupaPasswordTitle />
      <LupaPasswordForm />
      <LupaPasswordFooter />
    </div>
  );
}

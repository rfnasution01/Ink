import { NewPasswordForm, NewPasswordTitle } from ".";
import { LupaPasswordFooter } from "..";

export function NewPasswordLaptopView() {
  return (
    <div className="flex flex-col gap-4 max-w-[30vw]">
      <NewPasswordTitle />
      <NewPasswordForm />
      <LupaPasswordFooter />
    </div>
  );
}

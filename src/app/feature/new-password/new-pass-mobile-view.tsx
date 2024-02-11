import { NewPasswordForm, NewPasswordTitle } from ".";
import { LupaPasswordFooter } from "..";

export function NewPasswordMobileView() {
  return (
    <div className="flex flex-col gap-4">
      <NewPasswordTitle />
      <NewPasswordForm />
      <LupaPasswordFooter />
    </div>
  );
}

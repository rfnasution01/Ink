import { LoginFooter, LoginForm, LoginTitle } from ".";

export function LoginLaptopView() {
  return (
    <div className="flex flex-col gap-4 max-w-[40vw]">
      <LoginTitle />
      <LoginForm />
      <LoginFooter />
    </div>
  );
}

import { LoginFooter, LoginForm, LoginTitle } from ".";

export function LoginMobileView() {
  return (
    <div className="flex flex-col gap-4">
      <LoginTitle />
      <LoginForm />
      <LoginFooter />
    </div>
  );
}

import { DaptarFooter, DaptarForm, DaptarTitle } from ".";

export function DaptarMobileView() {
  return (
    <div className="bg-white shadow flex flex-col items-center justify-center gap-4">
      <DaptarTitle />
      <DaptarForm />
      <DaptarFooter />
    </div>
  );
}

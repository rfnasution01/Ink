import Image from "next/image";
import LoginPage from "../../assets/bg-daptar.jpg";
import { DaptarFooter, DaptarForm, DaptarTitle } from ".";

export function DaptarLaptopView() {
  return (
    <div className="grid grid-cols-12 min-w-[100vw] max-w-[100vw] max-h-[100vh] min-h-screen overflow-x-hidden overflow-y-auto">
      <div className="flex flex-col items-center gap-4 justify-center col-span-6">
        <div className="bg-white shadow flex flex-col items-center justify-center gap-4">
          <DaptarTitle />
          <DaptarForm />
          <DaptarFooter />
        </div>
      </div>
      <div className="col-span-6 bg-stone-300">
        <Image
          src={LoginPage}
          alt="Ink"
          objectFit="cover"
          style={{
            width: "100vw",
            minHeight: "100vh",
            height: "100%",
            backdropFilter: "blur(10px)",
          }}
        />
      </div>
    </div>
  );
}

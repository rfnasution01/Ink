import Image from "next/image";
import LoginPage from "../../assets/login-bg.jpg";

export function DaptarLaptopView() {
  return (
    <div className="min-h-screen w-[100vw] grid grid-cols-12">
      <div className="col-span-6">
        <Image src="/logo.png" alt="Ink" width={50} height={50} />
      </div>
      <div className="col-span-6 bg-stone-300">
        <Image
          src={LoginPage}
          alt="Ink"
          objectFit="cover"
          style={{
            width: "100vw",
            height: "100vh",
            backdropFilter: "blur(10px)",
          }}
        />
      </div>
    </div>
  );
}

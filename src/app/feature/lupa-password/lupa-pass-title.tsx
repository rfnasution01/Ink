import Image from "next/image";

export function LupaPasswordTitle() {
  return (
    <div
      className="flex flex-col items-center justify-center gap-2"
      style={{ padding: "40px 40px 0px 40px" }}
    >
      <Image src="/logo.png" alt="Ink" width={60} height={60} />
      <h2
        style={{
          fontWeight: 600,
          fontSize: "20px",
          color: "#0f172a",
        }}
      >
        Lupa Password
      </h2>
    </div>
  );
}

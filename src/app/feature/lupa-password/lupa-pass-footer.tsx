import Link from "next/link";

export function LupaPasswordFooter() {
  return (
    <div
      className="flex flex-col lg:flex-row items-start lg:items-center justify-center lg:justify-between"
      style={{
        padding: "0px 40px",
        marginBottom: "40px",
      }}
    >
      <h5
        style={{
          fontSize: "12px",
          fontWeight: 400,
          color: "#777",
        }}
      >
        Sudah punya akun?{" "}
        <Link href="/masuk" style={{ color: "blue" }}>
          Masuk
        </Link>
      </h5>

      <h5
        style={{
          fontSize: "12px",
          fontWeight: 400,
          color: "#777",
        }}
      >
        Belum punya akun?{" "}
        <Link href="/daptar" style={{ color: "blue" }}>
          Daptar
        </Link>
      </h5>
    </div>
  );
}

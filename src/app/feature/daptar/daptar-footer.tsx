import Link from "next/link";

export function DaptarFooter() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0px 40px",
        marginBottom: "40px",
        minWidth: "30vw",
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
          Login
        </Link>
      </h5>
    </div>
  );
}

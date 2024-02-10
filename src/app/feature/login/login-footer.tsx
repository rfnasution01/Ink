import Link from "next/link";

export function LoginFooter() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "start",
        justifyContent: "center",
        padding: "0px 40px",
        marginBottom: "40px",
      }}
    >
      <Link href="/lupa-password">
        <h5
          style={{
            fontSize: "12px",
            fontWeight: 400,
            color: "#777",
          }}
        >
          Lupa Password?
        </h5>
      </Link>
      <Link href="/daptar">
        <h5
          style={{
            fontSize: "12px",
            fontWeight: 400,
            color: "#777",
          }}
        >
          Belum punya akun?
        </h5>
      </Link>
    </div>
  );
}

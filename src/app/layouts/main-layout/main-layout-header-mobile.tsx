import Image from "next/image";
import Link from "next/link";

export function MainLayoutHeaderMobile() {
  return (
    <Link href="/" className="flex items-center gap-3">
      <Image src="/logo.png" alt="Ink" width={50} height={50} />
      <h5
        style={{
          fontSize: "20px",
          fontWeight: 400,
          letterSpacing: "2px",
          fontFamily: "fantasy",
          color: "#0f172a",
        }}
      >
        Ink
      </h5>
    </Link>
  );
}

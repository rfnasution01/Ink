import { MoreHorizontal, MoreVertical } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Dispatch, SetStateAction } from "react";

export function MainLayoutTitle({
  isShow,
  setIsShow,
}: {
  isShow: boolean;
  setIsShow: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <div
      className={`flex ${
        isShow ? "flex-row" : "flex-col"
      } items-center gap-4 justify-between`}
    >
      <Link href="/" className="flex items-center gap-2">
        <Image src="/logo.png" alt="Ink" width={40} height={40} />
        {isShow && (
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
        )}
      </Link>

      <span
        className="hover:cursor-pointer hover:text-sky-700"
        onClick={() => setIsShow(!isShow)}
      >
        {isShow ? <MoreVertical /> : <MoreHorizontal />}
      </span>
    </div>
  );
}

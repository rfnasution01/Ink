"use client";
import { Frown } from "lucide-react";
import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);
  return (
    <html>
      <body>
        <div className="h-screen flex gap-2 flex-col items-center  justify-center">
          <h1 className="text-8xl font-bold">OOPS !</h1>
          <div className="flex items-center gap-1">
            <h2 className="text-2xl text-nowrap font-medium leading-4 tracking-wide text-stone-950">
              Sorry
            </h2>
            <span>
              <Frown />
            </span>
          </div>
          <h3 className="text-xs font-light text-stone-500">
            Something went wrong!{" "}
            <button onClick={() => reset()} className="text-indigo-400">
              Try again
            </button>
          </h3>
        </div>
      </body>
    </html>
  );
}

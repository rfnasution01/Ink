import { Loader2 } from "lucide-react";

export function Loading() {
  return (
    <div
      style={{
        marginBottom: "20px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Loader2 className="animate-spin" viewBox="0 0 24 24" />
    </div>
  );
}

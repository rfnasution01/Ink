import { TypeMessage } from "@/app/const";
import { AlertCircle, AlertTriangle, CheckCircle2 } from "lucide-react";

export function Message({
  message,
  type,
}: {
  message: string | undefined;
  type: "success" | "error" | "warning";
}) {
  return (
    <div
      style={{
        marginBottom: "20px",
        display: "flex",
        justifyContent: "start",
        alignItems: "center",
      }}
    >
      <span
        style={{
          backgroundColor:
            type === TypeMessage.SUCCESS
              ? "green"
              : type === TypeMessage.WARNING
              ? "#FF8911"
              : type === TypeMessage.ERROR
              ? "#e34843"
              : "#e34843",
          color: "#fff",
          padding: "12px 6px",
          border:
            type === TypeMessage.SUCCESS
              ? "1px solid green"
              : type === TypeMessage.WARNING
              ? "1px solid #FF8911"
              : type === TypeMessage.ERROR
              ? "1px solid #e34843"
              : "1px solid #e34843",
          height: "100%",
        }}
      >
        {type === TypeMessage.SUCCESS ? (
          <CheckCircle2 />
        ) : type === TypeMessage.WARNING ? (
          <AlertTriangle />
        ) : type === TypeMessage.ERROR ? (
          <AlertCircle />
        ) : (
          <AlertCircle />
        )}
      </span>
      <h5
        style={{
          fontSize: "16px",
          fontWeight: 400,
          color: "#64748b",
          borderBottom: "1px solid #ddd",
          borderRight: "1px solid #ddd",
          borderTop: "1px solid #ddd",
          minHeight: "100%",
          padding: "12px 6px",
          flex: 1,
        }}
      >
        {message ?? "Kesalahan pada server"}
      </h5>
    </div>
  );
}

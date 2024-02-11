"use client";
import { Loading, Message } from "@/app/components";
import { useRouter } from "next/navigation";
import { SyntheticEvent, useState } from "react";

export function LupaPasswordForm() {
  const router = useRouter();
  const [email, setEmail] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<string | undefined>(undefined);
  const [typeMsg, setTypeMsg] = useState<"success" | "warning" | "error">(
    "error"
  );

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    const data = {
      email: email,
    };
    try {
      console.log({ data });
      router.push("/new-password");
    } catch (error) {
      console.log(error);
    }
  };

  const disabled = email === "";

  return (
    <div style={{ padding: "0px 40px" }}>
      <div
        style={{
          marginBottom: "20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h5
          className="hidden lg:block"
          style={{
            fontWeight: 400,
            fontSize: "14px",
            color: "#64748b",
            maxWidth: "90%",
            textAlign: "center",
          }}
        >
          Silakan masukkan email yang anda gunakan untuk login. Kami akan
          mengirimkan email pemulihan ke email anda
        </h5>
      </div>

      {isLoading && <Loading />}
      {message && <Message message={message} type={typeMsg} />}

      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
          gap: "20px",
        }}
      >
        {/* Email  */}
        <div className="flex flex-col w-full">
          <label
            style={{
              fontWeight: 400,
              fontSize: "12px",
              marginBottom: "8px",
              color: "#0f172a",
            }}
          >
            Email
          </label>
          <input
            type="email"
            style={{
              border: "1px solid #ddd",
              borderRadius: "4px",
              padding: "8px",
              fontSize: "12px",
              color: "#64748b",
            }}
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {/* Submit  */}
        <button
          type="submit"
          className="bg-[#0079ba] hover:bg-sky-700 p-2 rounded-md text-white w-full disabled:cursor-not-allowed"
          disabled={disabled}
        >
          Kirim
        </button>
      </form>
    </div>
  );
}

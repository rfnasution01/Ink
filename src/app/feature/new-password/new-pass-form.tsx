"use client";
import { Loading, Message } from "@/app/components";
import { Eye, EyeOff } from "lucide-react";
import { useRouter } from "next/navigation";
import { SyntheticEvent, useState } from "react";

export function NewPasswordForm() {
  const router = useRouter();
  const [password, setPassword] = useState<string>("");
  const [repeatPassword, setRepeatPassword] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isShow, setIsShow] = useState<boolean>(false);
  const [isShowRepeat, setIsShowRepat] = useState<boolean>(false);
  const [message, setMessage] = useState<string | undefined>(undefined);
  const [typeMsg, setTypeMsg] = useState<"success" | "warning" | "error">(
    "error"
  );

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    const data = {
      password: password,
      repeatPassword: repeatPassword,
    };
    try {
      console.log({ data });
      router.push("/masuk");
    } catch (error) {
      console.log(error);
    }
  };

  const disabled =
    password === "" || repeatPassword === "" || password !== repeatPassword;

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
          style={{
            fontWeight: 400,
            fontSize: "14px",
            color: "#64748b",
            maxWidth: "90%",
            textAlign: "center",
          }}
        >
          Silakan masukkan password baru anda
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
        {/* Password  */}
        <div className="flex flex-col w-full relative">
          <label
            style={{
              fontWeight: 400,
              fontSize: "12px",
              marginBottom: "8px",
              color: "#0f172a",
            }}
          >
            Password
          </label>
          <input
            type={`${isShow ? "text" : "password"}`}
            style={{
              border: "1px solid #ddd",
              borderRadius: "4px",
              padding: "8px",
              fontSize: "12px",
              color: "#64748b",
              paddingRight: "30px",
            }}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {/* Icon */}
          <div
            style={{
              position: "absolute",
              top: "70%",
              right: "10px",
              transform: "translateY(-50%)",
              cursor: "pointer",
            }}
            onClick={() => setIsShow(!isShow)}
          >
            {isShow ? <Eye /> : <EyeOff />}
          </div>
        </div>

        {/* Repeat Password  */}
        <div className="flex flex-col w-full relative">
          <label
            style={{
              fontWeight: 400,
              fontSize: "12px",
              marginBottom: "8px",
              color: "#0f172a",
            }}
          >
            Ulangi Password
          </label>
          <input
            type={`${isShow ? "text" : "password"}`}
            style={{
              border: "1px solid #ddd",
              borderRadius: "4px",
              padding: "8px",
              fontSize: "12px",
              color: "#64748b",
              paddingRight: "30px",
            }}
            placeholder="Password"
            value={repeatPassword}
            onChange={(e) => setRepeatPassword(e.target.value)}
          />
          {/* Icon */}
          <div
            style={{
              position: "absolute",
              top: "70%",
              right: "10px",
              transform: "translateY(-50%)",
              cursor: "pointer",
            }}
            onClick={() => setIsShowRepat(!isShowRepeat)}
          >
            {isShowRepeat ? <Eye /> : <EyeOff />}
          </div>
        </div>

        {/* Submit  */}
        <button
          type="submit"
          className="bg-[#0079ba] hover:bg-sky-700 p-2 rounded-md text-white w-full disabled:cursor-not-allowed"
          disabled={disabled}
        >
          Ubah
        </button>
      </form>
    </div>
  );
}

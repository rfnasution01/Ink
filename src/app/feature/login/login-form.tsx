"use client";

import { Loading, Message } from "@/app/components";
import { Eye, EyeOff } from "lucide-react";
import { SyntheticEvent, useState } from "react";

export function LoginForm() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isShow, setIsShow] = useState<boolean>(false);
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<string | undefined>(undefined);
  const [typeMsg, setTypeMsg] = useState<"success" | "warning" | "error">(
    "error"
  );

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    const data = {
      name: username,
      password: password,
      isChecked: isChecked,
    };
    console.log({ data });
    // navigate.refresh();
  };

  const disabled = username === "" || password === "";

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
            maxWidth: "60%",
            textAlign: "center",
          }}
        >
          Silakan masuk ke akun anda
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
        {/* Username  */}
        <div className="flex flex-col w-full">
          <label
            style={{
              fontWeight: 400,
              fontSize: "12px",
              marginBottom: "8px",
              color: "#0f172a",
            }}
          >
            Username
          </label>
          <input
            type="text"
            style={{
              border: "1px solid #ddd",
              borderRadius: "4px",
              padding: "8px",
              fontSize: "12px",
              color: "#64748b",
            }}
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
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
        {/* Checkbox  */}
        <div className="flex justify-start items-center gap-2 w-full">
          <input
            type="checkbox"
            checked={isChecked}
            onChange={(e) => setIsChecked(e.target.checked)}
            className="hover:cursor-pointer"
          />
          <label
            style={{
              fontWeight: 400,
              fontSize: "12px",
              color: "#0f172a",
            }}
          >
            Ingatkan saya
          </label>
        </div>

        {/* Submit  */}
        <button
          type="submit"
          className="bg-[#0079ba] hover:bg-sky-700 p-2 rounded-md text-white w-full disabled:cursor-not-allowed"
          disabled={disabled}
        >
          Masuk
        </button>
      </form>
    </div>
  );
}

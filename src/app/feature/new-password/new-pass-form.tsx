"use client";
import { Loading, Message } from "@/app/components";
import { isValidLength, isValidPassword } from "@/app/utils";
import { AlertTriangle, Eye, EyeOff } from "lucide-react";
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

  const [focusedFields, setFocusedFields] = useState<{
    password: boolean;
    repeatPassword: boolean;
  }>({
    password: false,
    repeatPassword: false,
  });
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
    password === "" ||
    repeatPassword === "" ||
    password !== repeatPassword ||
    !isValidPassword(password);

  return (
    <div style={{ padding: "0px 40px" }}>
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
              color:
                (focusedFields.password && !isValidLength(password)) ||
                (focusedFields.password && !isValidPassword(password))
                  ? "red"
                  : "#0f172a",
            }}
          >
            Password
          </label>
          <input
            type={`${isShow ? "text" : "password"}`}
            style={{
              border:
                (focusedFields.password && !isValidLength(password)) ||
                (focusedFields.password && !isValidPassword(password))
                  ? "1px solid red"
                  : "1px solid #ddd",
              borderRadius: "4px",
              padding: "8px",
              fontSize: "12px",
              color:
                (focusedFields.password && !isValidLength(password)) ||
                (focusedFields.password && !isValidPassword(password))
                  ? "red"
                  : "#64748b",
              paddingRight: "30px",
            }}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onFocus={() =>
              setFocusedFields({ ...focusedFields, password: true })
            }
          />
          {/* Icon */}
          <div
            style={{
              position: "absolute",
              top: "40%",
              right: "10px",
              transform: "translateY(-50%)",
              cursor: "pointer",
              color:
                (focusedFields.password && !isValidLength(password)) ||
                (focusedFields.password && !isValidPassword(password))
                  ? "red"
                  : "#0f172a",
            }}
            onClick={() => setIsShow(!isShow)}
          >
            {isShow ? <Eye /> : <EyeOff />}
          </div>
          <div
            className="flex items-center gap-1 mt-1"
            style={{
              color:
                focusedFields.password && !isValidLength(password)
                  ? "red"
                  : "#0f172a",
            }}
          >
            <span>
              <AlertTriangle size={12} />
            </span>
            <label
              style={{
                fontWeight: 400,
                fontSize: "12px",
              }}
            >
              Password lebih dari 8 karakter
            </label>
          </div>
          <div
            className="flex items-center gap-1 mt-1"
            style={{
              color:
                focusedFields.password && !isValidPassword(password)
                  ? "red"
                  : "#0f172a",
            }}
          >
            <span>
              <AlertTriangle size={12} />
            </span>
            <label
              style={{
                fontWeight: 400,
                fontSize: "12px",
              }}
            >
              Kombinasi huruf dan angka
            </label>
          </div>
        </div>

        {/* Repeat Password  */}
        <div className="flex flex-col w-full relative">
          <label
            style={{
              fontWeight: 400,
              fontSize: "12px",
              marginBottom: "8px",
              color:
                focusedFields.repeatPassword && password !== repeatPassword
                  ? "red"
                  : "#0f172a",
            }}
          >
            Ulangi Password
          </label>
          <input
            type={`${isShowRepeat ? "text" : "password"}`}
            style={{
              border:
                focusedFields.repeatPassword && password !== repeatPassword
                  ? "1px solid red"
                  : "1px solid #ddd",
              borderRadius: "4px",
              padding: "8px",
              fontSize: "12px",
              color:
                focusedFields.repeatPassword && password !== repeatPassword
                  ? "red"
                  : "#64748b",
              paddingRight: "30px",
            }}
            placeholder="Password"
            value={repeatPassword}
            onChange={(e) => setRepeatPassword(e.target.value)}
            onFocus={() =>
              setFocusedFields({ ...focusedFields, repeatPassword: true })
            }
          />
          {/* Icon */}
          <div
            style={{
              position: "absolute",
              top: "50%",
              right: "10px",
              transform: "translateY(-50%)",
              cursor: "pointer",
              color:
                focusedFields.repeatPassword && password !== repeatPassword
                  ? "red"
                  : "#0f172a",
            }}
            onClick={() => setIsShowRepat(!isShowRepeat)}
          >
            {isShowRepeat ? <Eye /> : <EyeOff />}
          </div>
          <div
            className="flex items-center gap-1 mt-1"
            style={{
              color:
                focusedFields.repeatPassword && password !== repeatPassword
                  ? "red"
                  : "#0f172a",
            }}
          >
            <span>
              <AlertTriangle size={12} />
            </span>
            <label
              style={{
                fontWeight: 400,
                fontSize: "12px",
              }}
            >
              Password harus sama
            </label>
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

"use client";
import { Loading, Message } from "@/app/components";
import { isValidEmail, isValidLength, isValidPassword } from "@/app/utils";
import axios from "axios";
import { AlertTriangle, Eye, EyeOff } from "lucide-react";
import { useRouter } from "next/navigation";
import { SyntheticEvent, useState } from "react";

export function DaptarForm() {
  const router = useRouter();
  const [email, setEmail] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [repeatPassword, setRepeatPassword] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isShow, setIsShow] = useState<boolean>(false);
  const [focusedFields, setFocusedFields] = useState<{
    username: boolean;
    password: boolean;
    repeatPassword: boolean;
    email: boolean;
  }>({
    username: false,
    password: false,
    repeatPassword: false,
    email: false,
  });
  const [isShowRepeat, setIsShowRepat] = useState<boolean>(false);
  const [message, setMessage] = useState<string | undefined>(undefined);
  const [typeMsg, setTypeMsg] = useState<"success" | "warning" | "error">(
    "error"
  );

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    try {
      const res = await axios.post(`/api/daptar`, {
        username: username,
        email: email,
        password: password,
        photo: null,
      });
      console.log({ res });
      // router.push("/masuk");
    } catch (error) {
      console.log(error);
    }
  };

  const disabledEmpty =
    password === "" ||
    repeatPassword === "" ||
    password !== repeatPassword ||
    username === "" ||
    email === "";

  const disabledValidation =
    !isValidLength(username, 5) ||
    !isValidEmail(email) ||
    !isValidPassword(password);

  return (
    <div style={{ padding: "0px 40px", minWidth: "30vw" }}>
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
              color:
                focusedFields.username && !isValidLength(username, 5)
                  ? "red"
                  : "#0f172a",
            }}
          >
            Username
          </label>
          <input
            type="text"
            style={{
              border:
                focusedFields.username && !isValidLength(username, 5)
                  ? "1px solid red"
                  : "1px solid #ddd",
              borderRadius: "4px",
              padding: "8px",
              fontSize: "12px",
              color:
                focusedFields.username && !isValidLength(username, 5)
                  ? "red"
                  : "#64748b",
            }}
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            onFocus={() =>
              setFocusedFields({ ...focusedFields, username: true })
            }
          />
          {focusedFields.username && !isValidLength(username, 5) && (
            <div
              className="flex items-center gap-1 mt-1"
              style={{ color: "red" }}
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
                Username harus lebih dari 8 karakter
              </label>
            </div>
          )}
        </div>

        {/* Email  */}
        <div className="flex flex-col w-full">
          <label
            style={{
              fontWeight: 400,
              fontSize: "12px",
              marginBottom: "8px",
              color:
                focusedFields.email && !isValidEmail(email) ? "red" : "#0f172a",
            }}
          >
            Email
          </label>
          <input
            type="email"
            style={{
              border:
                focusedFields.email && !isValidEmail(email)
                  ? "1px solid red"
                  : "1px solid #ddd",
              borderRadius: "4px",
              padding: "8px",
              fontSize: "12px",
              color:
                focusedFields.email && !isValidEmail(email) ? "red" : "#64748b",
            }}
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onFocus={() => setFocusedFields({ ...focusedFields, email: true })}
          />
          {focusedFields.email && !isValidEmail(email) && (
            <div
              className="flex items-center gap-1 mt-1"
              style={{ color: "red" }}
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
                Format email salah
              </label>
            </div>
          )}
        </div>

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
          disabled={disabledEmpty || disabledValidation}
        >
          Daptar
        </button>
      </form>
    </div>
  );
}

"use client";
import { isValidLength } from "@/app/utils";
import axios from "axios";
import { AlertTriangle } from "lucide-react";
import { useRouter } from "next/navigation";
import {
  Dispatch,
  SetStateAction,
  SyntheticEvent,
  useEffect,
  useState,
} from "react";
import Cookies from "js-cookie";
import { Status } from "@prisma/client";

export function FormStatus({
  setIsLoading,
  setMessage,
  setTypeMsg,
  id,
  rowData,
}: {
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  setMessage: Dispatch<SetStateAction<string | undefined>>;
  setTypeMsg: Dispatch<SetStateAction<"success" | "warning" | "error">>;
  id?: number;
  rowData?: Status;
}) {
  const router = useRouter();
  const [name, setName] = useState<string>("");
  const [photo, setPhoto] = useState<File | null>(null);
  const [focusedFields, setFocusedFields] = useState<{
    name: boolean;
  }>({
    name: false,
  });

  const userCookies = Cookies.get("user");
  const user = userCookies && JSON.parse(userCookies);

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    try {
      setIsLoading(true);

      const res = id
        ? await axios.patch(`/api/status/${id}`, {
            name: name,
            icon: null,
          })
        : await axios.post(`/api/status`, {
            name: name,
            icon: null,
            id: user?.id,
          });
      if (res?.status === 201) {
        setMessage(
          id ? "Pengubahan status berhasil" : "Penambahan status berhasil"
        );
        setTypeMsg("success");

        setTimeout(() => {
          router.push("/pengaturan/status");
        }, 1000);
      }

      if (res?.status === 500) {
        setMessage(id ? "Pengubahan status gagal" : "Penambahan status gagal");
        setTypeMsg("warning");
      }
    } catch (error) {
      console.log(error);
      setMessage("Internal Server Error");
      setTypeMsg("error");
    } finally {
      setIsLoading(false);
    }
  };

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      setPhoto(files[0]);
    }
  };

  useEffect(() => {
    if (id && rowData) {
      setName(rowData?.name);
    }
  }, [rowData, id]);

  return (
    <form onSubmit={handleSubmit} className="w-[50%]">
      <div className="flex flex-col mb-4">
        <label
          style={{
            fontWeight: 400,
            fontSize: "16px",
            marginBottom: "8px",
            color:
              focusedFields.name && !isValidLength(name, 0) ? "red" : "#0f172a",
          }}
        >
          Nama
        </label>
        <input
          type="text"
          style={{
            border:
              focusedFields.name && !isValidLength(name, 0)
                ? "1px solid red"
                : "1px solid #ddd",
            borderRadius: "4px",
            padding: "8px",
            fontSize: "12px",
            flex: 1,
            color:
              focusedFields.name && !isValidLength(name, 0) ? "red" : "#64748b",
          }}
          placeholder="Nama Status"
          value={name}
          onChange={(e) => setName(e.target.value)}
          onFocus={() => setFocusedFields({ ...focusedFields, name: true })}
        />
        {focusedFields.name && !isValidLength(name, 0) && (
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
              Nama harus diisi
            </label>
          </div>
        )}
      </div>
      {/* Input file untuk memilih foto */}
      <div className="flex flex-col mb-4">
        <label
          style={{ fontWeight: 400, fontSize: "16px", marginBottom: "8px" }}
        >
          Foto
        </label>
        <input type="file" accept="image/*" onChange={handlePhotoChange} />
      </div>
      <button
        type="submit"
        className="bg-[#0079ba] hover:bg-sky-700 p-2 rounded-md text-white w-full disabled:cursor-not-allowed"
        disabled={name.length < 1}
      >
        {id ? "Edit" : "Tambah"}
      </button>
    </form>
  );
}

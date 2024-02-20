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
import { Category, SubCategory } from "@prisma/client";
import Select from "react-select";

export function FormSubKategori({
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
  rowData?: SubCategory;
}) {
  const router = useRouter();
  const [name, setName] = useState<string>("");
  const [photo, setPhoto] = useState<File | null>(null);
  const [focusedFields, setFocusedFields] = useState<{
    name: boolean;
  }>({
    name: false,
  });
  const [selectedValue, setSelectedValue] = useState<number | undefined>(
    undefined
  );

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    try {
      setIsLoading(true);

      const res = id
        ? await axios.patch(`/api/sub-kategori/${id}`, {
            name: name,
            icon: null,
            isDeleted: false,
            categoryId: Number(selectedValue),
          })
        : await axios.post(`/api/sub-kategori`, {
            name: name,
            icon: null,
            categoryId: Number(selectedValue),
          });
      if (res?.status === 201) {
        setMessage(
          id
            ? "Pengubahan sub kategori berhasil"
            : "Penambahan sub kategori berhasil"
        );
        setTypeMsg("success");
        setTimeout(() => {
          router.push("/pengaturan/sub-kategori");
        }, 1000);
      }

      if (res?.status === 500) {
        setMessage(
          id ? "Pengubahan sub kategori gagal" : "Penambahan sub kategori gagal"
        );
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
      setSelectedValue(rowData?.categoryId);
    }
  }, [rowData, id]);

  const userCookies = Cookies.get("user");
  const user = userCookies && JSON.parse(userCookies);
  const [dataKategori, setDataKategori] = useState<Category[]>([]);

  const getKategori = async () => {
    try {
      if (user?.id) {
        const res = await axios.get("/api/kategori", {
          params: { id: user.id },
        });
        if (res.data) {
          setDataKategori(res.data);
        }
      }
    } catch (error) {
      console.error("Error fetching kategori:", error);
    }
  };

  useEffect(() => {
    getKategori();
  }, []);

  const options =
    dataKategori &&
    dataKategori?.map((item) => ({ value: item.id, label: item.name }));

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
          placeholder="Nama Kategori"
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
      <div className="flex flex-col mb-4">
        <label
          style={{
            fontWeight: 400,
            fontSize: "16px",
            marginBottom: "8px",
          }}
        >
          Kategori
        </label>
        <Select
          className="text-[14px]"
          isClearable
          isSearchable
          value={options.filter((item) => item.value === selectedValue)[0]}
          onChange={(selected) => {
            setSelectedValue(selected?.value);
          }}
          options={options}
        />
      </div>

      {/* Input file untuk memilih foto */}
      <div className="flex flex-col mb-8">
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

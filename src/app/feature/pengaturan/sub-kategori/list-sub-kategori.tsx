"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { Loading } from "@/app/components";
import Image from "next/image";
import Link from "next/link";
import { NotebookPen, Plus, Trash2 } from "lucide-react";
import { Category, SubCategory } from "@prisma/client";
import Select from "react-select";

export function ListSubKategory() {
  const [dataSubKategori, setDataSubKategori] = useState<
    SubCategory[] | undefined
  >(undefined);
  const userCookies = Cookies.get("user");
  const user = userCookies && JSON.parse(userCookies);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [selectedValue, setSelectedValue] = useState<number | undefined>(
    undefined
  );

  const getSubKategori = async () => {
    try {
      setIsLoading(true);
      if (selectedValue) {
        const res = await axios.get(`/api/sub-kategori/`, {
          params: { id: selectedValue },
        });
        if (res.data) {
          setDataSubKategori(res.data);
        }
      }
    } catch (error) {
      console.error("Error fetching sub category", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getSubKategori();
  }, [selectedValue]);

  const handleDelete = async (id: number) => {
    try {
      setIsLoading(true);
      const res = await axios.patch(`/api/sub-kategori/${id}`, {
        isDeleted: true,
      });

      if (res) {
        getSubKategori();
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const [dataKategori, setDataKategori] = useState<Category[] | undefined>(
    undefined
  );
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

  const defaultValue = dataKategori && {
    value: dataKategori[0].id,
    label: dataKategori[0].name,
  };

  return (
    <div className="mb-10">
      <Select
        className="text-[14px] mb-4"
        isClearable
        isSearchable
        onChange={(selected) => {
          setSelectedValue(selected?.value);
        }}
        options={options}
      />

      {isLoading ? (
        <Loading />
      ) : (
        <div>
          {dataSubKategori === undefined || dataSubKategori.length === 0 ? (
            <div className="grid grid-cols-12 gap-4">
              {/* Tambahkan kolom untuk ikon plus */}
              <Link
                href="sub-kategori/add"
                className="col-span-1 flex items-center justify-center gap-y-2"
              >
                <button className="border-2 p-2 w-full border-sky-500 text-sky-500 hover:bg-sky-500 hover:border-sky-500 hover:text-white rounded-md">
                  <div className="flex items-center justify-center gap-1">
                    <span>
                      <Plus size={20} />
                    </span>
                  </div>
                </button>
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-12 gap-4 flex items-center">
              {dataSubKategori?.map((item, idx) => (
                <div
                  className="shadow-md p-4 col-span-3 flex items-center gap-y-2"
                  key={idx}
                >
                  <div className="flex items-center flex-1 gap-2">
                    <Image
                      src={`${item.icon ?? "/logo.png"}`}
                      alt="Icon kategori Int"
                      width={30}
                      height={30}
                    />
                    <h5>{item?.name ?? "N/A"}</h5>
                  </div>
                  <div className="flex items-center gap-2">
                    <Link href={`/pengaturan/sub-kategori/edit/${item?.id}`}>
                      <span className="text-emerald-700">
                        <NotebookPen />
                      </span>
                    </Link>
                    <span
                      className="text-rose-700 hover:cursor-pointer"
                      onClick={() => handleDelete(item.id)}
                    >
                      <Trash2 />
                    </span>
                  </div>
                </div>
              ))}
              {/* Tambahkan kolom untuk ikon plus setelah data */}

              <Link
                href="sub-kategori/add"
                className={`col-span-1 flex items-center justify-center gap-y-2`}
              >
                <button className="border-2 p-2 w-full  border-sky-500 text-sky-500 hover:bg-sky-500 hover:border-sky-500 hover:text-white rounded-md">
                  <div className="flex items-center justify-center">
                    <span>
                      <Plus size={20} />
                    </span>
                  </div>
                </button>
              </Link>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

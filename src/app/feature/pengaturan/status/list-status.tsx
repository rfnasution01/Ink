"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { Loading } from "@/app/components";
import Image from "next/image";
import { Status } from "@prisma/client";
import Link from "next/link";
import { NotebookPen, Plus, Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";

export function ListStatus() {
  const navigate = useRouter();
  const [dataStatus, setDataStatus] = useState<Status[] | undefined>(undefined);
  const userCookies = Cookies.get("user");
  const user = userCookies && JSON.parse(userCookies);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const getStatus = async () => {
      try {
        setIsLoading(true);
        if (user?.id) {
          const res = await axios.get("/api/status", {
            params: { id: user.id },
          });
          if (res.data) {
            setDataStatus(res.data);
          }
        }
      } catch (error) {
        console.error("Error fetching status:", error);
      } finally {
        setIsLoading(false);
      }
    };
    getStatus();
  }, []);

  const handleDelete = async (id: number) => {
    try {
      setIsLoading(true);
      const res = await axios.patch(`/api/status/${id}`, {
        isDeleted: true,
      });
      if (res) {
        console.log(res);
        navigate.refresh();
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="mb-10">
      {isLoading ? (
        <Loading />
      ) : (
        <div>
          {dataStatus === undefined || dataStatus.length === 0 ? (
            <div className="grid grid-cols-12 gap-4">
              {/* Tambahkan kolom untuk ikon plus */}
              <Link
                href="status/add"
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
              {dataStatus?.map((item, idx) => (
                <div
                  className="shadow-md p-4 col-span-3 flex items-center gap-y-2"
                  key={idx}
                >
                  <div className="flex items-center flex-1 gap-2">
                    <Image
                      src={`${item.icon ?? "/logo.png"}`}
                      alt="Icon Status Int"
                      width={30}
                      height={30}
                    />
                    <h5>{item?.name ?? "N/A"}</h5>
                  </div>
                  <div className="flex items-center gap-2">
                    <Link href={`/pengaturan/status/edit/${item?.id}`}>
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
                href="status/add"
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

"use client";
import { Loading, Message } from "@/app/components";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import axios from "axios";
import { Category, SubCategory } from "@prisma/client";
import { FormSubKategori } from "@/app/feature/pengaturan/sub-kategori/form-sub-kategori";

export default function Edit() {
  const [message, setMessage] = useState<string | undefined>(undefined);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [typeMsg, setTypeMsg] = useState<"success" | "warning" | "error">(
    "error"
  );
  const pathname = usePathname();
  const routeSegments = pathname.split("/");
  const id = Number(routeSegments[4]);
  const [data, setData] = useState<SubCategory | undefined>(undefined);

  useEffect(() => {
    const getSubKategori = async () => {
      try {
        setIsLoading(true);
        if (id) {
          const res = await axios.get(`/api/sub-kategori/${id}`);

          if (res.data) {
            setData(res.data);
          }
        }
      } catch (error) {
        console.error("Error fetching sub-kategori", error);
      } finally {
        setIsLoading(false);
      }
    };
    getSubKategori();
  }, []);

  return (
    <div className="">
      {isLoading && <Loading />}
      {message && <Message message={message} type={typeMsg} />}

      <FormSubKategori
        setIsLoading={setIsLoading}
        setMessage={setMessage}
        setTypeMsg={setTypeMsg}
        id={id}
        rowData={data && data}
      />
    </div>
  );
}

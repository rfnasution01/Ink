"use client";
import { Loading, Message } from "@/app/components";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import axios from "axios";
import { Category } from "@prisma/client";
import { FormKategori } from "@/app/feature";

export default function Edit() {
  const [message, setMessage] = useState<string | undefined>(undefined);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [typeMsg, setTypeMsg] = useState<"success" | "warning" | "error">(
    "error"
  );
  const pathname = usePathname();
  const routeSegments = pathname.split("/");
  const id = Number(routeSegments[4]);
  const [data, setData] = useState<Category | undefined>(undefined);

  useEffect(() => {
    const getKategori = async () => {
      try {
        setIsLoading(true);
        if (id) {
          const res = await axios.get(`/api/kategori/${id}`);

          if (res.data) {
            setData(res.data);
          }
        }
      } catch (error) {
        console.error("Error fetching kategori:", error);
      } finally {
        setIsLoading(false);
      }
    };
    getKategori();
  }, []);

  return (
    <div className="">
      {isLoading && <Loading />}
      {message && <Message message={message} type={typeMsg} />}

      <FormKategori
        setIsLoading={setIsLoading}
        setMessage={setMessage}
        setTypeMsg={setTypeMsg}
        id={id}
        rowData={data && data}
      />
    </div>
  );
}

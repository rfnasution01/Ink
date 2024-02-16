"use client";
import { Loading, Message } from "@/app/components";
import { FormStatus } from "@/app/feature/pengaturan";
import { useEffect, useState } from "react";
import { Status } from "@prisma/client";
import { useRouter } from "next/router";
import { usePathname } from "next/navigation";
import axios from "axios";

export default function Edit() {
  const [message, setMessage] = useState<string | undefined>(undefined);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [typeMsg, setTypeMsg] = useState<"success" | "warning" | "error">(
    "error"
  );
  const pathname = usePathname();
  const routeSegments = pathname.split("/");
  const id = Number(routeSegments[4]);
  const [data, setData] = useState<Status | undefined>(undefined);

  useEffect(() => {
    const getStatus = async () => {
      try {
        setIsLoading(true);
        if (id) {
          const res = await axios.get(`/api/status/${id}`);
          if (res.data) {
            setData(res.data);
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

  return (
    <div className="">
      {isLoading && <Loading />}
      {message && <Message message={message} type={typeMsg} />}

      <FormStatus
        setIsLoading={setIsLoading}
        setMessage={setMessage}
        setTypeMsg={setTypeMsg}
        id={id}
        rowData={data && data}
      />
    </div>
  );
}

"use client";
import { Loading, Message } from "@/app/components";
import { FormSubKategori } from "@/app/feature/pengaturan/sub-kategori/form-sub-kategori";
import { useState } from "react";

export default function Add() {
  const [message, setMessage] = useState<string | undefined>(undefined);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [typeMsg, setTypeMsg] = useState<"success" | "warning" | "error">(
    "error"
  );

  return (
    <div className="">
      {isLoading && <Loading />}
      {message && <Message message={message} type={typeMsg} />}

      <FormSubKategori
        setIsLoading={setIsLoading}
        setMessage={setMessage}
        setTypeMsg={setTypeMsg}
      />
    </div>
  );
}

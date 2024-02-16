"use client";
import { AsetTo } from "@prisma/client";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import axios from "axios";

export function ListAset() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [dataAset, setDataAset] = useState<AsetTo[]>([]);
  const userCookies = Cookies.get("user");
  const user = userCookies && JSON.parse(userCookies);

  useEffect(() => {
    const getAset = async () => {
      try {
        setIsLoading(true);
        if (user?.id) {
          const res = await axios.get("/api/aset", {
            params: { id: user.id },
          });
          if (res.data) {
            setDataAset(res.data);
          }
        }
      } catch (error) {
        console.error("Error fetching aset", error);
      } finally {
        setIsLoading(false);
      }
    };
    getAset();
  }, []);

  return <h1>Test</h1>;
}

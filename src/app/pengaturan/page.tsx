"use client";
import React from "react";
import Cookies from "js-cookie";

export default function Pengaturan() {
  const user = {
    id: 1,
    username: "admin",
    email: "admin@gmail.com",
  };

  const handleSubmit = () => {
    Cookies.set("token", JSON.stringify(user));
  };

  return (
    <div className="">
      <div onClick={() => handleSubmit()} className="bg-red-300">
        Set Cookie
      </div>
    </div>
  );
}

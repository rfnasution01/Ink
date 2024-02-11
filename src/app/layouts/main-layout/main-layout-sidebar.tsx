"use client";
import { useState } from "react";
import { MainLayoutListMenu, MainLayoutTitle } from ".";

export function MainLayoutSidebar() {
  const [isShow, setIsShow] = useState<boolean>(true);
  return (
    <div className={`flex flex-col p-10 gap-y-8 ${isShow && "min-w-[15vw]"}`}>
      <MainLayoutTitle isShow={isShow} setIsShow={setIsShow} />
      <MainLayoutListMenu isShow={isShow} />
    </div>
  );
}

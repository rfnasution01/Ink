"use client";

import axios from "axios";
import { useRouter } from "next/navigation";

export function UpdateStatus({ id }: { id: number }) {
  const navigate = useRouter();

  const handleUpdate = async (id: number) => {
    const red = await axios.patch(`/api/status/${id}`);
    navigate.refresh();
    console.log({ red });
  };
  return (
    <div className="bg-blue-200">
      <button type="submit" onClick={() => handleUpdate(id)}>
        Update
      </button>
    </div>
  );
}

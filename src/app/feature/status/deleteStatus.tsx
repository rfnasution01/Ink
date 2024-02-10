"use client";

import axios from "axios";
import { useRouter } from "next/navigation";

export function DeleteStatus({ id }: { id: number }) {
  const navigate = useRouter();

  const handleDelete = async (id: number) => {
    const red = await axios.delete(`/api/status/${id}`);
    navigate.refresh();
    console.log({ red });
  };
  return (
    <div className="bg-blue-200">
      <button type="submit" onClick={() => handleDelete(id)}>
        Delete
      </button>
    </div>
  );
}

"use client";

import { SyntheticEvent, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

export function AddStatus() {
  const [name, setName] = useState<string>("");
  const navigate = useRouter();

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    const res = await axios.post(`/api/status`, {
      name: name,
      icon: null,
    });
    setName("");
    console.log(res.data);
    navigate.refresh();
  };
  return (
    <div>
      <form className="flex flex-col p-5 gap-3" onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

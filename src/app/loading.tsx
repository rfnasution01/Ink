import { Radiation } from "lucide-react";

export default function Loading() {
  return (
    <div className="flex justify-center items-center my-5 gap-3">
      <Radiation size={27} className="animate-spin duration-300" />
      <h5 className="animate-pulse text-sm duration-300">Loading</h5>
    </div>
  );
}

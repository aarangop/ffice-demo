"use client";

import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const getHeaderTitle = () => {
    if (pathname.includes("operator")) {
      return "Operator";
    } else {
      return "NMOC";
    }
  };
  return (
    <div className="sticky bg-slate-800 top-0 left-0 w-full min-h-16 flex flex-row items-center p-2">
      <h1 className="text-slate-300">{getHeaderTitle()}</h1>
    </div>
  );
}

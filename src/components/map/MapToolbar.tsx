import { FaMinusCircle, FaPlusCircle } from "react-icons/fa";

export default function MapToolbar() {
  return (
    <div className="flex flex-row">
      <div className=" bg-slate-800 rounded-l-md p-1 w-8 h-8 cursor-pointer border-rborder-r-primary-700 hover:bg-slate-600">
        <FaPlusCircle className="text-slate-200 h-full w-full"></FaPlusCircle>
      </div>
      <div className=" bg-slate-800 rounded-r-md p-1 w-8 h-8 cursor-pointer border-l border-l-primary-700 hover:bg-slate-600">
        <FaMinusCircle className="text-slate-200 h-full w-full"></FaMinusCircle>
      </div>
    </div>
  );
}

import React from "react";
import { AiOutlineCheck } from "react-icons/ai";

interface ReserverPRops {
  setActiveSection: (section: string) => void
}

const ReserveNumber: React.FC<ReserverPRops> = ({setActiveSection}) => {
  const formattedDate = new Date().toLocaleString("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });

  const handleClickReserve = () => {
    setActiveSection("checkout")
  }

  return (
    <footer className="w-full h-auto mt-3 mb-5 p-4 flex justify-center sm:justify-start flex-wrap sm:flex-nowrap space-x-5 items-center bg-white border rounded-lg cursor-default">
      <button onClick={handleClickReserve} className="mx-auto sm:mx-0 px-4 py-2 text-[13px] font-light border border-[#6a0dad] text-[#6a0dad] rounded-lg  hover:bg-violet-800 hover:text-white transition-colors duration-200">
        Reserve this Number
      </button>
      <div className="flex justify-center items-center mx-auto sm:mx-0 space-x-2 text-gray-500">
        <span className="p-1 bg-slate-200 rounded-full">
          <AiOutlineCheck className="text-[#6a0dad] text-[10px] font-extrabold" />
        </span>
        <span className="text-[13px] flex mt-2 sm:mt-0 mx-auto">
          Saved as of {formattedDate}
        </span>
      </div>
    </footer>
  );
};

export default ReserveNumber;

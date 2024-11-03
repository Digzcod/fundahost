import React from "react";
import { AiOutlinePhone } from "react-icons/ai";
import { BsFileEarmarkCheck } from "react-icons/bs";
import { MdVerifiedUser } from "react-icons/md";

interface PropsGetNum {
  activeSection: string, 
  handleActiveSection: (section: string) => void
}

const GetNavNumber: React.FC<PropsGetNum> = ({ activeSection, handleActiveSection }) => {
  // const handleClick = (section: string) => {
  //   setActiveSection(section);
  // };

  return (
    <nav className="w-full h-auto p-2 flex justify-center space-x-[2rem] items-center bg-white border rounded-xl cursor-default">
      <section className="grid justify-items-center space-y-1" onClick={() => handleActiveSection("reserve")}>
        <div
          className={`content-center py-2 px-2 rounded-full border ${
            activeSection === "reserve" ? "bg-violet-500 text-white" : "border-gray-200 text-slate-500"
          }`}
        >
          <AiOutlinePhone className="text-lg" />
        </div>
        <span className="text-[11px] text-violet-500">Reserve Number</span>
      </section>

      <section className="grid justify-items-center space-y-1" onClick={() => handleActiveSection("checkout")}>
        <div
          className={`content-center py-2 px-2 rounded-full border ${
            activeSection === "checkout" ? "bg-violet-500 text-white" : "border-gray-200 text-slate-500"
          }`}
        >
          <BsFileEarmarkCheck className="text-lg" />
        </div>
        <span className="text-[11px] text-violet-500">Check Out</span>
      </section>

      <section className="grid justify-items-center space-y-1" onClick={() => handleActiveSection("verifications")}>
        <div
          className={`content-center py-2 px-2 rounded-full border ${
            activeSection === "verifications" ? "bg-violet-500 text-white" : "border-gray-200 text-slate-500"
          }`}
        >
          <MdVerifiedUser className="text-lg" />
        </div>
        <span className="text-[11px] text-violet-500">Account Verification</span>
      </section>
    </nav>
  );
};

export default GetNavNumber;

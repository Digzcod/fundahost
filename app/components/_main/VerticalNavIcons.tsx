import React from "react";
import { BsGrid1X2, BsCardChecklist, BsBookmarkDash } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa6";
import { FaRegMessage } from "react-icons/fa6";
import {
  AiOutlineShop,
  AiOutlineMessage,
  AiOutlineSetting,
} from "react-icons/ai";

interface VerticalProps {
  section: string;
  handleClick: (id: string) => void;
}

export const VerticalNavIcons: React.FC<VerticalProps> = ({
  section,
  handleClick,
}) => {
  const iconClasses = "text-[16px] text-gray-400";

  return (
    <article className="mx-1 grid h-[100vh] w-[4.5rem]">
      <section className="p-3 px-4 space-y-[1.5rem] mt-[1.5rem]">
        <div onClick={() => handleClick("dashboard")}
          className={`flex items-center justify-center w-10 h-6 cursor-pointer ${
            section === "dashboard"
              ? "text-blue-500 bg bg-blue-500 py-4 border-blue-500 bg-opacity-10 border-l-4"
              : "text-gray-400"
          }`}>
          <BsGrid1X2 className={iconClasses} />
        </div>
        <div onClick={() => handleClick("profile")}
          className={`flex items-center justify-center w-10 h-6 cursor-pointer ${
            section === "profile"
              ? "text-blue-500 bg bg-blue-500 py-4 border-blue-500 bg-opacity-10 border-l-4"
              : "text-gray-400"
          }`}>
          <FaRegUser className={iconClasses} />
        </div>
        <div onClick={() => handleClick("checklist")}
          className={`flex items-center justify-center w-10 h-6 cursor-pointer ${
            section === "checklist"
              ? "text-blue-500 bg bg-blue-500 py-4 border-blue-500 bg-opacity-10 border-l-4"
              : "text-gray-400"
          }`}>
          <BsCardChecklist className={iconClasses} />
        </div>
        <div onClick={() => handleClick("booking")}
          className={`flex items-center justify-center w-10 h-6 cursor-pointer ${
            section === "booking"
              ? "text-blue-500 bg bg-blue-500 py-4 border-blue-500 bg-opacity-10 border-l-4"
              : "text-gray-400"
          }`}>
          <BsBookmarkDash className={iconClasses} />
        </div>
        <div onClick={() => handleClick("chat")}
          className={`flex items-center justify-center w-10 h-6 cursor-pointer ${
            section === "chat"
              ? "text-blue-500 bg bg-blue-500 py-4 border-blue-500 bg-opacity-10 border-l-4"
              : "text-gray-400"
          }`}>
          <FaRegMessage className={iconClasses} />
        </div>
        <div
        
        onClick={() => handleClick("shop")}
        className={`flex items-center justify-center w-10 h-6 cursor-pointer ${
          section === "shop"
            ? "text-blue-500 bg bg-blue-500 py-4 border-blue-500 bg-opacity-10 border-l-4"
            : "text-gray-400"
        }`}>
          <AiOutlineShop className="text-[18px] text-gray-400" />
        </div>
      </section>
      <section className="mx-1 p-3 px-4 space-y-[1.5rem]">
        <div
          onClick={() => handleClick("phone")}
          className={`flex items-center justify-center w-10 h-6 cursor-pointer ${
            section === "phone"
              ? "text-blue-500 bg bg-blue-500 py-4 border-blue-500 bg-opacity-10 border-l-4"
              : "text-gray-400"
          }`}
        >
          <AiOutlineSetting className="text-[18px]" />
        </div>
        <div onClick={() => handleClick("message")}
          className={`flex items-center justify-center w-10 h-6 cursor-pointer ${
            section === "message"
              ? "text-blue-500 bg bg-blue-500 py-4 border-blue-500 bg-opacity-10 border-l-4"
              : "text-gray-400"
          }`}>
          <AiOutlineMessage className="text-[18px] text-gray-400" />
        </div>
      </section>
    </article>
  );
};

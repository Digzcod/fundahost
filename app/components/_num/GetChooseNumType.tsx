import React from "react";
import { AiOutlineCopy, AiOutlineSync } from "react-icons/ai";
import { LiaPhoneSolid } from "react-icons/lia";

interface GetChooseNumProps {
  selectedOption: string;
  handleOptionChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const GetChooseNumType: React.FC<GetChooseNumProps> = ({
  selectedOption,
  handleOptionChange,
}) => {
  return (
    <>
      <div className="flex items-center space-x-2 text-xl font-semibold text-gray-800 mb-3">
        <section className="p-2 sm:p-3 bg-violet-500 bg-opacity-10 rounded-md">
          <LiaPhoneSolid className="text-gray-500" />
        </section>
        <span className="text-[16px] md:text-[18px] font-semibold">Phone Number</span>
      </div>

      <div className="w-full flex items-center gap-x-5 my-2">
        <label className="flex items-center space-x-1">
          <input
            type="radio"
            name="option"
            value="Generate"
            className="form-radio text-purple-500"
            checked={selectedOption === "Generate"}
            onChange={handleOptionChange}
          />
          <span className="text-[14px]">Generate</span>
        </label>
        <label className="flex items-center space-x-1">
          <input
            type="radio"
            name="option"
            className="form-radio text-purple-500"
            value="Choose my own"
            checked={selectedOption === "Choose my own"}
            onChange={handleOptionChange}
          />
          <span className="text-[14px]">Choose my own</span>
        </label>
      </div>

      <div className="w-full mt-2 flex justify-between items-center space-x-2">
        <section>
          <select className="text-[13px] border border-gray-300 rounded-lg p-2 text-gray-700 focus:outline-none ">
            <option className="bg-white text-gray-700">United Kingdom</option>
            <option className="bg-white text-gray-700">Poland</option>
            <option className="bg-white text-gray-700">United States</option>
            <option className="bg-white text-gray-700">Canada</option>
            {/* Add more countries here */}
          </select>
        </section>
        <section className="flex ml-auto space-x-3">
          <button className="bg-gray-100 border rounded-full p-1">
            <AiOutlineCopy className="text-[14px] text-gray-400" />
          </button>
          <button className="bg-gray-100 border rounded-full p-1">
            <AiOutlineSync className="text-[14px] text-gray-400" />
          </button>
        </section>
      </div>
    </>
  );
};

export default GetChooseNumType;

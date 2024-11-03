"use client"
import React from "react";
import useGenerateNum from "@/app/hooks/useGenerateNum";
import { LiaPhoneSolid } from "react-icons/lia";

// Function to mask the phone number for display only (e.g., "**** **** 2345")
const maskNumberForDisplay = (number: string): string => {
  return number.replace(/\d(?=\d{4})/g, "*");
};

const ChooseOwnNum: React.FC = () => {
  const { phoneNumbers, selectedPhoneNumber, handlePhoneNumberSelect } =
    useGenerateNum();

  return (
    <div className="border rounded-lg w-full mt-4 px-5 py-[2rem] sm:py-[2.5rem] md:py-[4rem]">
      <div className="text-center mt-[1rem] mb-[2rem]">
        <h3 className="text-[14px] font-normal">
          Introducing your phone number:
        </h3>
        <section className="flex justify-center my-2 items-center space-x-3">
          <div className="p-3 bg-violet-500 rounded-[100%]">
            <LiaPhoneSolid className="text-white text-[16px]" />
          </div>
          <p className="text-xl sm:text-2xl  md:text-3xl font-bold text-purple-600 mt-2">
         
          {maskNumberForDisplay(selectedPhoneNumber)}
          </p>
        </section>
      </div>

      <div className="grid justify-center grid-cols-1 sm:grid-cols-3 gap-4 text-[13px] sm:text-[14px]">
        {phoneNumbers.map((number) => (
          <label key={number} className="flex items-center">
          
            <input
              type="radio"
              name="phoneNumber"
              value={number}
              checked={selectedPhoneNumber === number}
              onChange={() => handlePhoneNumberSelect(number)}
              className="mr-2"
            />
            {maskNumberForDisplay(number)}
          </label>
        ))}
      </div>
    </div>
  );
};

export default ChooseOwnNum;

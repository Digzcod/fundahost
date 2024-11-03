import React from "react";
import useGenerateNum from "@/app/hooks/useGenerateNum";
import { LiaPhoneSolid } from "react-icons/lia";

const GeneratedNum = () => {
  const { generatedNumber } = useGenerateNum();
  return (
    <div className="mt-4 p-4 border  rounded-lg flex flex-col items-center py-[5rem] md:py-[7rem] mb-[2rem] md:mb-[4rem]">
      <div className="text-center mt-[1rem] mb-[2rem]">
        <h3 className="text-[14px] font-normal">
          Introducing your phone number:
        </h3>
        <section className="flex items-center space-x-3">
          <div className="p-3 bg-violet-500 rounded-[100%]">
            <LiaPhoneSolid className="text-white text-[16px]" />
          </div>
          <p className="text-xl sm:text-2xl  md:text-3xl font-bold text-purple-600 mt-2">
            {generatedNumber}
          </p>
        </section>
      </div>
    </div>
  );
};

export default GeneratedNum;

import React, { useState } from "react";
import PlanAnnual from "./PlanAnnual";
import PlanMonth from "./PlanMonth";
import { BsCalendar3 } from "react-icons/bs";

const PlanCards = () => {
  const [planPay, setPlanPay] = useState<string>("monthly");

  const handlePlanPay = (pay: string) => {
    setPlanPay(pay);
  };

  return (
    <div className="w-full h-[60vh] bg-white rounded-lg shadow-lg border border-gray-200 py-3 px-4">
      <section className="flex items-center space-x-3 py-2">
        <div className="p-2 sm:p-3 bg-violet-500 bg-opacity-10 rounded-md">
          <BsCalendar3 className="text-gray-500" />
        </div>
        <span className="text-[16px] md:text-[18px] font-semibold">Plan</span>
      </section>
      {/* Toggle for Monthly and Annual Plans */}
      <div className="mb-6 border max-w-max py-1 px-2 rounded-s-full rounded-e-full space-x-2">
        <button
          onClick={() => handlePlanPay("monthly")}
          className={` font-medium rounded-lg ${
            planPay === "monthly"
              ? "text-white bg-purple-800 border py-1 px-4 rounded-s-full rounded-e-full"
              : "text-gray-700"
          }`}
        >
          Monthly
        </button>
        <button
          onClick={() => handlePlanPay("annual")}
          className={`font-medium rounded-lg ${
            planPay === "annual"
              ? "text-white bg-purple-800 border py-1 px-4 rounded-s-full rounded-e-full"
              : "text-gray-500 "
          }`}
        >
          Annual
        </button>
      </div>

      {planPay === "monthly" && <PlanMonth />}
      {planPay === "annual" && <PlanAnnual />}
    </div>
  );
};

export default PlanCards;

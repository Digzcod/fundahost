const PlanMonth = () => {
  return (
    <div className="w-full rounded-lg  border border-gray-200 ">
      {/* Plan Details */}
      <div className="p-4 mb-6">
        <div className="grid border-b-[1px] mb-2">
          <span className=" text-[14px] md:text-[15px] text-gray-900">
            Monthly Charges
          </span>
          <section className="flex justify-between py-1">
            <span className="text-gray-400 text-[14px] md:text-[15px]">
              Monthly Charges
            </span>
            <span className="text-gray-400 text-[15px]">£24</span>
          </section>
        </div>
        <div className="grid border-b-[1px] mb-2">
          <span className=" text-[14px] md:text-[15px] text-gray-900">
            Total
          </span>
          <section className="flex justify-between py-1">
            <span className="text-gray-400 text-[14px] md:text-[15px]">
              Billed after 14 days trial
            </span>
            <span className="text-gray-400 text-[14px] md:text-[15px]">
              £24
            </span>
          </section>
        </div>
        <div className="flex justify-between text-gray-800 font-semibold mt-[1rem]">
          <span>Total due today</span>
          <span>£24</span>
        </div>
      </div>

      <section className="p-3">
        {/* Information Text */}
        <p className="text-gray-500 text-[13px] mb-4">
          * Feel confident exploring our service with a generous 14-day trial
          period, where you have the flexibility to cancel at any time without
          incurring charges. We’ll send you a convenient reminder email as you
          near the end of this period.
        </p>
        <p className="text-gray-500 text-xs mb-6">
          Please remember: The amount shown is an estimate. Actual taxes and
          fees will be calculated at the time of billing.
        </p>
      </section>
    </div>
  );
};

export default PlanMonth;

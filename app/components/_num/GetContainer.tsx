"use client";
import { useState } from "react";
import NumCardsLayout from "./NumCardsLayout";
import GetNavNumber from "./GetNavNumber";
import ReserveNumber from "./ReserveNumber";

const GetContainer = () => {
  const [activeSection, setActiveSection] = useState("reserve");

  return (
    <section className="w-full p-[.7rem] h-auto rounded-2xl bg-violet-500 bg-opacity-10">
      <GetNavNumber
        activeSection={activeSection}
        handleActiveSection={setActiveSection}
      />
      <NumCardsLayout activeSection={activeSection} setActiveSection={setActiveSection}/>
      <ReserveNumber setActiveSection={setActiveSection} />
    </section>
  );
};

export default GetContainer;

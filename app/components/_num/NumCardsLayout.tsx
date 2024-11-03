import React from "react";
import ChooseNumberContainer from "./ChooseNumContainer";
import PlanCards from "./PlanCards";
import CheckoutNumForm from "./CheckoutNumForm";
import AccountVerified from "./AccountVerified";

interface PropsCard {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const NumCardsLayout: React.FC<PropsCard> = ({
  activeSection,
  setActiveSection,
}) => {
  return (
    <div className="flex flex-wrap lg:flex-nowrap justify-center pt-4 gap-3">
      <>
        {activeSection === "reserve" && <ChooseNumberContainer />}
        {activeSection === "checkout" && <CheckoutNumForm handleActiveSection={setActiveSection} />}
        {activeSection === "verifications" && <AccountVerified/>}
      </>
      <PlanCards />
    </div>
  );
};

export default NumCardsLayout;

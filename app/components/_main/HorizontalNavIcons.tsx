import React from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import GetContainer from "../_num/GetContainer";
import NoContent from "../_content/NoContent";

interface HorizontalProps {
  showContent: string;
}

const HorizontalNavIcons: React.FC<HorizontalProps> = ({ showContent }) => {
  return (
    <div className="w-full">
      <section className="h-[4rem] w-full lg:max-w-max flex items-center px-3">
        <div className="p-2 border rounded-full">
          <AiOutlineArrowLeft className="text-[15px] text-gray-500" />
        </div>
        <span className="ml-2 text-[16px] sm:text-[18px] font-bold text-violet-950">
          Buy Phone Number
        </span>
      </section>
      {showContent === "dashboard" && (
        <NoContent
          header={"Dashboard Page"}
          child={"We working this Dashboard page please bear with us"}
        />
      )}
      {showContent === "profile" && (
        <NoContent
          header={"Profile Page"}
          child={"We working this Profile page please bear with us"}
        />
      )}
      {showContent === "checklist" && (
        <NoContent
          header={"Checklist Page"}
          child={"We working this Checklist page please bear with us"}
        />
      )}
      {showContent === "booking" && (
        <NoContent
          header={"Booking Page"}
          child={"We working this Booking page please bear with us"}
        />
      )}
      {showContent === "chat" && (
        <NoContent
          header={"Chat Page"}
          child={"We working this Chat page please bear with us"}
        />
      )}
      {showContent === "shop" && (
        <NoContent
          header={"Shop Page"}
          child={"We working this Shop page please bear with us"}
        />
      )}
    
      
      {showContent === "phone" && <GetContainer />}
      {showContent === "message" && (
          <NoContent
          header={"Message"}
          child={"We working this Message page please bear with us"}
          />
        )}


      
     
    </div>
  );
};

export default HorizontalNavIcons;


import useSectionPart from "@/app/hooks/useSectionPart";
import {
  VerticalNavIcons,
} from "../_main/VerticalNavIcons";
import HorizontalNavIcons from "./HorizontalNavIcons";

const BuyPhoneNum = () => {
  const {part, handleClickPart} = useSectionPart()
  return (
    <div className="flex">
      <VerticalNavIcons section={part} handleClick={handleClickPart} />
      <HorizontalNavIcons showContent={part} />
    </div>
  );
};


export default BuyPhoneNum;

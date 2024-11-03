import React from "react";
import ChooseOwnNum from "./ChooseOwnNum";
import GeneratedNum from "./GeneratedNum";

interface GetNumTypePros {
  selectedOption: string
}

const GetNumType: React.FC<GetNumTypePros> = ({selectedOption}) => {
  return (
    <>{selectedOption === "Generate" ? <GeneratedNum /> : <ChooseOwnNum />}</>
  );
};

export default GetNumType;

import GetNumType from "./GetNumType";
import useGenerateNum from "@/app/hooks/useGenerateNum";
import GetChooseNumType from "./GetChooseNumType";

function ChooseNumberType() {
  const { selectedOption, handleOptionChange } = useGenerateNum();

  return (
    <section className="w-full h-full sm:h-[60vh]  bg-white rounded-lg shadow-lg border border-gray-200 p-3">
      <GetChooseNumType
        selectedOption={selectedOption}
        handleOptionChange={handleOptionChange}
      />
      <GetNumType selectedOption={selectedOption} />
    </section>
  );
}

export default ChooseNumberType;

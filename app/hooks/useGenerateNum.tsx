
import React, { useState } from "react";

const phoneNumbers = [
    "020 1234 2345",
    "020 2345 6789",
    "020 3456 7891",
    "020 1235 3252",
    "020 5678 9101",
    "020 6789 1012",
    "020 1238 2421",
    "020 8910 1234",
    "020 9101 2345"
];

const useGenerateNum = () => {
  const [generatedNumber, setGeneratedNumber] = useState("020 9999 9999");
  const [selectedCountry, setSelectedCountry] = useState("United Kingdom");
  const [selectedOption, setSelectedOption] = useState("Generate");
  const [selectedPhoneNumber, setSelectedPhoneNumber] = useState("020 9999 9999");

  const handleCountryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCountry(event.target.value);
  };

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
  };

  const handlePhoneNumberSelect = (phoneNumber: string) => {
    setSelectedPhoneNumber(phoneNumber);
  };


  return {
    phoneNumbers,
    generatedNumber,
    selectedCountry,
    selectedOption,
    selectedPhoneNumber,
    setGeneratedNumber,
    setSelectedCountry,
    setSelectedOption,
    handleCountryChange,
    handleOptionChange,
    handlePhoneNumberSelect,
  };
};

export default useGenerateNum;

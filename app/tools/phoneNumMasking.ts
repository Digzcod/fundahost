// Function to mask the phone number
export const maskNumber = (number: string) => {
    return number.replace(/\d(?=\d{4})/g, "*");
  };
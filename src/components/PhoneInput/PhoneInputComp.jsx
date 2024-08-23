import React from "react";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";

const PhoneInputComp = ({ value, onChange }) => {
  return (
    <PhoneInput
      defaultCountry="us"
      value={value}
      onChange={onChange}
      placeholder="Phone number"
      className="placeholder:text-lg"
    />
  );
};

export default PhoneInputComp;

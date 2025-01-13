import React from "react";
import Select from "react-select";
import { colourOptions } from "../../utils/DashboardUtils";
import RegisterServices from "../../viewModel/Register/RegisterServices";

const Register = () => {
  const { isSelected, setIsSelected } = RegisterServices();
  return (
    <div className="global_text">
      <div className="w-[300px] ">
        <Select placeholder="Select Country / Region" options={colourOptions} />
      </div>
      <div className="mt-3">
        <h1 className="font-semibold">Register Using:</h1>
      </div>
      <div className="mt-3 flex gap-10">
        <label htmlFor="" className="flex gap-1">
          <input type="radio" />
          Phone
        </label>
        <label htmlFor="" className="flex gap-1">
          <input type="radio" />
          Email
        </label>
      </div>
    </div>
  );
};

export default Register;

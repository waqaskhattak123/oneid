import React from "react";

const ShareBalance = () => {
  return (
    <div className="global_text">
      <div>
        <div>
          <h1 className="text-[23px]">
            Current Balance: <span className="text-[#1aafd0] font-semibold">0.92</span> PKR
          </h1>
        </div>
        <div>
          <label htmlFor="" className="font-semibold">
            Enter Receiver Mobile No (With Country Code)/ email address / oneid
          </label>
          <input
            type="text"
            placeholder="Receiver username"
            className="border-b-[1px]  focus:border-b-[#1aafd0] focus:outline-none p-1 mt-2 w-full"
          />
        </div>
        <div className="mt-4">
          <label htmlFor="" className="font-semibold">Transfer Amount</label>
          <input
            type="number"
            placeholder="Sharing Amount"
            className="border-b-[1px]  focus:border-b-[#1aafd0] focus:outline-none p-1 mt-2 w-full"
          />
        </div>
      </div>
      <div className="mt-4 text-center">
        <button className="bg-[#1aafd0]  text-white rounded-md w-[100px]">Submit</button>
      </div>
    </div>
  );
};

export default ShareBalance;

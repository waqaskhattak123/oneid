import React from "react";

const DebitCardRecharge = () => {
  return (
    <div className="w-ful">
      <div>
        <h1 className="text-[#1aafd0] font-semibold text-[15px]">
          Pay with Debit/Credit/ATM Card
        </h1>
      </div>

      {/* =========== */}
      <div className=" md:w-[400px]">
        <div className="mt-7 mb-7">
          <div>
            <img
              src="	https://oneid.veevotech.com/frontend_assets/images/credit-card-banner.png"
              alt=""
              className="w-[400px]"
            />
          </div>
          <div className="mt-3 flex flex-col gap-1">
            <label htmlFor="">Enter Amount</label>
            <input
              type="number"
              placeholder="Enter amount"
              className="border-b-[1px] border-gray-400  focus:border-[#1aafd0] focus:outline-none p-1  w-full"
            />
          </div>
          <div className="mt-3 flex flex-col gap-1">
            <label htmlFor="">Mobile No</label>
            <input
              type="number"
              placeholder="Mobile No"
              className="border-b-[1px] border-gray-400  focus:border-[#1aafd0] focus:outline-none p-1  w-full"
            />
          </div>
          <div className="mt-3 flex flex-col items-center gap-1">
            <button className="bg-[#1aafd0] text-white flex justify-center rounded-md w-[100px]">
              Proceed
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DebitCardRecharge;

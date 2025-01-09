import React from "react";
import { DashboardIcons } from "../../assets/Icons";

const PayInvoice = ({ onClose }) => {
  return (
    <div className="global_text">
      <div className="w-full flex flex-col justify-center items-center">
        <h1>
          <DashboardIcons.creditCard className="w-[90px] h-[90px] text-[#007bff]" />
        </h1>
        <h1 className="font-bold text-[20px]">Choose Your Payment Method</h1>
      </div>
      {/* ======== */}
      <div className="flex flex-col  md:flex-row gap-4 justify-center">
        <div className="text-center  p-4 rounded-md w-[400px]">
          <h1 className="font-semibold text-[20px]">One-Wallet Payment</h1>
          <p>
            Are you sure you want to pay the amount from your Veevo One-Wallet?
          </p>
          <div className="mt-2 w-full">
            <button className="bg-[#1aafd0] p-1 text-white  rounded-md w-[170px] ">
              Pay with One-Wallet
            </button>
          </div>

          <p className="mt-4 text-[12px]">
            To add money into your One-Wallet {""}
            <span className="text-[#007bff] cursor-pointer">click here</span>
          </p>
        </div>
        {/* ======= */}
        <div className="border-[1px] border-[#beb8b8]"></div>

        {/* ========== */}
        <div className="text-center  p-4 rounded-md w-[400px]">
          <h1 className="font-semibold text-[20px]">Card Payment / Stripe</h1>
          <p>
            Use your card or Stripe supported methods to complete your payment.
          </p>
          <div className="mt-2 w-full">
            <button className="bg-[#1aafd0] p-1 text-white  rounded-md w-[170px] ">
              Pay with Card/Stripe
            </button>
          </div>
        </div>
        {/* ============ */}
      </div>
      <div className="w-full flex justify-center items-center mt-5">
        <button
          className="bg-[#ecf0f1] p-2 w-[100px] rounded-md font-semibold hover:bg-[#c8cbcc] duration-1000"
          onClick={onClose}
        >
          CLOSE
        </button>
      </div>

      {/* ========= */}
    </div>
  );
};

export default PayInvoice;

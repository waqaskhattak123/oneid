import React from "react";
import { RechargeBalanceImages } from "../../assets/Images";
import RechargeBalanceServices from "../../viewModel/RechargeBalanceVM/RechargeBalanceServices";
import EasypisaRecharge from "./EasypisaRecharge";
import JazzCashRecharge from "./JazzCashRecharge";
import DirectDeposit from "./DirectDeposit";
import DebitCardRecharge from "./DebitCardRecharge";

const RechargeBalance = () => {
  const { activeNavigation, setActiveNavigation } = RechargeBalanceServices();
  return (
    <div className="global_text">
      <div className="flex flex-col md:flex-row gap-3 justify-center flex-wrap">
        {RechargeBalanceImages.map((data, index) => (
          <div
            key={index}
            className={`${
              index === activeNavigation
                ? "scale-110 ease-in duration-200 filter grayscale-0 transition-transform  border-[#79b6c4]"
                : "filter grayscale hover:grayscale-0"
            } box-border border-[1px] py-4 px-9 rounded-md flex flex-col justify-between items-center gap-1 cursor-pointer hover:shadow-md transition-shadow hover:scale-110 ease-in duration-200`}
            onClick={() => setActiveNavigation(index)}
          >
            <img
              src={data.src}
              alt={data.title}
              className={`h-auto w-[70px] transition-transform duration-300 ${
                index === activeNavigation
                  ? "grayscale-0"
                  : "grayscale hover:grayscale-0"
              }`}
            />
            <label
              htmlFor=""
              className="w-[90px] cursor-pointer text-center truncate"
            >
              {data.title}
            </label>
          </div>
        ))}
      </div>

      {/* ============== */}
      <div className=" flex flex-row justify-center  mt-10">
        {activeNavigation === 0 ? (
          <EasypisaRecharge />
        ) : activeNavigation === 1 ? (
          <JazzCashRecharge />
        ) : activeNavigation === 2 ? (
          <DirectDeposit />
        ) : activeNavigation === 3 ? (
          <DebitCardRecharge />
        ) : (
          ""
        )}
      </div>
      {/* ================== */}
    </div>
  );
};

export default RechargeBalance;

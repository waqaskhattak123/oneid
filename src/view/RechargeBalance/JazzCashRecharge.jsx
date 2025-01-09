import React from "react";
import { jazzcashUtils } from "../../utils/InvoicesUtils";
import RechargeBalanceServices from "../../viewModel/RechargeBalanceVM/RechargeBalanceServices";

const JazzCashRecharge = () => {
  const { jazzcashWallet, setJazzCashWallet } = RechargeBalanceServices();
  return (
    <div className="">
      <div>
        <h1 className="text-[#1aafd0] font-semibold text-[15px]">
          Pay with JazzCash using:
        </h1>
      </div>
      <div className="w-full md:w-[500px]">
        <div className="flex flex-col md:flex-row flex-wrap mt-3 cursor-pointer ">
          {jazzcashUtils.map((data, index) => {
            return (
              <div
                key={index}
                className={`flex gap-2 ${
                  index === jazzcashWallet
                    ? "border-[1px] p-2 border-[#1aafd0] rounded-md text-[#1aafd0]"
                    : "p-2"
                }`}
                onClick={() => setJazzCashWallet(index)}
              >
                <img src={data.url} alt="" />
                <p>{data.title}</p>
              </div>
            );
          })}
        </div>
        {jazzcashWallet === 0 ? (
          <div className="mb-7 ">
            <div>
              <h1 className="text-[#1aafd0] text-[15px] mt-5">
                Please Provide Jazacash Account Mobile no
              </h1>
            </div>
            <div className="mt-3 flex flex-col gap-1">
              <label htmlFor="">Mobile No</label>
              <input
                type="number"
                placeholder="Mobile No"
                className="border-b-[1px] border-gray-400  focus:border-[#1aafd0] focus:outline-none p-1  w-full"
              />
            </div>
            <div className="mt-3 flex flex-col gap-1">
              <label htmlFor="">Select Network</label>
              <select
                placeholder="Mobile No"
                className="border-b-[1px] border-gray-400  focus:border-[#1aafd0] focus:outline-none p-1  w-full"
              >
                <option value="ufone">Ufone</option>
                <option value="ufone">Ufone</option>
                <option value="ufone">Ufone</option>
              </select>
            </div>
            <div className="mt-3 flex flex-col gap-1">
              <label htmlFor="">TopUp Amount</label>
              <input
                type="number"
                placeholder="TopUp Amount"
                className="border-b-[1px] border-gray-400  focus:border-[#1aafd0] focus:outline-none p-1  w-full"
              />
            </div>
            <div className="mt-3 flex flex-col items-center gap-1">
              <button className="bg-[#1aafd0] text-white flex justify-center rounded-md w-[100px]">
                Submit
              </button>
            </div>
          </div>
        ) : jazzcashWallet === 1 ? (
          <div className="mb-7">
            <div>
              <h1 className="text-[#1aafd0] text-[15px] mt-5">
                Please Provide JazzCash Account Mobile no
              </h1>
            </div>
            <div className="mt-3 flex flex-col gap-1">
              <label htmlFor="">Mobile No</label>
              <input
                type="number"
                placeholder="Mobile No"
                className="border-b-[1px] border-gray-400  focus:border-[#1aafd0] focus:outline-none p-1  w-full"
              />
            </div>
            <div className="mt-3 flex flex-col gap-1">
              <label htmlFor="">Select Network</label>
              <select
                placeholder="Mobile No"
                className="border-b-[1px] border-gray-400  focus:border-[#1aafd0] focus:outline-none p-1  w-full"
              >
                <option value="ufone">Ufone</option>
                <option value="ufone">Ufone</option>
                <option value="ufone">Ufone</option>
              </select>
            </div>
            <div className="mt-3 flex flex-col gap-1">
              <label htmlFor="">Easypisa Wallet No</label>
              <input
                type="number"
                placeholder="Easypisa Wallet No"
                className="border-b-[1px] border-gray-400  focus:border-[#1aafd0] focus:outline-none p-1  w-full"
              />
            </div>
            <div className="mt-3 flex flex-col gap-1">
              <label htmlFor="">TopUp Amount</label>
              <input
                type="number"
                placeholder="TopUp Amount"
                className="border-b-[1px] border-gray-400  focus:border-[#1aafd0] focus:outline-none p-1  w-full"
              />
            </div>
            <div className="mt-3 flex flex-col gap-1">
              <label htmlFor="">Account Holder CNIC</label>
              <input
                type="number"
                placeholder="Account Holder CNIC"
                className="border-b-[1px] border-gray-400  focus:border-[#1aafd0] focus:outline-none p-1  w-full"
              />
            </div>
            <div className="mt-3 flex flex-col items-center gap-1">
              <button className="bg-[#1aafd0] text-white flex justify-center rounded-md w-[100px]">
                Submit
              </button>
            </div>
          </div>
        ) : jazzcashWallet === 2 ? (
          <div className="mt-7 mb-7 w-[400px]">
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
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default JazzCashRecharge;

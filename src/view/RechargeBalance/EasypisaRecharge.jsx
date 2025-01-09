import React from "react";
import { easypisaWalletUtils } from "../../utils/InvoicesUtils";
import RechargeBalanceServices from "../../viewModel/RechargeBalanceVM/RechargeBalanceServices";

const EasypisaRecharge = () => {
  const { easypisaWallet, setEasypisaWallet } = RechargeBalanceServices();
  return (
    <div className="w-ful">
      <div>
        <h1 className="text-[#1aafd0] font-semibold text-[15px]">
          Pay with EasyPaisa using:
        </h1>
      </div>

      {/* =========== */}
      <div className=" md:w-[500px]">
        <div className="flex gap-8 mt-3 cursor-pointer">
          {easypisaWalletUtils.map((data, index) => {
            return (
              <div
                key={index}
                className={`flex gap-2 ${
                  index === easypisaWallet
                    ? "border-[1px] p-2 border-[#1aafd0] rounded-md text-[#1aafd0]"
                    : "p-2"
                }`}
                onClick={() => setEasypisaWallet(index)}
              >
                <img src={data.url} alt="" />
                <p>{data.title}</p>
              </div>
            );
          })}
        </div>
        {/* =========== */}
        {easypisaWallet === 0 ? (
          <div className="mb-7">
            <div>
              <h1 className="text-[#1aafd0] text-[15px] mt-5">
                Please Provide easypaisa Account Mobile no
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
        ) : easypisaWallet === 1 ? (
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

export default EasypisaRecharge;

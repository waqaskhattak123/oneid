import React from "react";
import { directDepositUtils } from "../../utils/InvoicesUtils";
import RechartBalanceServices from "../../viewModel/RechargeBalanceVM/RechargeBalanceServices";

const DirectDeposit = () => {
  const { directDeposit, setDirectDeposit } = RechartBalanceServices();
  return (
    <div className="w-ful">
      <div>
        <h1 className="text-[#1aafd0] font-semibold text-[15px]">
          Check/Direct Deposit
        </h1>
      </div>

      {/* =========== */}
      <div className=" md:w-[500px]">
        <div className="flex gap-8 mt-3 cursor-pointer">
          {directDepositUtils.map((data, index) => {
            return (
              <div
                key={index}
                className={`flex gap-2 ${
                  index === directDeposit
                    ? "border-[1px] p-2 border-[#1aafd0] rounded-md text-[#1aafd0]"
                    : "p-2"
                }`}
                onClick={() => setDirectDeposit(index)}
              >
                <img src={data.url} alt="" />
                <p>{data.title}</p>
              </div>
            );
          })}
        </div>
        {/* =========== */}
        {directDeposit === 0 ? (
          <div className="mb-7">
            <div>
              <h1 className="text-[#1aafd0] text-[15px] mt-5">
                Please Provide the below details
              </h1>
            </div>
            <div className="mt-3 flex flex-col gap-1">
              <label htmlFor="">Cheque#</label>
              <input
                type="number"
                placeholder="Cheque No"
                className="border-b-[1px] border-gray-400  focus:border-[#1aafd0] focus:outline-none p-1  w-full"
              />
            </div>
            <div className="mt-3 flex flex-col gap-1">
              <label htmlFor="">Amount</label>
              <input
                type="number"
                placeholder="Amount"
                className="border-b-[1px] border-gray-400  focus:border-[#1aafd0] focus:outline-none p-1  w-full"
              />
            </div>
            <div className="mt-3 flex flex-col gap-1">
              <label htmlFor="">Bank</label>
              <input
                type="number"
                placeholder="Issue Bank"
                className="border-b-[1px] border-gray-400  focus:border-[#1aafd0] focus:outline-none p-1  w-full"
              />
            </div>

            <div className="mt-3 flex flex-col gap-1">
              <label htmlFor="">Attach your cheque scanned copy</label>
              <input
                type="file"
                placeholder="Attach your cheque scanned copy"
                // className="border-b-[1px] border-gray-400  focus:border-[#1aafd0] focus:outline-none p-1  w-full"
              />
            </div>
            <div className="mt-3 flex flex-col items-center gap-1">
              <button className="bg-[#1aafd0] text-white flex justify-center rounded-md w-[100px]">
                Submit
              </button>
            </div>
          </div>
        ) : directDeposit === 1 ? (
          <div className="mb-7">
            <div>
              <h1 className="text-[#1aafd0] text-[15px] mt-5">
                Please Provide the below details
              </h1>
            </div>
            <div className="mt-3 flex flex-col gap-1">
              <label htmlFor="">Deposit Date</label>
              <input
                type="date"
                placeholder="Cheque No"
                className="border-b-[1px] border-gray-400  focus:border-[#1aafd0] focus:outline-none p-1  w-full"
              />
            </div>
            <div className="mt-3 flex flex-col gap-1">
              <label htmlFor="">Amount</label>
              <input
                type="number"
                placeholder="Amount"
                className="border-b-[1px] border-gray-400  focus:border-[#1aafd0] focus:outline-none p-1  w-full"
              />
            </div>
            <div className="mt-3 flex flex-col gap-1">
              <label htmlFor="">Select Bank</label>
              <select
                placeholder="Select Bank"
                className="border-b-[1px] border-gray-400  focus:border-[#1aafd0] focus:outline-none p-1  w-full"
              >
                <option value="ufone">JS Bank</option>
                <option value="ufone">Ubank</option>
                <option value="ufone">Bank Al habib</option>
              </select>
            </div>

            <div className="mt-3 flex flex-col gap-1">
              <label htmlFor="">Attach your deposit slip scanned copy</label>
              <input
                type="file"
                placeholder="Attach your cheque scanned copy"
                // className="border-b-[1px] border-gray-400  focus:border-[#1aafd0] focus:outline-none p-1  w-full"
              />
            </div>
            <div className="mt-3 flex flex-col gap-1">
              <label htmlFor="">Description</label>
              <input
                type="text"
                placeholder="Description"
                className="border-b-[1px] border-gray-400  focus:border-[#1aafd0] focus:outline-none p-1  w-full"
              />
            </div>
            <div className="mt-3 flex flex-col items-center gap-1">
              <button className="bg-[#1aafd0] text-white flex justify-center rounded-md w-[100px]">
                Submit
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

export default DirectDeposit;

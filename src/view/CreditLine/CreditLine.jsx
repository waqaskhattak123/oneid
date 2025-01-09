import React from "react";
import {
  AvailableBalance,
  CreditLineUtiils,
  payInvoiceTableData,
  rechargeCards,
} from "../../utils/CreditLineUtils";
import CreditLineServices from "../../viewModel/CreditLineViewModel/CreditLineServices";
import { Typography } from "@material-tailwind/react";

const CreditLine = () => {
  const { navigation, setNavigation } = CreditLineServices();
  return (
    <div className="global_text p-[50px]">
      {/*============= navigation============ */}
      <div className="w-full flex flex-col items-center md:flex-row  gap-[60px]">
        <h3 className="text-xl font-bold flex gap-4 items-center">
          <span className="w-[40px]">
            <img
              src="https://oneid.veevotech.com/frontend_assets/images/subscription_page.png"
              alt=""
            />
          </span>
          <span>Billing/Subscription</span>
        </h3>
        <div className="w-full flex flex-col md:flex-row md:items-center md: gap-4">
          {CreditLineUtiils.map((item, index) => {
            return (
              <h4
                className="text-lg flex gap-4 items-center mt-3 cursor-pointer"
                key={index}
                onClick={() => {
                  setNavigation(index);
                }}
              >
                <span>
                  <img src={item.url} alt="" className="w-[20px]" />
                </span>
                <span
                  className={`border-b-[2px] ${
                    index === navigation
                      ? " border-b-[#2db388] duration-1000"
                      : ""
                  }`}
                >
                  {item.title}
                </span>
              </h4>
            );
          })}
        </div>
      </div>
      {/* ==================== navigation============ */}
      {/* =========== tables ================== */}
      {navigation === 0 ? (
        <>
          <div className="w-full mt-10 bg-[#f8f9fa] bg-[!important] p-[20px] rounded-md">
            <div className="w-full flex flex-row justify-between items-center">
              <div>
                <h2 className="text-[#2db388] text-[16px] font-semibold">
                  Available Balance
                </h2>
              </div>
              <div className="w-[330px] border-[1px] border-[#FFB000] text-[#FFB000] text-[11px] p-1 text-justify rounded-md">
                <span>
                  If there are multiple balances of the same type, the system
                  will first use the one that expires first.
                </span>
              </div>
            </div>

            <div className="relative flex flex-col w-full h-full text-gray-700 bg-white shadow-md rounded-lg bg-clip-border  mt-7 overflow-x-auto">
              <table className="w-full text-justify table-auto min-w-max">
                <thead>
                  <tr className="font-semibold">
                    {AvailableBalance.map((head, index) => {
                      return (
                        <th
                          className="p-4 border-b border-slate-300 bg-slate-50"
                          key={index}
                        >
                          <p className="block text-sm  leading-none text-slate-500">
                            {head}
                          </p>
                        </th>
                      );
                    })}
                  </tr>
                </thead>
                <tbody>
                  {payInvoiceTableData.map((data, index) => {
                    return (
                      <tr
                        className="text-justify hover:bg-slate-50"
                        key={index}
                      >
                        <td className="p-4 border-b border-slate-200">
                          <p className="block text-sm text-slate-800">
                            {data.orderNo}
                          </p>
                        </td>
                        <td className="p-4 border-b border-slate-200">
                          <p className="block text-sm text-slate-800">
                            {data.productName}
                          </p>
                        </td>

                        <td className="p-4 border-b border-slate-200">
                          <p className="block text-sm text-slate-800">
                            {data.gDate}
                          </p>
                        </td>

                        <td className="p-4 border-b border-slate-200">
                          <p className="block text-sm text-slate-800">
                            {data.amount}
                          </p>
                        </td>
                        <td className="p-4 border-b border-slate-200">
                          <p className="block text-sm text-slate-800 text-blue-400 cursor-pointer">
                            {data.viewInvoice}
                          </p>
                        </td>
                        <td className="p-4 border-b border-slate-200">
                          <p className="block text-sm text-slate-800 text-blue-400 cursor-pointer">
                            {data.viewInvoice}
                          </p>
                        </td>
                        <td className="p-4 border-b border-slate-200">
                          <p className="block text-sm text-slate-800 text-blue-400 cursor-pointer">
                            {data.viewInvoice}
                          </p>
                        </td>
                        <td className="p-4 border-b border-slate-200">
                          <p className="block text-sm text-slate-800 text-blue-400 cursor-pointer">
                            {data.viewInvoice}
                          </p>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>

          {/* =========== tables ends ================== */}
        </>
      ) : navigation === 1 ? (
        <div className="flex flex-col items-center md:flex-row gap-5 justify-center mt-10">
          {rechargeCards.map((item, index) => {
            return (
              <div
                className=" flex bg-[#F8F9FA] relative flex-col justify-center items-center text-justify border-[1px] border-[#1AAFD0] p-4 w-[250px] h-[250px] rounded-md"
                key={index}
              >
                <div className="">
                  <div className="top-[-25px] right-[90px] absolute p-1 bg-[#F8F9FA] rounded-full border-[1px] border-[#1AAFD0]">
                    <div className=" border-[1px] p-2  border-[#1AAFD0] rounded-full ">
                      <img
                        src="https://elephant.veevotech.com/files/4d6a67794f54633d/9_8200ccfda3789eb.png"
                        alt=""
                        className=" "
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-10 flex flex-col gap-2 h-[90px] justify-center items-baseline">
                  <h1
                    className={`${
                      index === 0 ? "mt-5" : ""
                    } font-semibold justify-center items-center flex gap-2`}
                  >
                    <span>{item.title}</span>
                    <span className="text-[#1AAFD0]">{item.currency}</span>
                    <span>{item.balanceTitle}</span>
                  </h1>
                  <span>{item.description}</span>{" "}
                </div>

                <div className="flex justify-center mt-6">
                  <button
                    className="bg-[#1aafd0] p-1 text-white  rounded-md w-[130px] "
                    onClick={() => setNavigation(2)}
                  >
                    Recharge
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      ) : navigation === 2 ? (
        <div className="flex justify-center items-center mt-5">
          <div>
            <h1 className="text-[#1aafd0] text-[20px] font-semibold">
              Open Limit
            </h1>
            <Typography
              variant="small"
              color="gray"
              className="mt-2 flex items-center gap-1 text-[15px] font-normal text-gray-800"
            >
              Recharge Amount/Quantity
            </Typography>
            <div className="flex flex-col gap-4  md:items-center">
              <div className="w-96 mt-2">
                <input
                  type="number"
                  inputMode="numeric"
                  label="Enter Amount"
                  className="w-full focus:outline-gray-400  bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-lg  block p-2 outline-gray-60"
                />
              </div>
              <div className="mt-2 w-full flex justify-end">
                <button className="bg-[#1aafd0] p-1 text-white  rounded-md w-[170px] ">
                  Recharge
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default CreditLine;

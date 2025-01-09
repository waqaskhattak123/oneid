import React from "react";
import DatePicker from "react-datepicker";
import { DashboardIcons } from "../../assets/Icons";

const ViewTrxDashboard = ({
  keyPerformance,
  startDate,
  setStartDate,
  quickStatement,
  quickStatementData,
}) => {
  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between bg-[rgb(45,179,136)] text-white p-3 rounded-md">
        <div className="flex flex-row gap-3 items-center">
          <h1 className="text-[30px] font-semibold pl-3">0.92</h1>
          <div className="flex flex-row gap-3 items-baseline justify-end mt-7">
            <p className="text-[20px]">PKR</p>
            <p className="font-semibold">Available Balance</p>
          </div>
        </div>
        <div className="flex mt-7 md:mt-0 gap-3 justify-center items-center">
          <div className="flex flex-col md:flex-row gap-2 items-center">
            <button className="p-1 bg-white rounded-xl text-gray-500 w-[123px]">
              View History
            </button>
            <button className="p-1 bg-white rounded-xl text-gray-500 w-[123px]">
              Share Balance
            </button>
            <button className="p-1 bg-white rounded-xl text-gray-500 w-[123px]">
              Add Money
            </button>
          </div>
        </div>
      </div>
      {/* ================= */}
      <div className="bg-[#153947] text-white p-4 rounded-md mt-5 ">
        <div className="text-center md:text-start">
          <h1 className="text-[16px] ">Key performance indicators</h1>
        </div>
        <div className="mt-3 flex flex-col text-center md:flex-row justify-between">
          {" "}
          {keyPerformance.map((data, index) => {
            return (
              <div key={index}>
                <div>
                  <h1 className="text-[30px]">
                    {data.amount}{" "}
                    <span className="text-[16px]">{data.currency}</span>
                  </h1>
                  <h1 className="text-[rgb(45,179,136)] font-semibold text-[16px]">
                    {data.credit}
                  </h1>
                  <h1>{data.includes}</h1>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* ================= */}
      {/* =========== tables ================== */}

      <div className="w-full mt-10 bg-[#f8f9fa] bg-[!important] p-[20px] rounded-md">
        <div className="w-full flex flex-col gap-5 md:gap-0 md:flex-row justify-between items-center">
          <div>
            <h2 className="text-[#2db388] text-[16px] font-semibold">
              Quick Statements
            </h2>
          </div>
          <div>
            <DatePicker
              showIcon
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              className="w-full border border-gray-300 rounded-md p-1"
            />
          </div>
        </div>

        <div className="relative flex flex-col w-full h-full text-gray-700 bg-white shadow-md rounded-lg bg-clip-border  mt-7 overflow-x-auto">
          <table className="w-full text-justify table-auto min-w-max">
            <thead>
              <tr className="font-semibold">
                {quickStatement.map((head, index) => {
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
              {quickStatementData.map((data, index) => {
                return (
                  <tr className="text-justify hover:bg-slate-50" key={index}>
                    <td className="p-4 border-b border-slate-200">
                      <p className="block text-sm text-slate-800">
                        {data.purposeTitle}
                      </p>
                    </td>
                    <td className="p-4 border-b border-slate-200">
                      <p className="block text-sm text-slate-800">
                        {data.date}
                      </p>
                    </td>
                    <td className="p-4 border-b border-slate-200">
                      <p className="block text-sm text-slate-800">
                        {data.amount}
                      </p>
                    </td>
                    <td className="p-4 border-b border-slate-200 flex items-center">
                      <p className="block text-sm text-slate-800">
                        <span className="flex items-center gap-1">
                          <p>
                            {data.inOut === "In" ? (
                              <DashboardIcons.inArrow className="text-[16px] text-[rgb(45,179,136)]" />
                            ) : (
                              <DashboardIcons.outArrow className="text-[16px] text-red-500" />
                            )}
                          </p>
                          <p>{data.inOut}</p>
                        </span>
                      </p>
                    </td>
                    <td className="p-4 border-b border-slate-200">
                      <p className="block text-sm text-slate-800">
                        {data.balance}
                      </p>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div className="w-full flex justify-center mt-4 mb-4">
            <button className="p-1 bg-[#1aafd0] rounded-xl  w-[123px] text-white">Loadmore</button>
          </div>
        </div>
      </div>

      {/* =========== tables ends ================== */}
    </div>
  );
};

export default ViewTrxDashboard;

import React from "react";
import { viewHistory, viewHistoryData } from "../../utils/InvoicesUtils";

const ViewHistory = () => {
  return (
    <div className="global_text">
      {/* =========== tables ================== */}
      <div className="w-fullbg-[#f8f9fa] bg-[!important] p-[20px] rounded-md">
        <div className="relative flex flex-col w-full h-full text-gray-700 bg-white shadow-md rounded-lg bg-clip-border overflow-x-auto">
          <table className="w-full text-justify table-auto min-w-max">
            <thead>
              <tr className="font-semibold">
                {viewHistory.map((head, index) => {
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
              {viewHistoryData.map((data, index) => {
                return (
                  <tr className="text-justify hover:bg-slate-50" key={index}>
                    <td className="p-4 border-b border-slate-200">
                      <p className="block text-sm text-slate-800">
                        {data.description}
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

                    <td className="p-4 border-b border-slate-200">
                      <p className="text-green-600 font-semibold block text-sm text-slate-800">
                        {data.status}
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
    </div>
  );
};

export default ViewHistory;

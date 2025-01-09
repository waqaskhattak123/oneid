import React from "react";
import {
  MySubscriptionTableData,
  MySubscriptionTableHeads,
} from "../../utils/InvoicesUtils";

const ViewIndividuualInoice = () => {
  return (
    <div className="global_text">
      {/* =========== tables ================== */}

      <div className="w-full bg-[#f8f9fa] bg-[!important] p-[20px] rounded-md">
        <div className="w-full flex flex-row justify-between items-center">
          <div>
            <h2 className="text-[#2db388] text-[16px] font-semibold">
              WhatsApp Api
            </h2>
          </div>
        </div>

        <div className="relative flex flex-col w-full h-full text-gray-700 bg-white shadow-md rounded-lg bg-clip-border  mt-7 overflow-x-auto">
          <table className="w-full text-justify table-auto min-w-max">
            <thead>
              <tr className="font-semibold">
                {MySubscriptionTableHeads.map((head, index) => {
                  return (
                    <th
                      className="p-4 border-b border-slate-300 bg-slate-50"
                      key={index}
                    >
                      <p className="block text-sm  leading-none text-slate-500">
                        {head.title}
                      </p>
                    </th>
                  );
                })}
              </tr>
            </thead>
            <tbody>
              {MySubscriptionTableData.map((data, index) => {
                return (
                  <tr className="text-justify hover:bg-slate-50" key={index}>
                    <td className="p-4 border-b border-slate-200">
                      <p className="block text-sm text-slate-800">
                        {data.orderNo}
                      </p>
                    </td>
                    <td className="p-4 border-b border-slate-200">
                      <p className="block text-sm text-slate-800">
                        {data.product}
                      </p>
                    </td>
                    <td className="p-4 border-b border-slate-200">
                      <p className="block text-sm text-slate-800 cursor-pointer">
                        <span className="flex gap-1 items-center">
                          <span>{data.items}</span>
                        </span>
                      </p>
                    </td>
                    <td className="p-4 border-b border-slate-200">
                      <p className="block text-sm text-slate-800">
                        {data.gDate}
                      </p>
                    </td>
                    <td className="p-4 border-b border-slate-200">
                      <p className="block text-sm text-slate-800">
                        {data.dueDate}
                      </p>
                    </td>
                    <td className="p-4 border-b border-slate-200">
                      <p className="block text-sm text-slate-800">
                        {data.charges}
                      </p>
                    </td>
                    <td className="p-4 border-b border-slate-200">
                      <p className="block text-sm text-blue-800 font-medium cursor-pointer">
                        {data.viewInvoice}
                      </p>
                    </td>
                    <td className="p-4 border-b border-slate-200 ">
                      <span className="flex gap-2 items-center cursor-pointer">
                        <p
                          className="block text-center  text-sm text-slate-800 bg-[#2db388] p-[2px] rounded-md
                               text-white w-[37px]"
                        >
                          {data.action}
                        </p>
                      </span>
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

export default ViewIndividuualInoice;

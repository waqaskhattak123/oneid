import React from "react";

const ManageApp = ({ setManageSubscriptions }) => {
  return (
    <div className="global_text">
      <div className="flex flex-col gap-4 items-center justify-center">
        <img
          src="https://oneid.veevotech.com/frontend_assets/images/icons/smn.png?v=123"
          alt=""
          className="w-20 h-20"
        />
        <h3 className="font-bold text-[20px]">Manage App</h3>
        <p className="text-[14px] text-[#777]">
          Select a desired option to proceed
        </p>
        <div className="flex gap-4">
          <button className="bg-[#bdc3c7] p-1 w-[100px] rounded-md text-black font-semibold">
            LAUNCH
          </button>
          <button className="bg-[#bdc3c7] p-1 w-[120px] rounded-md text-black font-semibold">
            SUBSCRIPTION
          </button>
          <button
            className="bg-[#bdc3c7] p-1 w-[100px] rounded-md text-black font-semibold"
            onClick={() => setManageSubscriptions(false)}
          >
            CANCEL
          </button>
        </div>
      </div>
    </div>
  );
};

export default ManageApp;

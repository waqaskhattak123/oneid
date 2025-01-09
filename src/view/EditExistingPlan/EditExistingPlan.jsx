import React from "react";

const EditExistingPlan = () => {
  return (
    <div className="global_text">
     
      
      <div className="global_text flex flex-col items-center  justify-center gap-4">
        <div className="flex gap-4">
          <h3 className="font-semibold w-[100px]">Description :</h3>
          <span>WhatsApp Basic Plan</span>
        </div>
        <div className="flex flex-row gap-4 items-center justify-center">
          <h3 className="w-[130px]">WhatsApp Basic Plan :</h3>
          <p className="w-full flex flex-row gap-4">
            <span className="bg-gray-300 p-1 h-7 w-7 rounded-md text-xl font-semibold justify-center items-center flex cursor-pointer">
              -
            </span>
            <span className="text-green-600 text-2xl">1</span>
            <span className="bg-gray-300 p-1 h-7 w-7 rounded-md text-xl font-semibold justify-center items-center flex cursor-pointer">
              +
            </span>
          </p>
        </div>
        <div className="flex gap-7 text-white justify-center">
          <div className="bg-[#1aafd0] p-1 rounded-md w-[90px] flex justify-center items-center">
            <button>Update</button>
          </div>
          <div className="bg-[#1aafd0] p-1 rounded-md w-[170px] flex justify-center items-center">
            <button>Upgrade/Downgrade</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditExistingPlan;

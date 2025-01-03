import React from "react";
import CreateOrgServices from "../../viewModel/CreateOrgViewModal/CreateOrgServices";
import Select from "react-select";
import { colourOptions } from "../../utils/DashboardUtils";
import { Textarea } from "@material-tailwind/react";
import { DashboardIcons } from "../../assets/Icons";

const CreateOrganization = () => {
  const { isClearable, isSearchable, isDisabled, isLoading, isRtl } =
    CreateOrgServices();

  return (
    <div className="global_text mx-8">
      <p className="text-[#1aafd0] font-semibold">
        Provide below information to Register your Organization/Company on VT
        OneID
      </p>
      {/* form start here */}

      <div>
        <div>
          <div className="flex gap-4 flex-col justify-center md:justify-between md:flex-row md:p-2">
            <div className="w-full flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <span className="flex relative">
                  <img
                    src="https://oneid.veevotech.com/org_dp/files/10467752-default.jpeg"
                    alt=""
                    className="w-[100px] h-[100px] rounded-full"
                  />
                  <span className="absolute top-[70px] left-[64px] bg-white text-blue-400 p-[4px] border-[1px] border-[1px solid lightgray] rounded-full">
                    <DashboardIcons.cameraIcon />
                  </span>
                </span>
              </div>
              <div className="w-full md:w-[400px] flex flex-col ">
                <label
                  htmlFor=""
                  className="font-semibold global_text flex gap-1 items-baseline"
                >
                  <DashboardIcons.infoIcon className="cursor-pointer mb-3 " />{" "}
                  Organization Name
                </label>
                <input
                  type="text"
                  placeholder="Organization Name"
                  className="border-b-[1px] border-b-darkgray focus:outline-none focus:border-b-[#1aafd0]"
                />
              </div>
              <div className="w-full md:w-[400px] ">
                <label
                  htmlFor=""
                  className="font-semibold flex gap-1 items-baseline mb-3"
                >
                  <DashboardIcons.infoIcon className="cursor-pointer " />{" "}
                  Organization Type/Industry
                </label>
                <Select
                  className="basic-single"
                  classNamePrefix="select"
                  defaultValue={colourOptions[0]}
                  isDisabled={isDisabled}
                  isLoading={isLoading}
                  isClearable={isClearable}
                  isRtl={isRtl}
                  isSearchable={isSearchable}
                  name="color"
                  options={colourOptions}
                />
              </div>
            </div>
          </div>
          {/* ============= 1st divs ended */}
          {/* =================== */}
          <div className="flex gap-4 flex-col justify-center md:justify-between md:flex-row md:p-2">
            <div className="w-full flex flex-col ">
              <label
                htmlFor=""
                className="font-semibold flex gap-1 items-baseline mb-3"
              >
                Organization Brief Description
              </label>
              <input
                type="text"
                placeholder="Organization Brief Description"
                className="border-b-[1px] border-b-darkgray focus:outline-none focus:border-b-[#1aafd0]"
              />
            </div>
            <div className="w-[400px] flex flex-col ">
              <label
                htmlFor=""
                className="font-semibold flex gap-1 items-baseline mb-3"
              >
                Tax Number / CNIC
              </label>
              <input
                type="text"
                placeholder="NTN Number"
                className="border-b-[1px] border-b-darkgray focus:outline-none focus:border-b-[#1aafd0]"
              />
            </div>
          </div>
          {/* ================== */}

          <div className=" md:mt-5">
            <p className="text-[#1aafd0] font-semibold">Contact Information</p>
          </div>
          <div className=" flex gap-4 flex-col justify-center md:justify-start md:flex-row md:p-2 md:flex-wrap md:items-start">
            <div className="w-full md:w-[400px] ">
              <label
                htmlFor=""
                className="font-semibold flex gap-1 items-baseline mb-3"
              >
                Country / Region
              </label>
              <Select
                className="basic-single"
                classNamePrefix="select"
                placeholder="Country/Region"
                defaultValue={colourOptions[0]}
                isDisabled={isDisabled}
                isLoading={isLoading}
                isClearable={isClearable}
                isRtl={isRtl}
                isSearchable={isSearchable}
                name="color"
                options={colourOptions}
              />
            </div>
            <div className="w-full md:w-[400px]">
              <label
                htmlFor=""
                className="font-semibold flex gap-1 items-baseline mb-3"
              >
                City
              </label>
              <Select
                className="basic-single"
                classNamePrefix="select"
                label="City"
                placeholder="City"
                defaultValue={colourOptions[0]}
                isDisabled={isDisabled}
                isLoading={isLoading}
                isClearable={isClearable}
                isRtl={isRtl}
                isSearchable={isSearchable}
                name="color"
                options={colourOptions}
              />
            </div>

            <div className="w-full md:w-[400px] flex flex-col ">
              <label
                htmlFor=""
                className="font-semibold flex gap-1 items-baseline mb-3"
              >
                Office Contact
              </label>
              <input
                type="text"
                placeholder="Office Contact"
                className="border-b-[1px] md:mt-3 border-b-darkgray focus:outline-none focus:border-b-[#1aafd0]"
              />
            </div>
            <div className="w-full md:w-[400px] flex flex-col ">
              <label
                htmlFor=""
                className="font-semibold flex gap-1 items-baseline mb-3"
              >
                Office Email
              </label>
              <input
                type="text"
                placeholder="Office Email"
                className="border-b-[1px] md:mt-3 border-b-darkgray focus:outline-none focus:border-b-[#1aafd0]"
              />
            </div>
            <div className="w-full md:w-[400px] flex flex-col ">
              <label
                htmlFor=""
                className="font-semibold flex gap-1 items-baseline mb-3"
              >
                Office Address
              </label>
              <input
                type="text"
                placeholder="Office Address"
                className="border-b-[1px] md:mt-3 border-b-darkgray focus:outline-none focus:border-b-[#1aafd0]"
              />
            </div>
          </div>
          {/* ================= */}
        </div>
        <div className="flex justify-center w-full">
        <button className="text-white  bg-[#1aafd0] p-[8px] border-[1px] rounded-[10px] w-[130px] mt-2 ">Finish</button>

        </div>
      </div>
      {/* ========== */}
    </div>
  );
};

export default CreateOrganization;

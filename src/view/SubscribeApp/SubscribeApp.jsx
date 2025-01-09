import React from "react";
import Select from "react-select";
import { colourOptions } from "../../utils/DashboardUtils";
import { DashboardIcons } from "../../assets/Icons";
import CreateOrgServices from "../../viewModel/CreateOrgViewModal/CreateOrgServices";
import { CustomCenteredModal } from "../../components/CenteredModal";
import CreateOrganization from "../CreateOrganization/CreateOrganization";

const SubscribeApp = () => {
  const {
    isClearable,
    isSearchable,
    isDisabled,
    isLoading,
    openCreateOrg,
    setOpenCreateOrg,
  } = CreateOrgServices();

  return (
    <div className="h-[200px] relative">
      <div>
        <h4 className="text-center font-semibold">
          Please select for what purpose you would be using this Application?
        </h4>
        <div className="flex gap-4 justify-center mt-5 mb-3">
          <div className="cursor-pointer border-[1px] border-[#1AAFD0] p-5 rounded-md">
            <img
              src="https://oneid.veevotech.com/frontend_assets/images/personal.png"
              alt=""
            />
          </div>
          <div className="cursor-pointer border-[1px] border-[#1AAFD0] p-5 rounded-md">
            <img
              src="https://oneid.veevotech.com/frontend_assets/images/business.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center gap-4">
        <div className="flex flex-grow relative">
          <Select
            defaultValue={colourOptions[0]}
            isClearable={isClearable}
            isDisabled={isDisabled}
            isLoading={isLoading}
            isSearchable={isSearchable}
            className="basic-single absolute w-full "
            classNamePrefix="select"
            placeholder="Subscribe App"
            name="color"
            options={colourOptions}
          />
        </div>

        <div className="">
          <div>
            <button onClick={() => setOpenCreateOrg(true)}>
              <DashboardIcons.plus />
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center mt-4">
        <button
          className={` pt-1 ml-2 rounded-md font-poppins w-[150px]  duration-1000 hover:ease-in-out text-white bg-[#1aafd0] cursor-pointer border-[1px] border-[lightgray] text-center`}
        >
          Subsribe App
        </button>
      </div>

      <CustomCenteredModal
        open={openCreateOrg}
        size="xxl"
        onClose={() => setOpenCreateOrg(false)}
        title="Add Organization"
        bodyContent={<CreateOrganization />}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
        infoIcon={<DashboardIcons.infoIcon />}
      />
    </div>
  );
};

export default SubscribeApp;

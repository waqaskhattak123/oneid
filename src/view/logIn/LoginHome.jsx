import React from "react";
import { NavbarImages } from "../../assets/Images";
import { DashboardIcons } from "../../assets/Icons";
import LoginHomeServices from "../../viewModel/LoginHomeVM/LoginHomeServices";
import { loginHomeUtils } from "../../utils/InvoicesUtils";
import Login from "./Login";
import Register from "./Register";

const LoginHome = () => {
  const { activeButton, setActiveButton } = LoginHomeServices();
  return (
    <div className="global_text">
      <div className="flex w-screen h-screen flex-col md:flex-row justify-center items-center">
        {/* Left Div */}
        <div className="flex flex-col justify-center items-center w-full md:w-1/2 h-full bg-[#FAFAFA]">
          <img
            src="https://oneid.veevotech.com/frontend_assets/images/login/login-img.png"
            alt=""
            className="w-full max-w-md mx-auto"
          />
          <h1 className="text-md font-semibold mt-4 px-4">
            Single Platform to Access & Manage all VT Products & Services.
          </h1>
          <p className="text-gray-600 mt-2 px-4">
            Manage your organizations, Apps, Subscription, Billing & More with
            ease.
          </p>
          <h1 className="text-md font-semibold mt-4 px-4">
            We always love to support you!
          </h1>
          <h1 className="mt-2 flex items-center gap-2">
            <span className="flex items-center">
              <DashboardIcons.email className="w-5 h-5" />
            </span>
            <span>
              <a href="mailto:biz@veevotech.com" className="text-[#6f6f6f]">
                Biz@veevotech.com
              </a>
            </span>
          </h1>

          <h1 className="mt-2 px-4 flex gap-1 items-baseline">
            <span className="font-semibold">
              <DashboardIcons.phone className="w-4 h-4" />
            </span>
            <a href="tel:+92-304-111-8333" className="text-[#6f6f6f]">
              UAN +92-304-111 8333
            </a>
          </h1>
          <a
            className="mt-3 px-4 text-blue-500 cursor-pointer underline"
            href="https://veevotech.com/privacy_policy"
            target="_blank"
          >
            Privacy Policy
          </a>
        </div>

        {/* Right Div */}
        <div className="md:w-1/2 h-full">
          <div className="flex justify-between items-center  w-full px-20 mt-16">
            <h1 className="text-2xl"></h1>
            <img src={NavbarImages.oneIdLogo} alt="" className="w-[60px] " />
          </div>
          <div className="flex flex-col  md:justify-center md:items-start w-full px-[60px] bg-[#FFFFFF]">
            <div className="flex flex-col items-center mt-[70px]">
              <h1 className="text-xl font-bold">Sign in using OneID</h1>
              <div className="flex justify-between w-full text-center text-md mt-4 gap-4">
                <div className="flex gap-8">
                  {loginHomeUtils.map((data, index) => {
                    return (
                      <span
                        key={index}
                        className={` hover:border-b-2 hover:font-semibold hover:border-[#38B5D3] py-2 cursor-pointer w-[50px] text-center ${
                          activeButton === index
                            ? "border-b-2 font-semibold border-b-[#38B5D3] text-[#38B5D3]"
                            : "border-b-2"
                        }`}
                        onClick={() => setActiveButton(index)}
                      >
                        {data.title}
                      </span>
                    );
                  })}
                </div>
              </div>
            </div >
            <div className="mt-7">{activeButton === 0 ? <Login /> : <Register/>}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginHome;

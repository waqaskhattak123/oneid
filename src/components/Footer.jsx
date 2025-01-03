import React from "react";

const Footer = () => {
  return (
    <div className="fixed global_text bottom-0 left-0 w-full bg-[#FFFFFF] border-t-[1px] border-t-[#F2F1F0] text-center py-3 ">
      <p>
        <img
          src="https://oneid.veevotech.com/frontend_assets/images/VT_Logo.png?v=1.0"
          alt=""
          className="w-16 inline-block"
        />{" "}
        <span className="text-[16px]">
          OneID by
          <span
            className="ml-1 text-[#007bff] cursor-pointer"
            onClick={() => window.open("https://veevotech.com/", "_blank")}
          >
            Veevo Tech
          </span>
        </span>
      </p>
    </div>
  );
};

export default Footer;

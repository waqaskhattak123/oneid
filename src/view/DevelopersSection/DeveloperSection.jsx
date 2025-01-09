import React from "react";

const DeveloperSection = () => {
  return (
    <div className="global_text p-[20px] md:p-[50px] md:px-[200px]">
      <div className=" box-border h-auto w-full flex rounded-md flex-col justify-center items-center border-[1px] border-[#4cbaeb]">
        <h1 className=" text-white bg-[#4cbaeb] w-full p-1 text-[30px] rounded-t-md">
          Important Update Regarding Developer's Section
        </h1>
        <div className="p-3 text-[16px] text-justify">
          <p>Dear Valued Clients,</p>
          We hope this message finds you well. We want to inform you of an
          exciting update regarding the Developer's Section on our platform.
          Previously, the Developer's Section served for accessing various
          Subscribed APIs and hashes. However, in our ongoing efforts to
          streamline and enhance user experience, we have transitioned this
          functionality to our newly launched SMS/Voice Broadcast application,
          Spext.
          <h1 className="text-gray-800 text-[20px] mt-2">
            How to Access Your APIs and Hashes
          </h1>
          <ol>
            <li>
              1. Visit{" "}
              <span
                className="text-[#007bff] cursor-pointer"
                onClick={() =>
                  window.open("https://spext.veevotech.com/", "_blank")
                }
              >
                Spext.veevotech.com
              </span>{" "}
              and log in using your existing OneId credentials.
            </li>
            <li>
              2. Once logged in, go to the "Manage APIs" section within Spext.
              Here, you will find a comprehensive list of all the APIs you've
              subscribed to.
            </li>
          </ol>
          <h1 className="text-gray-800 text-[20px] mt-2">We're Here to Help</h1>
          <p className="mb-6">
            Should you have any questions or require assistance, please don't
            hesitate to reach out to care@veevotech.com for personalized
            assistance.
          </p>
          <p className="mb-6">
            We sincerely appreciate your understanding and cooperation as we
            strive to improve our services and provide you with a more seamless
            and efficient experience.
          </p>
          <p className="mb-6">Thank you for choosing Veevo Tech as your trusted partner.</p>
        </div>
      </div>
    </div>
  );
};

export default DeveloperSection;

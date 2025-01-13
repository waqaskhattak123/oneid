import React from "react";
import LoginServices from "../../viewModel/LoginVM/LoginServices";

const Login = () => {
  const { activeButton, setActiveButton } = LoginServices();
  return (
    <div className="global_text">
      {activeButton === 0 ? (
        <div>
          <div>
            <input
              type="text"
              placeholder="Email or Phone"
              className="bg-[#FAFAFA] focus:outline-none border-[1px] border-gray-400 p-2 w-[300px] rounded-md focus:border-[#1aafd0] hover:border-[#1aafd0]"
            />
          </div>
          <div className="flex justify-between mt-3">
            <button className="p-1 bg-[#1aafd0] text-white rounded-md w-[100px]">
              Login
            </button>
            <button onClick={() => setActiveButton(1)}>
              Forgot Credentials?
            </button>
          </div>
          <div className="mt-5 font-semibold">
            <p>Or Sign in with</p>
          </div>
          <div className="flex  gap-5 justify-center mt-5 ">
            <button className="flex justify-center gap-3 border-[2px] border-[#1aafd0] items-center h-full  text-white rounded-md rounded-l-[5px] w-[110px]">
              <span className="h-full bg-white w-[50px]">
                <img
                  src="https://oneid.veevotech.com/frontend_assets/images/login/google.png"
                  alt=""
                  className="text-center mx-2"
                />
              </span>
              <span className="bg-[#1aafd0] p-1  rounded-l-[2px]  rounded-r-[0px] w-full">
                Google
              </span>
            </button>
            <button className="flex justify-center gap-3 border-[2px] border-[#1aafd0] items-center h-full  text-white rounded-md rounded-l-[5px] w-[110px]">
              <span className="h-full bg-white w-[50px]">
                <img
                  src="	https://oneid.veevotech.com/frontend_assets/images/login/fb.png"
                  alt=""
                  className="text-center mx-2"
                />
              </span>
              <span className="bg-[#1aafd0] p-1  rounded-l-[2px]  rounded-r-[0px] w-full">
                Facebook
              </span>
            </button>
          </div>
        </div>
      ) : (
        <>
          <div>
            <input
              type="text"
              placeholder="Email or Phone"
              className="focus:outline-none border-[1px] border-gray-400 p-2 w-[300px] rounded-md focus:border-[#1aafd0] hover:border-[#1aafd0]"
            />
          </div>
          <div className="flex justify-between mt-3">
            <button className="p-1 bg-[#1aafd0] text-white rounded-md w-[160px]">
              Verify Email / Phone
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Login;

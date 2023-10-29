import React from "react";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import LOGO from "/src/assets/Icons/Logo.svg";
import ImagesForgot from "/src/assets/Images/ForgotPasswordImage.svg";
import { Input } from "antd";
const ForgotPassword = () => {
  return (
    <div className="flex w-screen h-screen">
      <div className="w-1/2 h-full ">
        <div className="inline-flex gap-[24px]  pl-[20px] pt-[51px]  items-start ">
          <ArrowBackRoundedIcon />
          Return to sign in
        </div>
        <div className="flex flex-col gap-[78px] mt-[40px]">
          <div className="justify-center items-center flex">
            <img src={LOGO} alt="" className="w-[261px] h-[119px] " />
          </div>
          <div className="flex flex-col justify-center items-start flex-shrink-0  px-[170px]">
            <div className="flex flex-col gap-[15px] items-start w-full">
              <div className="text-[32px] font-medium leading-[24px] text-myText">
                Forgot Password
              </div>
              <div className="text-[16px] font-medium leading-[24px] text-myText">
                Enter your email to reset it
              </div>
              <div className="flex w-full flex-col gap-[8px] items-start ">
                <label className="flex items-center gap-[13px] self-stretch">
                  <span className="text-myText text-[16px] font-medium leading-normal">
                    Email
                  </span>
                  {/* <span className="text-secondary">*</span> */}
                </label>
                <Input
                  size="small"
                  placeholder="Enter Email"
                  className="flex py-[8px] pl-[17px] pr-[10px] items-center gap-[5px] rounded-[6px] border border-[#DCDCE4] bg-white focus-within:border-primary hover:border-primary"
                  prefix={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="17"
                      height="17"
                      viewBox="0 0 17 17"
                      fill="none"
                    >
                      <path
                        d="M14.1665 2.8335H2.83317C2.05077 2.8335 1.4165 3.46776 1.4165 4.25016V12.7502C1.4165 13.5326 2.05077 14.1668 2.83317 14.1668H14.1665C14.9489 14.1668 15.5832 13.5326 15.5832 12.7502V4.25016C15.5832 3.46776 14.9489 2.8335 14.1665 2.8335Z"
                        stroke="#999999"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M15.5832 4.9585L9.22942 8.996C9.01074 9.13301 8.75789 9.20567 8.49984 9.20567C8.24178 9.20567 7.98894 9.13301 7.77025 8.996L1.4165 4.9585"
                        stroke="#999999"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  }
                />
              </div>
              <div className="flex w-full flex-col items-end gap-[20px]   mt-[20px]">
                <div className="w-full h-[1px] bg-[#DCDCE4]"></div>
                <button className="flex w-[186px]  px-[16px] py-[8px] border-t justify-center items-center rounded-[6px] bg-primary font-medium leading-[24px] text-[14px] text-white hover:bg-white hover:text-primary outline outline-2 hover:outline-primary ">
                  Confirm
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-lightprimary bg-opacity-50 w-1/2 h-full">
        <img src={ImagesForgot} alt="" />
      </div>
    </div>
  );
};

export default ForgotPassword;

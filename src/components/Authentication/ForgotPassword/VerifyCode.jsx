import React, { useState } from "react";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import LOGO from "/src/assets/Icons/Logo.svg";
import ImagesForgot from "/src/assets/Images/ForgotPassword-Code.svg";
import PinInput from "react-pin-input";

const VerifyCode = () => {
  const [optNumber, setOptNumber] = useState();

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
          <div className="flex flex-col justify-center items-start flex-shrink-0  px-[100px]">
            <div className="flex flex-col gap-[10px] items-start w-full">
              <div className="text-[32px] font-medium leading-[24px] text-myText">
                Verify Email
              </div>
              <div className="text-[16px] font-medium leading-[24px] text-myText">
                You’ve entered example@gmail.com as email address for your
                account Please verify this email by clicking button below.
              </div>
              <div className="flex w-full justify-center">
                <PinInput
                  length={4}
                  // initialValue=" "
                  onChange={(value, index) => {
                    setOptNumber(value);
                  }}
                  inputMode="numeric"
                  inputStyle={{
                    border: "3px solid #004461",
                    // widows: "96px",
                    // height: "66px",
                    margin: "20px",
                    padding: "20px 10px",
                    borderRadius: "6px",
                    color: "#C31E0A",
                    fontSize: "28px",
                    justifyContent: "space-between",
                    display: "inline-flex",
                    justifyItems: "center",
                  }}
                  // inputFocusStyle={{ boxShadow: "inset 2px 2px 4px #C5BEBE" }}
                  onComplete={(value, index) => {}}
                  autoSelect={true}
                  regexCriteria={/^[ A-Za-z0-9_@./#&+-]*$/}
                />
              </div>
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
      <div className="bg-lightprimary bg-opacity-50 w-1/2 h-full flex justify-center items-center">
        <img src={ImagesForgot} alt="" className="w-[550px] h-[650px]" />
      </div>
    </div>
  );
};

export default VerifyCode;

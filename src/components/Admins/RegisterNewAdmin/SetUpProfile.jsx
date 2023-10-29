import React, { useState } from "react";
import PersonIcon from "@mui/icons-material/Person";
import Step1SetUpProfile from "./StepProgress/Step1SetUpProfile";
import Step2UploadProfile from "./StepProgress/Step2UploadProfile";
import Step3Complete from "./StepProgress/Step3Complete";
import SuccessFullyPopUp from "../PopUp/SuccessFullyPopUp";
const SetUpProfile = () => {
  const [StepButton, setStepButton] = useState(1);
  const [ShowPopUpSuccess, setShowPopUpSuccess] = useState(false);
  return (
    <div className="grid grid-cols-12 rounded-[6px] bg-white flex-shrink-0 gap-10 w-full h-full pl-[32px]  pr-[32px]">
      {ShowPopUpSuccess ? (
        <SuccessFullyPopUp
          setShowPopUpSuccess={setShowPopUpSuccess}
          setStepButton={setStepButton}
        />
      ) : null}
      <div className="inline-flex col-span-3 flex-col items-start gap-[10px] pt-[20px] ">
        <div
          onClick={() => setStepButton(1)}
          className={
            StepButton === 1
              ? "w-full h-[55px] flex justify-start gap-5 px-3 items-center bg-[#F4F7F9] rounded-[6px] border-l-[7px] border-secondary "
              : "w-full h-[55px] flex justify-start gap-5 px-3 items-center bg-[#F4F7F9] rounded-[6px]  border-l-[7px] border-l-transparent  "
          }
        >
          <div
            className={
              StepButton === 1
                ? "text-white text-[14.25px] leading-normal rounded-full w-[22.5px] h-[22.5px] flex-shrink-0 bg-secondary flex justify-center items-center"
                : "text-white text-[14.25px] leading-normal rounded-full w-[22.5px] h-[22.5px] flex-shrink-0 bg-[#333] flex justify-center items-center"
            }
          >
            1
          </div>
          <div className="flex justify-center items-center gap-[6px] w-fit">
            <PersonIcon />
            Setup profile
          </div>
        </div>
        <div
          onClick={() => setStepButton(2)}
          className={
            StepButton === 2
              ? "w-full h-[55px] flex justify-start gap-5 px-3 items-center bg-[#F4F7F9] rounded-[6px] border-l-[7px] border-secondary "
              : "w-full h-[55px] flex justify-start gap-5 px-3 items-center bg-[#F4F7F9] rounded-[6px]  border-l-[7px] border-l-transparent"
          }
        >
          <div
            className={
              StepButton === 2
                ? "text-white text-[14.25px] leading-normal rounded-full w-[22.5px] h-[22.5px] flex-shrink-0 bg-secondary flex justify-center items-center"
                : "text-white text-[14.25px] leading-normal rounded-full w-[22.5px] h-[22.5px] flex-shrink-0 bg-[#333] flex justify-center items-center"
            }
          >
            2
          </div>
          <div className="flex justify-center items-center gap-[6px] w-fit">
            <PersonIcon />
            Upload profile
          </div>
        </div>
        <div
          onClick={() => setStepButton(3)}
          className={
            StepButton === 3
              ? "w-full h-[55px] flex justify-start gap-5 px-3 items-center bg-[#F4F7F9] rounded-[6px] border-l-[7px] border-secondary "
              : "w-full h-[55px] flex justify-start gap-5 px-3 items-center bg-[#F4F7F9] rounded-[6px]  border-l-[7px] border-l-transparent"
          }
        >
          <div
            className={
              StepButton === 3
                ? "text-white text-[14.25px] leading-normal rounded-full w-[22.5px] h-[22.5px] flex-shrink-0 bg-secondary flex justify-center items-center"
                : "text-white text-[14.25px] leading-normal rounded-full w-[22.5px] h-[22.5px] flex-shrink-0 bg-[#333] flex justify-center items-center"
            }
          >
            3
          </div>
          <div className="flex justify-center items-center gap-[6px]">
            <PersonIcon />
            Complete
          </div>
        </div>
      </div>
      <div className="h-full w-1  bg-[#F5F5F5] "></div>
      <div className=" col-span-7 flex flex-col mb-[35px]  pt-[20px]">
        {StepButton === 1 ? (
          <Step1SetUpProfile />
        ) : StepButton === 2 ? (
          <Step2UploadProfile />
        ) : (
          <Step3Complete />
        )}
        <div className="flex w-full flex-col items-end gap-[20px] mt-[20px]">
          <div className="w-full h-[1px] bg-[#DCDCE4]"></div>
          <button
            onClick={() => {
              StepButton === 1 || StepButton === 2
                ? setStepButton(StepButton + 1)
                : setShowPopUpSuccess(!ShowPopUpSuccess);
            }}
            className="flex w-[186px]  px-[16px] py-[8px] border-t justify-center items-center rounded-[6px] bg-primary font-medium leading-[24px] text-[24px] text-white hover:bg-white hover:text-primary outline outline-2 hover:outline-primary "
          >
            {StepButton === 1 || StepButton === 2 ? " Next" : "Save"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SetUpProfile;

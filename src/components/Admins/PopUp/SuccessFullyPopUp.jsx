import React from "react";

import DisabledByDefaultRoundedIcon from "@mui/icons-material/DisabledByDefaultRounded";
import Image from "/src/assets/Images/TinyPeople.svg";
const SuccessFullyPopUp = ({ setShowPopUpSuccess, setStepButton }) => {
  const handleClose = () => {
    setStepButton(1);
    setShowPopUpSuccess(false);
  };
  return (
    <div className=" flex  fixed justify-center items-center z-50 overflow-x-hidden overflow-y-auto w-full p-4 md:inset-0 h-[calc(100%-1rem)] md:h-full backdrop-blur-[2px] bg-black/10">
      <div className="bg-white border mt-3 mx-3 w-[891px] h-fit rounded-[10px] ">
        <div className="bg-primary text-white inline-flex w-full justify-end py-[19px] px-4 rounded-t-[10px]">
          <button onClick={() => setShowPopUpSuccess(false)}>
            <DisabledByDefaultRoundedIcon className="w-[17px] h-[17px] text-white " />
          </button>
        </div>
        <div className="flex flex-col justify-center items-center mt-[46px] ">
          <div className="text-[24px] font-semibold leading-normal text-center text-primary ">
            Successfully created
          </div>
          <img src={Image} alt="" className="w-[495px] h-[458px]" />
          <div className="w-full h-[1px] bg-[#DCDCE4] my-[30px]"></div>
          <div className="flex justify-end items-center gap-[92px] mb-[64px] self-stretch  px-4 ">
            <button
              onClick={() => handleClose()}
              className=" rounded-[6px] w-[186px] text-white bg-primary hover:bg-white hover:text-primary outline outline-2 flex justify-center items-center gap-[10px] px-[16px] py-[8px] hover:outline-primary "
            >
              Finish
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessFullyPopUp;

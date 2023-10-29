import React from "react";
import Image from "/src/assets/Images/ImageDelete.svg";
import DisabledByDefaultRoundedIcon from "@mui/icons-material/DisabledByDefaultRounded";
const DeletePopUP = ({ setDeleteModule }) => {
  return (
    <div className=" flex fixed justify-center items-start z-100 overflow-x-hidden overflow-y-hidden w-full p-4 md:inset-0 h-[calc(100%-1rem)] md:h-full backdrop-blur-[2px] bg-black/10">
      <div className="bg-white border mt-16 w-[891px] h-auto rounded-[10px] ">
        <div className="bg-secondary text-white inline-flex w-full justify-end py-[19px] px-4 rounded-t-[10px]">
          <button onClick={() => setDeleteModule(false)}>
            <DisabledByDefaultRoundedIcon className="w-[17px] h-[17px] text-white " />
          </button>
        </div>
        <div className="flex flex-col justify-center items-center mt-[46px] ">
          <div className="text-[24px] leading-normal text-center text-secondary ">
            Are you sure you want delete ?
          </div>
          <img src={Image} alt="" className="w-[300px] h-[300px]" />
          <div className="w-full h-[1px] bg-[#DCDCE4] my-[30px]"></div>
          <div className="flex justify-center items-center gap-[92px] mb-[30px] self-stretch ">
            <button
              onClick={() => setDeleteModule(false)}
              className=" rounded-[6px] w-[186px] text-white bg-primary hover:bg-white hover:text-primary outline outline-2 flex justify-center items-center gap-[10px] px-[16px] py-[8px] hover:outline-primary "
            >
              Cancel
            </button>
            <button className=" rounded-[6px] w-[186px] text-white bg-secondary hover:bg-white hover:text-secondary outline outline-2 flex justify-center items-center gap-[10px] px-[16px] py-[8px] hover:outline-secondary ">
              Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeletePopUP;

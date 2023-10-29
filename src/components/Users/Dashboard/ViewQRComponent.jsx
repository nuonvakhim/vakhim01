import React from "react";
import Image from "/src/assets/Images/ImageDelete.svg";
import DisabledByDefaultRoundedIcon from "@mui/icons-material/DisabledByDefaultRounded";
import QrCode2Icon from "@mui/icons-material/QrCode2";
import SaveAltIcon from "@mui/icons-material/SaveAlt";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CloseIcon from '@mui/icons-material/Close';
import { NavLink } from "react-router-dom";

export default function ViewQRComponent({ setModule }) {
  return (
    <div className=" flex fixed justify-center items-start z-100 overflow-x-hidden overflow-y-hidden w-full p-4 md:inset-0 h-[calc(100%-1rem)] md:h-full backdrop-blur-[2px] bg-black/10">
      <div className="bg-white border mt-16 w-[891px] h-auto rounded-[10px] ">
        <div className="bg-primary text-white inline-flex w-full justify-end py-[19px] px-4 rounded-t-[10px]">
          <button onClick={() => setModule(false)}>
            <DisabledByDefaultRoundedIcon className="w-[17px] h-[17px] text-white " />
          </button>
        </div>
        <div className="flex flex-col justify-center items-center mt-[20px] ">
          <div className="text-[24px] leading-normal text-center text-primary mb-4">
            QR Code
          </div>
          <QrCode2Icon
            style={{
              width: "20rem",
              height: "20rem",
              border: "1px solid #B2C8BA",
              borderRadius: "6px",
            }}
          />
          <NavLink to="https://pay.ababank.com/XfpEhqMQAqW6DvNg9" target="_blank"  className="text-primary mt-2 ">
            https://pay.ababank.com/XfpEhqMQAqW6DvNg9
          </NavLink>
          <div className="w-full h-[1px] bg-[#DCDCE4] my-[30px]"></div>
          <div className="flex justify-center items-center gap-[92px] mb-[30px] self-stretch ">
            <button
              onClick={() => setModule(false)}
              className=" rounded-[6px] w-[186px] text-primary hover:text-white bg-white hover:bg-primary hover:text-primry outline outline-2 flex justify-center items-center gap-[10px] px-[16px] py-[8px] hover:outline-primary "
            >
              <SaveAltIcon />
              Save QR
            </button>
            <button
              onClick={() => setModule(false)}
              className=" rounded-[6px] w-[186px] text-white bg-primary hover:bg-white hover:text-primary outline outline-2 flex justify-center items-center gap-[10px] px-[16px] py-[8px] hover:outline-primary "
            >
              <CloseIcon />
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

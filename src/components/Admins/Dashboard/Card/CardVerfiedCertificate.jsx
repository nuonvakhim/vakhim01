import React from "react";

import InfoIcon from "@mui/icons-material/Info";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import icon from "/src/assets/Icons/filled2.svg";

const CardVerfiedCertificate = () => {
  return (
    <div className=" bg-primary w-[270px] p-[16px] rounded-[12px] text-white  ">
      <div className="bg-white p-[12px] rounded-[48px] w-[48px] h-[48px] ">
        <img src={icon} alt="" className="w-[24px] h-[24px]" />
      </div>
      <div className=" flex flex-col ">
        <div className="flex justify-between items-center ">
          <div className="flex items-center gap-2 ">
            <p className="text-[18px] leading-[16px] tracking-[-0.13px] ">
              Total users
            </p>
            <InfoIcon className="text-white " />
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="84"
            height="42"
            viewBox="0 0 84 42"
            fill="none"
          >
            <path
              d="M2 40C2 40 11.6217 22.5 22 22.5C32 22.5 32 29 42 29C52.3783 29 51.6217 11.5 62 11.5C71.5 11.5 82 21 82 21"
              stroke="#A3C9D9"
              stroke-width="4"
              stroke-linecap="round"
            />
          </svg>
        </div>
        <div className="text-[36px] ">1000</div>
        <div className="bg-black p-[4px] rounded-[6px] w-fit ">
          <ArrowUpwardIcon className="text-lightprimary" />
          <span className="text-lightprimary">37.8%</span>
          <span className="ml-1 text-[#6F767E]">this week</span>
        </div>
      </div>
    </div>
  );
};

export default CardVerfiedCertificate;

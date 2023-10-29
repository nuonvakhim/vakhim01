import React from "react";
import icon from "/src/assets/Icons/filled.svg";
import TotalUsers from "./Card/TotalUsers";
import CardVerfiedCertificate from "./Card/CardVerfiedCertificate";
const OverView = () => {
  return (
    <div className="h-[440px] rounded-myrounded shadow-myshadow bg-white flex-shrink-0 pt-[24px] px-[39px] pb-[98px]">
      <div className="w-[4.3rem] text-primary border-b-4 border-primary mb-[29px]">Overview</div>
      <div className=" bg-white flex gap-12 border-dashed border-2 w-fit border-lightprimary pt-[16px] pr-[22px] pb-[16px] pl-[16px]">
        <TotalUsers />
        <CardVerfiedCertificate />
      </div>
    </div>  
  );
};

export default OverView;

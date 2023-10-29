import React from "react";
import notFound from "/src/assets/Images/404-error-with-a-cute-animal/amico.svg";
const Page404NotFound = () => {
  return (
    <div className="h-screen w-screen bg-notFound bg-cover flex flex-col justify-center items-center gap-[70px]">
      <div className="text-[40px] text-myText font-semibold leading-[56px] ">
        This link is not available.
      </div>
      <img src={notFound} alt="" />
      <button className="flex w-[186px] capitalize  px-[16px] py-[8px] border-t justify-center items-center rounded-[6px] bg-primary font-medium leading-[24px] text-[14px] text-white hover:bg-white outline-none hover:text-primary outline outline-2 hover:outline-primary ">
        Back to homepage
      </button>
    </div>
  );
};

export default Page404NotFound;

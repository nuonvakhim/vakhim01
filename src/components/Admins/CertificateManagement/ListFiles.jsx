import React from "react";
import DisabledByDefaultRoundedIcon from "@mui/icons-material/DisabledByDefaultRounded";
import { NavLink } from "react-router-dom";

export default function ListFiles({ setModule }) {
  const date = new Date();
  const formattedDate = date
    .toLocaleDateString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    })
    .replace(/ /g, " ");
  var data = [
    {
      file: "File Name",
      created: formattedDate,
    },
    {
      file: "File Name",
      created: formattedDate,
    },
    {
      file: "File Name",
      created: formattedDate,
    },
    {
      file: "File Name",
      created: formattedDate,
    },
  ];
  return (
    <div className=" flex absolute justify-center items-center z-100 overflow-x-hidden w-full p-4 md:inset-0 h-[calc(100%-1rem)] md:h-full backdrop-blur-[2px] bg-black/10 shadow-myshadow ">
      <div className="bg-white pb-10 border mt-3 mx-3 h-fit rounded-[10px] ">
        <div className="bg-primary text-white inline-flex w-full justify-between py-[15px] px-4 rounded-t-[10px]">
          <div className="text-center">Your certificate template files</div>
          <button onClick={() => setModule(false)}>
            <DisabledByDefaultRoundedIcon className="w-[17px] h-[17px] text-white " />
          </button>
        </div>
        <div className="mt-[37px] w-full rounded-[6px] flex-shrink-0 px-6 pt-[31px]">
          {data === null || data === undefined || data?.length === 0 ? (
            <div className="flex flex-col w-full h-[506px] place-content-center justify-center items-center py-3">
              <div className=" text-[16px] text-textblack text-center">
                You don't have any template certificate yet.
              </div>
              <img src={NoData} alt="Image" className="" />
            </div>
          ) : (
            <div class=" w-full sm:rounded-lg grid grid-cols-3 gap-[64px] items-center h-fit">
              {data?.map((item, index) => (
                <div className=" shadow-myshadow rounded-myrounded w-fit h-fit flex justify-center flex-col hover:shadow-xl hover:bg-primary hover:text-white">
                  <NavLink className="px-[27px] mb-[25px] gap-[10px] flex flex-col w-full pt-4">
                    <div className=" text-[16px] leading-normal  ">
                      {item?.file}
                    </div>
                    <div className="text-[14px] leading-normal self-stretch  ">
                      {item?.created}
                    </div>
                  </NavLink>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

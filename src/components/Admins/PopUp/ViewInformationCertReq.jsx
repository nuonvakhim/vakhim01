import React from "react";
import DisabledByDefaultRoundedIcon from "@mui/icons-material/DisabledByDefaultRounded";


export default function ViewInformationCertReq({ setModule }) {
  return (
    <div className=" flex absolute justify-center items-center z-100 overflow-x-hidden overflow-y-auto w-full p-4 md:inset-0 h-[calc(100%-1rem)] md:h-full backdrop-blur-[2px] bg-black/10 shadow-myshadow ">
      <div className="bg-white border mt-3 mx-3 w-[891px] h-fit rounded-[10px] ">
        <div className="bg-primary text-white inline-flex w-full justify-between py-[15px] px-4 rounded-t-[10px]">
          <div className="text-center">Set reference for user</div>
          <button onClick={() => setModule(false)}>
            <DisabledByDefaultRoundedIcon className="w-[17px] h-[17px] text-white " />
          </button>
        </div>
        Hel
      </div>
    </div>
  );
}

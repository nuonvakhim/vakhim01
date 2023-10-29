import React, { useState } from "react";
import Profile from "./Profile";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import LockRoundedIcon from "@mui/icons-material/LockRounded";
import ChangePassword from "./ChangePassword";

const Setting = () => {
  const [tab, setTab] = useState(1);
  return (
    <div className="flex flex-col gap-[20px] bg-white">
      <div className="flex">
        <button
          onClick={() => setTab(1)}
          className={
            tab === 1
              ? "flex w-[276px] px-[30px] py-[15px] justify-center items-center flex-shrink-0 gap-[10px] text-primary border-b-2 border-b-primary"
              : "flex w-[276px] px-[30px] py-[15px] justify-center items-center flex-shrink-0 gap-[10px]  text-[#DCDCE4] border-b-2 border-b-[#DCDCE4]"
          }
        >
          <PersonRoundedIcon />
          Profile
        </button>
        <button
          onClick={() => setTab(2)}
          className={
            tab === 2
              ? "flex w-[276px] px-[30px] py-[15px] justify-center items-center flex-shrink-0 gap-[10px] text-primary border-b-2 border-b-primary"
              : "flex w-[276px] px-[30px] py-[15px] justify-center items-center flex-shrink-0 gap-[10px] text-[#DCDCE4] border-b-2 border-b-[#DCDCE4]"
          }
        >
          <LockRoundedIcon />
          Change Password
        </button>
        <div className="border-b-[#DCDCE4] border-b-2 w-full"></div>
      </div>
      <div className="px-[200px] overflow-y-auto h-[580px] py-4  ">
        {tab === 1 ? <Profile /> : <ChangePassword />}
      </div>
    </div>
  );
};

export default Setting;

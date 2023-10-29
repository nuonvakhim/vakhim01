import { Input } from "antd";
import React, { useState } from "react";
import ImageChangePassword from "/src/assets/Images/ChangePassword.svg";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
const ChangePassword = () => {
  const [currentPassword, setCurrentPassword] = useState(false);
  const [newPassword, setNewPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState(false);
  return (
    <div className="flex gap-[84px]">
      <div className="inline-flex flex-col gap-[28px] items-start ">
        <div className="flex flex-col gap-[20px]">
          <div className="text-[32px] font-normal leading-normal -tracking-[0.64px] text-primary ">
            Change Password
          </div>
          <div className="text-[13px] font-normal -tracking-[0.26px] text-primary  ">
            To change password, please fill in the fields below. <br /> Your
            password must contain at least 8 characters, it must also include at
            least one upper case letter, one upper case letter, lower case
            letter, one number and one special character.
          </div>
        </div>
        <div className="flex flex-col gap-[15px] w-full">
          <label className="flex items-center self-stretch">
            <span className="text-primary text-[16px] font-medium leading-normal">
              Current password
            </span>
          </label>
          <Input
            size="small"
            placeholder="Enter Current Password"
            type={currentPassword ? "text" : "password"}
            className="flex py-[8px] pl-[17px] pr-[10px] items-center gap-[5px] rounded-[6px] border border-[#DCDCE4] bg-white hover:border-primary active:border-primary focus-within:border-primary focus:ring-primary"
            suffix={
              <button onClick={() => setCurrentPassword(!currentPassword)}>
                {currentPassword ? (
                  <VisibilityOutlinedIcon className="w-[17px] h-[17px] text-[#DCDCE4]  stroke-1" />
                ) : (
                  <VisibilityOffOutlinedIcon className="w-[17px] h-[17px] text-[#DCDCE4]  stroke-1" />
                )}
              </button>
            }
            prefix={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="17"
                viewBox="0 0 17 17"
                fill="none"
              >
                <path
                  d="M13.4583 7.79199H3.54167C2.75926 7.79199 2.125 8.42626 2.125 9.20866V14.167C2.125 14.9494 2.75926 15.5837 3.54167 15.5837H13.4583C14.2407 15.5837 14.875 14.9494 14.875 14.167V9.20866C14.875 8.42626 14.2407 7.79199 13.4583 7.79199Z"
                  stroke="#999999"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M4.9585 7.79199V4.95866C4.9585 4.01935 5.33163 3.11851 5.99583 2.45432C6.66002 1.79013 7.56085 1.41699 8.50016 1.41699C9.43947 1.41699 10.3403 1.79013 11.0045 2.45432C11.6687 3.11851 12.0418 4.01935 12.0418 4.95866V7.79199"
                  stroke="#999999"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            }
          />
        </div>
        <div className="flex flex-col gap-[15px] w-full">
          <label className="flex items-center self-stretch">
            <span className="text-primary text-[16px] font-medium leading-normal">
              New password
            </span>
          </label>
          <Input
            size="small"
            placeholder="Enter New Password"
            type={newPassword ? "text" : "password"}
            className="flex py-[8px] pl-[17px] pr-[10px] items-center gap-[5px] rounded-[6px] border border-[#DCDCE4] bg-white hover:border-primary active:border-primary focus-within:border-primary focus:ring-primary"
            suffix={
              <button onClick={() => setNewPassword(!newPassword)}>
                {newPassword ? (
                  <VisibilityOutlinedIcon className="w-[17px] h-[17px] text-[#DCDCE4]  stroke-1" />
                ) : (
                  <VisibilityOffOutlinedIcon className="w-[17px] h-[17px] text-[#DCDCE4]  stroke-1" />
                )}
              </button>
            }
            prefix={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="17"
                viewBox="0 0 17 17"
                fill="none"
              >
                <path
                  d="M13.4583 7.79199H3.54167C2.75926 7.79199 2.125 8.42626 2.125 9.20866V14.167C2.125 14.9494 2.75926 15.5837 3.54167 15.5837H13.4583C14.2407 15.5837 14.875 14.9494 14.875 14.167V9.20866C14.875 8.42626 14.2407 7.79199 13.4583 7.79199Z"
                  stroke="#999999"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M4.9585 7.79199V4.95866C4.9585 4.01935 5.33163 3.11851 5.99583 2.45432C6.66002 1.79013 7.56085 1.41699 8.50016 1.41699C9.43947 1.41699 10.3403 1.79013 11.0045 2.45432C11.6687 3.11851 12.0418 4.01935 12.0418 4.95866V7.79199"
                  stroke="#999999"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            }
          />
        </div>
        <div className="flex flex-col gap-[15px] w-full">
          <label className="flex items-center self-stretch">
            <span className="text-primary text-[16px] font-medium leading-normal">
              Confirm password
            </span>
          </label>
          <Input
            size="small"
            placeholder="Enter Confirm Password"
            type={confirmPassword ? "text" : "password"}
            className="flex py-[8px] pl-[17px] pr-[10px] items-center gap-[5px] rounded-[6px] border border-[#DCDCE4] bg-white hover:border-primary active:border-primary focus-within:border-primary focus:ring-primary"
            suffix={
              <button onClick={() => setConfirmPassword(!confirmPassword)}>
                {confirmPassword ? (
                  <VisibilityOutlinedIcon className="w-[17px] h-[17px] text-[#DCDCE4]  stroke-1" />
                ) : (
                  <VisibilityOffOutlinedIcon className="w-[17px] h-[17px] text-[#DCDCE4]  stroke-1" />
                )}
              </button>
            }
            prefix={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="17"
                viewBox="0 0 17 17"
                fill="none"
              >
                <path
                  d="M13.4583 7.79199H3.54167C2.75926 7.79199 2.125 8.42626 2.125 9.20866V14.167C2.125 14.9494 2.75926 15.5837 3.54167 15.5837H13.4583C14.2407 15.5837 14.875 14.9494 14.875 14.167V9.20866C14.875 8.42626 14.2407 7.79199 13.4583 7.79199Z"
                  stroke="#999999"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M4.9585 7.79199V4.95866C4.9585 4.01935 5.33163 3.11851 5.99583 2.45432C6.66002 1.79013 7.56085 1.41699 8.50016 1.41699C9.43947 1.41699 10.3403 1.79013 11.0045 2.45432C11.6687 3.11851 12.0418 4.01935 12.0418 4.95866V7.79199"
                  stroke="#999999"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            }
          />
        </div>
        <div
          className="text-secondary "
          onClick={() => alert("You have click it ")}
        >
          Forgot password ?
        </div>
        <div className="flex w-full flex-col items-end gap-[20px]   mt-[20px]">
          <div className="w-full h-[1px] bg-[#DCDCE4]"></div>
          <button className="flex w-[186px]  px-[16px] py-[8px] border-t justify-center items-center rounded-[6px] bg-primary font-medium leading-[24px] text-[14px] text-white hover:bg-white hover:text-primary outline outline-2 hover:outline-primary ">
            Save
          </button>
        </div>
      </div>

      <img src={ImageChangePassword} alt="" className="h-[606px]  w-1/2" />
    </div>
  );
};

export default ChangePassword;

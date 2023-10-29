import { DatePicker, Input, Select } from "antd";
import React, { useState } from "react";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space, Typography } from "antd";
import TextArea from "antd/es/input/TextArea";
import Profile from "/src/assets/Icons/Profile1.svg";
import { InboxOutlined } from "@ant-design/icons";
import { message, Upload } from "antd";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";

const Step3Complete = () => {
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  const [newPassword, setNewPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState(false);
  const [value, setValue] = useState();
  const items = [
    {
      key: "1",
      label: "Male",
    },
    {
      key: "2",
      label: "Female",
    },
  ];
  const [state, setstate] = useState("Gender");
  const { Dragger } = Upload;
  const props = {
    name: "file",
    multiple: true,
    action: "https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188",
    onChange(info) {
      const { status } = info.file;
      if (status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (status === "done") {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    onDrop(e) {
      console.log("Dropped files", e.dataTransfer.files);
    },
  };

  return (
    <div className="inline-flex flex-col items-start gap-[10px] ">
      <div className="flex gap-[45px] w-full items-center">
        <div className="w-full h-[7px] rounded-[10px] bg-gradient-to-r from-[#DA3925] to-[#004461] to-63.06% bg-opacity-80 " />
        <div className="text-[22px] leading-normal text-primary w-[83px] ">
          Step 3
        </div>
      </div>
      <div className=" bg-[#FAFAFA] rounded-[6px] w-full border border-[#DCDCE4] pl-[230px] pr-[231px] pt-[15px] pb-[16px] justify-center items-center flex ">
        <div className="flex flex-col items-center gap-[5px]">
          <div className="text-primary text-center font-medium -leading-[0.36px] text-[18px] ">
            Completed Setup Profile
          </div>
          <div className="text-primary text-center text-[14.4px] font-normal -tracking-[0.288px] ">
            Please check information carefully! Especially username and password
          </div>
        </div>
      </div>
      <div className="flex justify-center flex-col items-center w-full border border-dashed h-[150px] ">
        <img src={Profile} alt="" className="object-scale-down w-full h-full" />
      </div>
      {/* Form Input */}
      <div className="flex w-full items-start justify-between ">
        <div className="flex w-[325px] flex-col items-start gap-[5px] flex-shrink-0">
          <div className="flex w-full flex-col gap-[8px] items-start ">
            <label className="flex items-center gap-[13px] self-stretch">
              <span className="text-primary text-[16px] font-medium leading-normal">
                User name
              </span>
              <span className="text-secondary">*</span>
            </label>
            <Input
              size="small"
              placeholder="Enter User Name"
              className="flex py-[8px] pl-[17px] pr-[10px] items-center gap-[5px] rounded-[6px] border border-[#DCDCE4] bg-white focus:ring-primary focus:outline-primary"
              prefix={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  height="17"
                  viewBox="0 0 17 17"
                  fill="none"
                >
                  <path
                    d="M13.4582 14.875V13.4583C13.4582 12.7069 13.1597 11.9862 12.6283 11.4549C12.097 10.9235 11.3763 10.625 10.6248 10.625H6.37484C5.62339 10.625 4.90272 10.9235 4.37137 11.4549C3.84001 11.9862 3.5415 12.7069 3.5415 13.4583V14.875"
                    stroke="#999999"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M8.49984 7.79167C10.0646 7.79167 11.3332 6.52314 11.3332 4.95833C11.3332 3.39353 10.0646 2.125 8.49984 2.125C6.93503 2.125 5.6665 3.39353 5.6665 4.95833C5.6665 6.52314 6.93503 7.79167 8.49984 7.79167Z"
                    stroke="#999999"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              }
            />
          </div>
          <div className="flex w-full flex-col gap-[8px] items-start ">
            <label className="flex items-center gap-[13px] self-stretch">
              <span className="text-primary text-[16px] font-medium leading-normal">
                Email
              </span>
              <span className="text-secondary">*</span>
            </label>
            <Input
              size="small"
              placeholder="Enter Email"
              className="flex py-[8px] pl-[17px] pr-[10px] items-center gap-[5px] rounded-[6px] border border-[#DCDCE4] bg-white"
              prefix={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  height="17"
                  viewBox="0 0 17 17"
                  fill="none"
                >
                  <path
                    d="M14.1665 2.8335H2.83317C2.05077 2.8335 1.4165 3.46776 1.4165 4.25016V12.7502C1.4165 13.5326 2.05077 14.1668 2.83317 14.1668H14.1665C14.9489 14.1668 15.5832 13.5326 15.5832 12.7502V4.25016C15.5832 3.46776 14.9489 2.8335 14.1665 2.8335Z"
                    stroke="#999999"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M15.5832 4.9585L9.22942 8.996C9.01074 9.13301 8.75789 9.20567 8.49984 9.20567C8.24178 9.20567 7.98894 9.13301 7.77025 8.996L1.4165 4.9585"
                    stroke="#999999"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              }
            />
          </div>

          <div className="flex w-full flex-col gap-[8px] items-start ">
            <div className="flex w-full flex-col gap-[8px] items-start ">
              <label className="flex items-center gap-[13px] self-stretch">
                <span className="text-primary text-[16px] font-medium leading-normal">
                  Password
                </span>
                <span className="text-secondary">*</span>
              </label>
              <Input
                size="small"
                placeholder="Enter Password"
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
          </div>
          <div className="flex w-full flex-col gap-[8px] items-start ">
            <label className="flex items-center gap-[13px] self-stretch">
              <span className="text-primary text-[16px] font-medium leading-normal">
                Gender
              </span>
              <span className="text-secondary">*</span>
            </label>
            <div className="flex w-full justify-between text-[#999]  py-[3px] pl-[17px] pr-[10px] items-center gap-[5px] rounded-[6px] border border-[#DCDCE4] bg-white">
              <Select
                placeholder="Select Gender"
                style={{
                  width: "100%",
                }}
                onChange={handleChange}
                options={[
                  {
                    value: "Male",
                    label: "Male",
                  },
                  {
                    value: "Female",
                    label: "Female",
                  },
                ]}
              />
            </div>
          </div>
        </div>
        {/* Column 2  */}
        <div className="flex w-[325px] flex-col items-start gap-[5px] flex-shrink-0">
          <div className="flex w-full flex-col gap-[8px] items-start ">
            <label className="flex items-center gap-[13px] self-stretch">
              <span className="text-primary text-[16px] font-medium leading-normal">
                Full name
              </span>
              <span className="text-secondary">*</span>
            </label>
            <Input
              size="small"
              placeholder="Enter Full Name"
              className="flex py-[8px] pl-[17px] pr-[10px] items-center gap-[5px] rounded-[6px] border border-[#DCDCE4] bg-white"
              prefix={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  height="17"
                  viewBox="0 0 17 17"
                  fill="none"
                >
                  <path
                    d="M13.4582 14.875V13.4583C13.4582 12.7069 13.1597 11.9862 12.6283 11.4549C12.097 10.9235 11.3763 10.625 10.6248 10.625H6.37484C5.62339 10.625 4.90272 10.9235 4.37137 11.4549C3.84001 11.9862 3.5415 12.7069 3.5415 13.4583V14.875"
                    stroke="#999999"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M8.49984 7.79167C10.0646 7.79167 11.3332 6.52314 11.3332 4.95833C11.3332 3.39353 10.0646 2.125 8.49984 2.125C6.93503 2.125 5.6665 3.39353 5.6665 4.95833C5.6665 6.52314 6.93503 7.79167 8.49984 7.79167Z"
                    stroke="#999999"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              }
            />
          </div>
          <div className="flex w-full flex-col gap-[8px] items-start ">
            <label className="flex items-center gap-[13px] self-stretch">
              <span className="text-primary text-[16px] font-medium leading-normal">
                Phone number
              </span>
              <span className="text-secondary">*</span>
            </label>
            <Input
              size="small"
              placeholder="Enter Phone Number"
              className="flex py-[8px] pl-[17px] pr-[10px] items-center gap-[5px] rounded-[6px] border border-[#DCDCE4] bg-white"
              prefix={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  height="17"
                  viewBox="0 0 17 17"
                  fill="none"
                >
                  <g clip-path="url(#clip0_113_9169)">
                    <path
                      d="M15.5835 11.9849V14.1099C15.5843 14.3072 15.5439 14.5024 15.4649 14.6832C15.3858 14.8639 15.2699 15.0262 15.1246 15.1596C14.9792 15.2929 14.8076 15.3945 14.6207 15.4577C14.4338 15.5209 14.2358 15.5443 14.0393 15.5266C11.8597 15.2897 9.76597 14.5449 7.92643 13.352C6.21497 12.2645 4.76396 10.8134 3.67643 9.10199C2.47933 7.25409 1.73435 5.15019 1.50184 2.96074C1.48414 2.76486 1.50742 2.56744 1.5702 2.38106C1.63297 2.19467 1.73387 2.02339 1.86647 1.87814C1.99907 1.73288 2.16045 1.61683 2.34036 1.53736C2.52027 1.45789 2.71475 1.41676 2.91143 1.41657H5.03643C5.38019 1.41319 5.71345 1.53492 5.97409 1.75907C6.23474 1.98323 6.40498 2.29451 6.45309 2.63491C6.54278 3.31495 6.70912 3.98267 6.94893 4.62532C7.04423 4.87885 7.06485 5.15439 7.00836 5.41928C6.95187 5.68417 6.82062 5.92732 6.63018 6.11991L5.73059 7.01949C6.73894 8.79283 8.20725 10.2611 9.98059 11.2695L10.8802 10.3699C11.0728 10.1795 11.3159 10.0482 11.5808 9.99172C11.8457 9.93523 12.1212 9.95585 12.3748 10.0512C13.0174 10.291 13.6851 10.4573 14.3652 10.547C14.7093 10.5955 15.0235 10.7688 15.2481 11.034C15.4728 11.2991 15.5921 11.6375 15.5835 11.9849Z"
                      stroke="#999999"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_113_9169">
                      <rect width="17" height="17" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              }
            />
          </div>
          <div className="flex w-full flex-col gap-[8px] items-start ">
            <label className="flex items-center gap-[13px] self-stretch">
              <span className="text-primary text-[16px] font-medium leading-normal">
                Confirm password
              </span>
              <span className="text-secondary">*</span>
            </label>

            <Input
              size="small"
              placeholder="Enter Confirm password"
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
          <div className="flex w-full flex-col gap-[8px] items-start ">
            <label className="flex items-center gap-[13px] self-stretch">
              <span className="text-primary text-[16px] font-medium leading-normal">
                Date of birth
              </span>
              <span className="text-secondary">*</span>
            </label>
            <DatePicker
              value={value}
              onChange={(newValue) => setValue(newValue)}
              className="flex w-full py-[8px] pl-[17px] pr-[10px] items-center gap-[5px] rounded-[6px] border border-[#DCDCE4] bg-white"
            />
          </div>
        </div>
      </div>

      <div className="flex w-full flex-col gap-[8px] items-start ">
        <label className="flex items-center gap-[13px] self-stretch">
          <span className="text-primary text-[16px] font-medium leading-normal">
            Address
          </span>
          <span className="text-secondary">*</span>
        </label>
        <TextArea
          placeholder="Enter address"
          className="flex w-[836px] h-[106px] py-[8px] pl-[17px] pr-[10px] items-center gap-[5px] rounded-[8.078px] border border-[#DCDCE4] bg-white"
        />
      </div>
    </div>
  );
};

export default Step3Complete;

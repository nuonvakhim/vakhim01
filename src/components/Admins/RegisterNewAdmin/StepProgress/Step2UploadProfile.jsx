import React from "react";
import { InboxOutlined } from "@ant-design/icons";
import { message, Upload } from "antd";

const Step2UploadProfile = () => {
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
    <div className="inline-flex flex-col items-start gap-[10px] w-full h-full ">
      <div className="flex gap-[45px] w-full items-center">
        <div className="w-full h-[7px] rounded-[10px] bg-gradient-to-r from-[#DA3925] to-[#004461] to-63.06% bg-opacity-80 " />
        <div className="text-[22px] leading-normal text-primary w-[83px] ">
          Step 2
        </div>
      </div>
      <div className=" bg-[#FAFAFA] rounded-[6px] w-full border border-[#DCDCE4] pl-[230px] pr-[231px] pt-[27px] pb-[28px] justify-center items-center flex ">
        <div className="flex flex-col items-center gap-[5px]">
          <div className="text-primary text-center font-medium -leading-[0.36px] text-[18px] ">
            Upload profile
          </div>
          <div className="text-primary text-center text-[14.4px] font-normal -tracking-[0.288px] ">
            Please upload your profile
          </div>
        </div>
      </div>
      {/* Form Input */}
      <div className="flex w-full items-start justify-center gap-[51px]  ">
        <Dragger {...props} className="w-full  ">
          <div className="flex justify-center flex-col items-center w-full gap-[15px] p-[42px] ">
            <p className="ant-upload-drag-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="37"
                height="37"
                viewBox="0 0 37 37"
                fill="none"
              >
                <path
                  d="M24.5389 24.3344L18.4999 18.2954L12.4609 24.3344"
                  stroke="black"
                  stroke-opacity="0.4"
                  stroke-width="1.50974"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M18.5 18.2954V31.8831"
                  stroke="black"
                  stroke-opacity="0.4"
                  stroke-width="1.50974"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M31.1667 27.9426C32.6392 27.1398 33.8024 25.8696 34.4728 24.3323C35.1432 22.795 35.2825 21.0782 34.8689 19.4529C34.4552 17.8276 33.512 16.3863 32.1883 15.3566C30.8645 14.3268 29.2355 13.7673 27.5584 13.7662H25.6561C25.1991 11.9986 24.3474 10.3577 23.165 8.96668C21.9825 7.5757 20.5001 6.47087 18.8292 5.73526C17.1583 4.99965 15.3424 4.6524 13.518 4.71962C11.6936 4.78684 9.90813 5.26677 8.29589 6.12335C6.68365 6.97992 5.28658 8.19084 4.20969 9.66507C3.13281 11.1393 2.40415 12.8385 2.07848 14.6349C1.75282 16.4312 1.83862 18.2781 2.32945 20.0365C2.82028 21.7949 3.70336 23.4192 4.9123 24.7873"
                  stroke="black"
                  stroke-opacity="0.4"
                  stroke-width="1.50974"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M24.5389 24.3344L18.4999 18.2954L12.4609 24.3344"
                  stroke="black"
                  stroke-opacity="0.4"
                  stroke-width="1.50974"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </p>
            <div>
              <p className="ant-upload-text">
                Select a file or drag and drop here
              </p>
              <p className="ant-upload-hint mt-[3px]">
                JPG, PNG or PDF, file size no more than 10MB
              </p>
            </div>
            <button className="text-primary text-[7.549px] uppercase leading-normal font-normal flex px-[12.08px] py-[9.06px] items-center gap-[7.594px] rounded-[3.774px] bg-white  outline outline-2  outline-primary hover:bg-primary hover:text-white ">
              select files
            </button>
          </div>
        </Dragger>
      </div>
    </div>
  );
};

export default Step2UploadProfile;

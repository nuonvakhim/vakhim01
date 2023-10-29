import { Button, Dropdown, Input, Select, Space } from "antd";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { DownOutlined } from "@ant-design/icons";

const BarUserCertifcate = () => {
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  return (
    <div className="flex justify-between items-center w-full py-[26px] pr-[18.95px] pl-[36px] bg-white shadow-myshadow rounded-myrounded">
      <div className="flex  items-center gap-[29px]">
        <div className=" text-primary text-[18px] leading-normal text-center">
          List all requests
        </div>
        <Input
          size="large"
          placeholder="Search"
          prefix={<SearchIcon className="w-[17px] h-[17px] flex-shrink-0 " />}
          className="w-[297px] py-[12px] px-[10px] items-center gap-[10px] rounded-[5px] border border-[#DCDCE4] bg-white"
        />
      </div>
      <div className="flex gap-[10px] justify-center items-center">
        <div className="flex">
          <div className="flex items-center h-[32px] self-center gap-[10px] px-[12px] py-[5px] rounded-tl-[6px] rounded-bl-[6px] border bg-[#F9FBFF] ">
            Type of Request
          </div>
          <div className="h-[32px] rounded-tr-[6px] rounded-br-[6px] rounded-tl-[0px] rounded-bl-[0px] border border-[#DCDCE4]  ">
            <Select
              defaultValue="All"
              style={{
                width: 120,
              }}
              onChange={handleChange}
              options={[
                {
                  label: "All",
                  value: "All",
                  key: "4",
                },
                {
                  label: "Create",
                  value: "Create",
                  key: "1",
                },
                {
                  label: "Delete",
                  value: "Delete",
                  key: "2",
                },
                {
                  label: "Update",
                  value: "Update",
                  key: "3",
                },
              ]}
            />
          </div>
        </div>
        <div className="flex">
          <div className="flex items-center h-[32px] self-center gap-[10px] px-[12px] py-[5px] rounded-tl-[6px] rounded-bl-[6px] border bg-[#F9FBFF] ">
            Status
          </div>
          <div className="h-[32px] rounded-tr-[6px] rounded-br-[6px] rounded-tl-[0px] rounded-bl-[0px] border border-[#DCDCE4]  ">
            <Select
              defaultValue="All"
              style={{
                width: 120,
              }}
              onChange={handleChange}
              options={[
                {
                  label: "All",
                  value: "All",
                  key: "4",
                },
                {
                  label: "Create",
                  value: "Create",
                  key: "1",
                },
                {
                  label: "Delete",
                  value: "Delete",
                  key: "2",
                },
                {
                  label: "Update",
                  value: "Update",
                  key: "3",
                },
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BarUserCertifcate;

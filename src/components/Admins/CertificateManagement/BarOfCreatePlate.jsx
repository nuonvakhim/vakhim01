import { Button, Dropdown, Input, Space } from "antd";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { DownOutlined } from "@ant-design/icons";
function BarOfCreatePlate() {
  const items = [
    {
      label: "Modify information",
      key: "1",
    },
    {
      label: "Deactivate account",
      key: "2",
    },
    {
      label: "Delete account",
      key: "3",
    },
  ];
  const handleMenuClick = (e) => {
    message.info("Click on menu item.");
    console.log("click", e);
  };
  const menuProps = {
    items,
    onClick: handleMenuClick,
  };

  return (
    <div className="flex justify-between items-center self-stretch w-full bg-white shadow-myshadow rounded-myrounded py-6 px-6">
      <div className="flex items-center gap-[29px]">
        <div className=" text-primary text-[18px] leading-normal text-center">
          Create template
        </div>
        <Input
          size="large"
          placeholder="Search"
          prefix={<SearchIcon className="w-[12px] h-[12px] flex-shrink-0 " />}
          className="w-[297px] py-[8px] px-[10px] items-center gap-[10px] rounded-[5px] border border-[#DCDCE4] bg-white shadow-myshadow"
        />
      </div>
      <Dropdown menu={menuProps} className="h-10 shadow-myshadow">
        <Button>
          <Space>
            <span className="text-myText  pl-[12px] pr-0 ">Sort by : </span>
            <span className="text-myText font-bold pr-[19.91px]">Newest</span>
            <DownOutlined />
          </Space>
        </Button>
      </Dropdown>
    </div>
  );
}

export default BarOfCreatePlate;

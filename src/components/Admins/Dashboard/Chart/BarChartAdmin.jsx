import React from "react";

import { BarChart } from "@mui/x-charts/BarChart";
import "./myStyle.css";
import { DownOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Dropdown, message, Space, Tooltip } from "antd";
import { Fullscreen } from "@mui/icons-material";
import { auto } from "@popperjs/core";

const BarChartAdmin = () => {
  const pData = [3, 21, 12, 27, 34, 53, 18];
  const xLabels = [22, 23, 24, 25, 26, 27, 28];
  const handleButtonClick = (e) => {
    message.info("Click on left button.");
    console.log("click left button", e);
  };
  const handleMenuClick = (e) => {
    message.info("Click on menu item.");
    console.log("click", e);
  };
  const items = [
    {
      label: "1st menu item",
      key: "1",
      icon: <UserOutlined />,
    },
    {
      label: "2nd menu item",
      key: "2",
      icon: <UserOutlined />,
    },
  ];
  const menuProps = {
    items,
    onClick: handleMenuClick,
  };
  return (
    <div className="w-full p-[24px] flex flex-col justify-start items-start rounded-myrounded shadow-myshadow bg-white">
      <div className="flex justify-between w-full">
        <div className="flex items-center gap-2">
          <div className="bg-lightprimary w-[16px] h-[32px] "></div>
          <div className="text-primary">User request</div>
        </div>
        <Dropdown menu={menuProps}>
          <Button
            style={{
              padding: "8px,16px",
              color: "#6F767E",
            }}
          >
            <Space>
              <span className="">Last 7 days</span>
              <DownOutlined />
            </Space>
          </Button>
        </Dropdown>
      </div>
      <BarChart
        height={320}
        series={[
          { data: pData, label: "User request", id: "user", color: "#004461" },
        ]}
        xAxis={[{ data: xLabels, scaleType: "band" }]}
      />
    </div>
  );
};

export default BarChartAdmin;

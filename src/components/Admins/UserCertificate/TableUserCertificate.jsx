import React, { useState } from "react";
import { Tabs } from "antd";
import DownloadDoneRoundedIcon from "@mui/icons-material/DownloadDoneRounded";
import "./myStyle.css";
import TableUserOnProgress from "./Table/TableUserOnProgress";
import TableUserFinish from "./Table/TableUserFinish";
import MovingIcon from "@mui/icons-material/Moving";
import "/src/components/Admins/Dashboard/PaginationStyle.css";

const TableUserCertificate = () => {
  const [showTableOnProgress, setTableOnProgress] = useState(1);
  const onChange = (key) => {
    setTableOnProgress(key);
    console.log(key);
  };

  console.log("showTableOnProgress", showTableOnProgress);

  const tabData = [
    {
      label: (
        <div className="flex w-[10rem] gap-[10px]">
          <MovingIcon />
          On Progress
        </div>
      ),
      key: 1,
      children: () => setTableOnProgress(true),
    },
    {
      label: (
        <div className="flex w-[10rem] gap-[10px]">
          <DownloadDoneRoundedIcon />
          Finish
        </div>
      ),
      key: 2,
    },
  ];
  return (
    <div className="flex flex-col bg-white w-auto shadow-myshadow rounded-myrounded h-fit mt-[25px] pt-[33px] pl-[21px] pr-[27px] pb-4">
      <div className="flex  justify-between ">
        <div className="flex flex-col gap-[5px] items-start">
          <div className="text-primary text-[18px] leading-normal ">
            List all User certificate
          </div>
          <div className="text-secondary text-[14px] leading-normal ">
            Review all user certificates and their progress
          </div>
        </div>
        <div className="bg-primary h-16  w-[26rem] text-primary rounded-[6px] pt-2 px-2  ">
          <Tabs onChange={onChange} type="card" items={tabData} />
        </div>
      </div>
      {showTableOnProgress === 1 ? <TableUserOnProgress /> : null}
      {showTableOnProgress === 2 ? <TableUserFinish /> : null}
    </div>
  );
};

export default TableUserCertificate;

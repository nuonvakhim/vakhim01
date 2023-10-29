import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { Input, Pagination, Select } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, message, Space } from "antd";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import profile from "/src/assets/Images/Base.svg";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import NoData from "/src/assets/Images/NoItem.svg";
import ViewInformationCertReq from "../PopUp/ViewInformationCertReq";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function CertificateRequest() {
  const [showModule, setModule] = useState(false);
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  //   Pagination Page
  const itemRender = (_, type, originalElement) => {
    if (type === "prev") {
      return <a>Previous</a>;
    }
    if (type === "next") {
      return <a>Next</a>;
    }
    return originalElement;
  };
  // Data Set Example to Table

  const [data, setData] = useState([
    {
      id: 1,
      fullName: "Sim Sokhen",
      userName: "sokhen70",
      email: "simsokhen70@gmail.com",
      dateOfBrith: "30-09-2023",
      type: "Create",
      profile: profile,
    },
    {
      id: 2,
      fullName: "Sim Sokhen",
      userName: "sokhen70",
      email: "simsokhen70@gmail.com",
      type: "Create",
      dateOfBrith: "30-09-2023",
      profile: profile,
    },
    {
      id: 3,
      fullName: "Sim Sokhen",
      userName: "sokhen70",
      email: "simsokhen70@gmail.com",
      dateOfBrith: "30-09-2023",
      type: "Create",
      profile: profile,
    },
    {
      id: 4,
      fullName: "Sim Sokhen",
      userName: "sokhen70",
      email: "simsokhen70@gmail.com",
      dateOfBrith: "30-09-2023",
      type: "Update",
      profile: profile,
    },
    {
      id: 5,
      fullName: "Sim Sokhen",
      userName: "sokhen70",
      email: "simsokhen70@gmail.com",
      dateOfBrith: "30-09-2023",
      type: "Update",
      profile: profile,
    },
    {
      id: 6,
      fullName: "Sim Sokhen",
      userName: "sokhen70",
      email: "simsokhen70@gmail.com",
      dateOfBrith: "30-09-2023",
      type: "Delete",
      profile: profile,
    },
    {
      id: 7,
      fullName: "Sim Sokhen",
      userName: "sokhen70",
      email: "simsokhen70@gmail.com",
      dateOfBrith: "30-09-2023",
      type: "Create",
      profile: profile,
    },
  ]);

  // Handle Button View Icon
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [ObjectIDToDelete, setObjectIDToDelete] = useState(0);
  const open = Boolean(anchorEl);
  const handleClick = (event, id) => {
    setObjectIDToDelete(id);
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleShowModule = () => {
    setModule(!showModule);
    setAnchorEl(null);
  };

  const handleApprove = () => {
    setAnchorEl(null);
    const obj = data.filter((item) => item.id !== ObjectIDToDelete);
    setData(obj);
    toast.success("Successfully Accepted", {
      autoClose: 1000,
    });
  };

  const handleDelete = () => {
    setAnchorEl(null);
    const obj = data.filter((item) => item.id !== ObjectIDToDelete);
    setData(obj);
    toast.success("Success Delete", {
      autoClose: 1000,
    });
  };

  return (
    <div className="h-fit relative py-6 pl-[28px] pr-[28.8px] flex-shrink-0 bg-white border rounded-myrounded shadow-myshadow">
      <ToastContainer />
      <div className="flex justify-between items-center self-stretch w-full">
        <div className="flex justify-between items-center gap-[29px]">
          <div className=" text-primary text-[16px] leading-normal text-center">
            List all user's requests
          </div>
          <Input
            size="large"
            placeholder="Search..."
            prefix={<SearchIcon className="w-[17px] h-[17px] flex-shrink-0 " />}
            className="w-[297px] py-[6px] px-[10px] items-center gap-[10px] rounded-[5px] border border-[#DCDCE4] bg-white shadow-myshadow"
          />
        </div>
        <div className="flex justify-end gap-3">
          {/* <Dropdown menu={menuProps} className="h-10 shadow-myshadow">
            <Button>
              <Space>
                <span className="text-myText capitalize pl-[12px] pr-0 ">
                  Short by :{" "}
                </span>
                <span className="text-myText capitalize font-bold pr-[19.91px]">
                  Newest
                </span>
                <DownOutlined />
              </Space>
            </Button>
          </Dropdown> */}
          <div className="flex justify-center items-center shadow-myshadow rounded-myrounded">
            <div className="flex items-center h-[32px] self-center gap-[10px] px-[12px] py-[5px] rounded-tl-[6px] rounded-bl-[6px] border bg-[#F9FBFF] ">
              Type of Request
            </div>
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
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-[33px] mb-[22px]">
        <table className="w-full text-sm text-left ">
          <thead className="text-xs uppercase bg-primary text-white ">
            <tr>
              <th scope="col" className="px-6 py-3">
                No.
              </th>
              <th scope="col" className="px-6 py-3">
                Profile
              </th>
              <th scope="col" className="px-6 py-3">
                Full Name
              </th>
              <th scope="col" className="px-6 py-3">
                Username
              </th>

              <th scope="col" className="px-6 py-3">
                Email Address
              </th>
              <th scope="col" className="px-6 py-3">
                Date of Birth
              </th>
              <th scope="col" className="px-6 py-3">
                Type
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          {data === null || data === undefined || data?.length === 0 ? (
            <tr>
              <td colSpan={8}>
                <div className="flex flex-col w-full justify-center items-center py-3">
                  <div className=" text-[16px] text-textblack">
                    You don't have any references yet.
                  </div>
                  <img src={NoData} alt="" className="" />
                </div>
              </td>
            </tr>
          ) : (
            <tbody>
              {data?.map((item, key) => (
                <tr className={key % 2 == 0 ? "bg-white" : " bg-lightgray "}>
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                  >
                    {item.id}
                  </th>
                  <td className="px-6 py-4">
                    {" "}
                    <img
                      src={item.profile}
                      alt=""
                      className=" rounded-full object-scale-down w-[40px] h-[40px] items-center"
                    />
                  </td>
                  <td className="px-6 py-4"> {item.fullName}</td>
                  <td className="px-6 py-4"> {item.userName}</td>

                  <td className="px-6 py-4"> {item.email}</td>
                  <td className="px-6 py-4"> {item.dateOfBrith}</td>
                  <td className="px-6 py-4"> {item.type}</td>
                  <td className="px-6 py-4">
                    <Button
                      id="demo-positioned-button"
                      aria-controls={open ? "demo-positioned-menu" : undefined}
                      aria-haspopup="true"
                      aria-expanded={open ? "true" : undefined}
                      onClick={(e) => handleClick(e, item.id)}
                    >
                      <MoreHorizIcon className="text-secondary" />
                    </Button>
                    <Menu
                      id="demo-positioned-menu"
                      aria-labelledby="demo-positioned-button"
                      anchorEl={anchorEl}
                      open={open}
                      onClose={handleClose}
                      anchorOrigin={{
                        vertical: "center",
                        horizontal: "center",
                      }}
                      transformOrigin={{
                        vertical: "top",
                        horizontal: "left",
                      }}
                    >
                      <MenuItem onClick={handleShowModule}>
                        <div className="text-myText text-[14.4px] flex gap-5">
                          <RemoveRedEyeOutlinedIcon className=" w-[24px] h-[24px] flex-shrink-0" />
                          View information
                        </div>
                      </MenuItem>
                      <MenuItem onClick={() => handleApprove()}>
                        <div className="text-[#0BA768] text-[14.4px] flex gap-5">
                          <CheckRoundedIcon className=" w-[24px] h-[24px] flex-shrink-0" />
                          Approve
                        </div>
                      </MenuItem>
                      <MenuItem onClick={() => handleDelete()}>
                        <div className="text-[#FE0000] text-[14.4px] flex gap-5">
                          <CloseRoundedIcon className=" w-[24px] h-[24px] flex-shrink-0" />
                          Reject
                        </div>
                      </MenuItem>
                    </Menu>
                  </td>
                </tr>
              ))}
            </tbody>
          )}
        </table>
      </div>
      <div
        className={
          data === null || data === undefined || data?.length === 0
            ? "hidden"
            : "w-full flex justify-between"
        }
      >
        <div className="text-lightprimary">
          Show
          <span className="text-primary mx-1">1-7 </span>
          of
          <span className="text-primary mx-1">30</span>
        </div>
        <Pagination
          total={70}
          itemRender={itemRender}
          // showTotal={(total, range) =>
          //   `${range[0]}-${range[1]} of ${total} items`
          // }
          pageSize={7}
          defaultCurrent={1}
          showSizeChanger={false}
        />
      </div>
      {showModule ? <ViewInformationCertReq setModule={setModule} /> : null}
    </div>
  );
}

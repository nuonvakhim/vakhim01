import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { Input, Pagination } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, message, Space } from "antd";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import profile from "/src/assets/Images/Base.svg";
import paginationStyle from "/src/components/Admins/Dashboard/PaginationStyle.css";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import NoData from "/src/assets/Images/NoItem.svg";
const TableUserFinish = () => {
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
  const data = [
    {
      id: "01",
      fullName: "Sim Sokhen",
      userName: "sokhen70",
      email: "simsokhen70@gmail.com",
      profile: profile,
      type: "create",
      status: "rejected",
    },
    {
      id: "02",
      fullName: "Sim Sokhen",
      userName: "sokhen70",
      email: "simsokhen70@gmail.com",
      profile: profile,
      type: "create",
      status: "rejected",
    },
    {
      id: "03",
      fullName: "Sim Sokhen",
      userName: "sokhen70",
      email: "simsokhen70@gmail.com",
      profile: profile,
      type: "create",
      status: "rejected",
    },
    {
      id: "04",
      fullName: "Sim Sokhen",
      userName: "sokhen70",
      email: "simsokhen70@gmail.com",
      profile: profile,
      type: "update",
      status: "Verified",
    },
    {
      id: "05",
      fullName: "Sim Sokhen",
      userName: "sokhen70",
      email: "simsokhen70@gmail.com",
      profile: profile,
      type: "delete",
      status: "rejected",
    },
    {
      id: "06",
      fullName: "Sim Sokhen",
      userName: "sokhen70",
      email: "simsokhen70@gmail.com",
      profile: profile,
      type: "create",
      status: "rejected",
    },
    {
      id: "07",
      fullName: "Sim Sokhen",
      userName: "sokhen70",
      email: "simsokhen70@gmail.com",
      profile: profile,
      type: "delete",
      status: "Verified",
    },
  ];
  return (
    <div className="">
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-[33px] mb-[22px]">
        <table className="w-full text-sm text-left table-auto ">
          <thead className="text-[14.4px] text-white capitalize bg-primary ">
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
                Type
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
              <th scope="col" className="px-32 py-3">
                Action
              </th>
            </tr>
          </thead>
          {data === null || data === undefined || data?.length === 0 ? (
            <tr>
              <td colSpan={8}>
                <div className="flex flex-col w-full justify-center items-center py-3">
                  <div className=" text-[16px] text-textblack">
                    No Data available
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
                    className="px-6 py-4 font-medium text-myText whitespace-nowrap "
                  >
                    {item?.id}
                  </th>
                  <td className="px-6 py-4">
                    {" "}
                    <img
                      src={item?.profile}
                      alt=""
                      className=" object-scale-down w-[40px] h-[40px] items-center"
                    />
                  </td>
                  <td className="px-6 py-4"> {item?.fullName}</td>
                  <td className="px-6 py-4"> {item?.userName}</td>
                  <td className="px-6 py-4"> {item?.email}</td>
                  <td className="px-6 py-4">
                    <span className="text-secondary capitalize text-[14.4px] leading-[22px] font-semibold">
                      {item?.type}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={
                        item?.status === "rejected"
                          ? "w-28 text-[14px] leading-[22px] outline outline-secondary rounded-[35px] flex px-[11px] justify-center items-center text-secondary  capitalize bg-[#FFF2E5]"
                          : "w-28 text-[14px] leading-[22px] outline outline-[#057444] rounded-[35px] flex px-[11px] justify-center items-center text-[#057444]  capitalize bg-[#F0FFF9]"
                      }
                    >
                      {item?.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex  flex-start gap-[15px]">
                      <button className="text-white bg-primary hover:bg-white hover:text-primary flex w-[120px] px-[16px] py-[8px] rounded-[6px] justify-center items-center gap-[10px] outline-2 outline  hover:outline-primary text-[14px]  ">
                        View reason
                      </button>
                      <button className="hover:text-white hover:bg-primary bg-white text-primary flex w-[120px] px-[16px] py-[8px] rounded-[6px] justify-center items-center gap-[10px] outline-2 outline outline-primary text-[14px]  ">
                        Start progress
                      </button>
                    </div>
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
    </div>
  );
};

export default TableUserFinish;
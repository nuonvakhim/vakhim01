import React, { useState } from "react";
import { Menu, MenuItem, Typography } from "@mui/material";
import { Button, Dropdown, Space } from "antd";
import { DownOutlined } from "@ant-design/icons";
import NoData from "/src/assets/Images/NoItem.svg";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import QrCode2Icon from "@mui/icons-material/QrCode2";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Fade from "@mui/material/Fade";
import ViewQRComponent from "./ViewQRComponent";
import AddIcon from '@mui/icons-material/Add';
import { NavLink } from "react-router-dom";

export default function ViewAsList() {
  const [showModule, setModule] = useState(false);
  const [showImage, setShowImage] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const date = new Date();
  //   Pagination Page
  // const itemRender = (_, type, originalElement) => {
  //   if (type === "prev") {
  //     return <a>Previous</a>;
  //   }
  //   if (type === "next") {
  //     return <a>Next</a>;
  //   }
  //   return originalElement;
  // };
  const formattedDate = date
    .toLocaleDateString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    })
    .replace(/ /g, " ");
  // Data Set Example to Table
  const data = [
    {
      id: 1,
      Name: "Bacll Certificate",
      created: formattedDate,
      Type: "Created",
    },
    {
      id: 2,
      Name: "Diploma Certificate",
      created: formattedDate,
      Type: "Updated",
    },
    {
      id: 3,
      Name: "Bacll Certificate",
      created: formattedDate,
      Type: "Created",
    },
    {
      id: 4,
      Name: "Diploma Certificate",
      created: formattedDate,
      Type: "Updated",
    },
  ];
  const handleMenuClick = (e) => {
    message.info("Click on menu item.");
    console.log("click", e);
  };
  const items = [
    {
      label: "All",
      key: "1",
    },
    {
      label: "Create",
      key: "2",
    },
    {
      label: "Update",
      key: "3",
    },
  ];

  const menuProps = {
    items,
    onClick: handleMenuClick,
  };
  return (
    <div className="py-4 px-7">
      <div className="flex justify-between items-center">
        <Typography
          noWrap
          component="div"
          sx={{
            color: "#004461",
            fontWeight: "500",
          }}
        >
          Total Certificate : <span className=" font-semibold">4</span>
        </Typography>
        <div className="flex justify-center items-center gap-3">
          <NavLink
          to="request-certificate"
            // onClick={() => setModule(false)}
            className=" rounded-[6px] w-[186px] text-white bg-primary hover:bg-white hover:text-primary outline outline-2 flex justify-center items-center gap-[10px] px-[16px] py-[8px] hover:outline-primary "
          >
            <AddIcon />
            Request more
          </NavLink>
          <Dropdown menu={menuProps} className="h-10 shadow-myshadow">
            <Button>
              <Space>
                <span className="text-myText  pl-[12px] pr-0 ">
                  Sort by Type :{" "}
                </span>
                <span className="text-myText font-bold pr-[19.91px]">All</span>
                <DownOutlined />
              </Space>
            </Button>
          </Dropdown>
          {/* <Dropdown menu={menuRequest} className="h-10 shadow-myshadow mx-2">
            <Button>
              <Space>
                <span className="text-myText  pl-[12px] pr-0 ">
                  Type of request :{" "}
                </span>
                <span className="text-myText font-bold pr-[19.91px]">
                  All
                </span>
                <DownOutlined />
              </Space>
            </Button>
          </Dropdown> */}
        </div>
      </div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-5 mb-[22px]">
        <table className="w-full text-sm text-left table-auto ">
          <thead className="text-[14.4px] text-white capitalize bg-primary ">
            <tr>
              <th scope="col" className="px-6 py-3">
                No.
              </th>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Verified on
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
                    No Data available
                  </div>
                  <img src={NoData} alt="" className="" />
                </div>
              </td>
            </tr>
          ) : (
            <tbody>
              {data?.map((item, index) => (
                <tr className={index % 2 == 0 ? "bg-white" : " bg-lightgray "}>
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-myText whitespace-nowrap "
                  >
                    {item?.id}
                  </th>
                  <td className="px-6 py-4"> {item?.Name}</td>
                  <td className="px-6 py-4"> {item?.created}</td>
                  {/* <td className="px-6 py-4"> {item?.email}</td> */}
                  <td className="px-6 py-4">
                    <span className="text-secondary capitalize text-[14.4px] leading-[22px] font-semibold">
                      {item?.Type}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div
                      key={index}
                      className="flex items-center gap-[10px] w-full"
                    >
                      <button className="flex px-[16px] py-[8px] gap-[10px] justify-center items-center rounded-[6px] bg-primary text-white hover:bg-white hover:text-primary outline outline-2 hover:outline-primary">
                        Export
                        <ExitToAppIcon />
                      </button>
                      <button
                        onClick={() => setModule(!showModule)}
                        className="border border-primary rounded-myrounded bg-white  py-[8px] flex px-[16px] gap-[10px] justify-center items-center text-primary hover:bg-primary hover:text-white outline outline-2 hover:outline-primary"
                      >
                        QR
                        <QrCode2Icon className="" />
                      </button>
                      <button
                        id="fade-button"
                        aria-controls={open ? "fade-menu" : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? "true" : undefined}
                        onClick={handleClick}
                        className="border border-primary rounded-myrounded bg-white  py-[8px] flex px-[10px] gap-[10px] justify-center items-center text-primary hover:bg-primary hover:text-white outline outline-2 hover:outline-primary"
                      >
                        <MoreVertIcon />
                      </button>
                      <Menu
                        id="fade-menu"
                        MenuListProps={{
                          "aria-labelledby": "fade-button",
                        }}
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        TransitionComponent={Fade}
                      >
                        <MenuItem
                          style={{ color: "#004461" }}
                          onClick={handleClose}
                        >
                          Request update
                        </MenuItem>
                        <MenuItem
                          style={{ color: "#004461" }}
                          onClick={handleClose}
                        >
                          Request &nbsp;{" "}
                          <span className="text-secondary">delete</span>{" "}
                        </MenuItem>
                      </Menu>
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
        {/* <Pagination
          total={70}
          itemRender={itemRender}
          // showTotal={(total, range) =>
          //   `${range[0]}-${range[1]} of ${total} items`
          // }
          pageSize={7}
          defaultCurrent={1}
          showSizeChanger={false}
        /> */}
      </div>
      {showModule ? <ViewQRComponent setModule={setModule} /> : null}
    </div>
  );
}

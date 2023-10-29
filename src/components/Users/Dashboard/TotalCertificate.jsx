import React, { useState } from "react";
import { Menu, MenuItem, Typography } from "@mui/material";
import { Button, Dropdown, Space } from "antd";
import { DownOutlined } from "@ant-design/icons";
import NoData from "/src/assets/Images/NoItem.svg";
import CertificateImage from "/src/assets/Images/certqr.jpg";
import ImagePreview from "../../Admins/CertificateManagement/ImagePreview";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import QrCode2Icon from "@mui/icons-material/QrCode2";
import ViewQRComponent from "./ViewQRComponent.jsx";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Fade from "@mui/material/Fade";
import AddIcon from '@mui/icons-material/Add';
import { NavLink } from "react-router-dom";

export default function TotalCertificate() {
  const [showModule, setModule] = useState(false);
  const [showImage, setShowImage] = useState(false);
  const date = new Date();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const formattedDate = date
    .toLocaleDateString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    })
    .replace(/ /g, " ");
  var data = [
    {
      Name: "Bacll Certificate",
      created: formattedDate,
      image: CertificateImage,
      Type: "Created",
    },
    {
      Name: "Diploma Certificate",
      created: formattedDate,
      image: CertificateImage,
      Type: "Updated",
    },
    {
      Name: "Bacll Certificate",
      created: formattedDate,
      image: CertificateImage,
      Type: "Created",
    },
    {
      Name: "Diploma Certificate",
      created: formattedDate,
      image: CertificateImage,
      Type: "Updated",
    },
  ];
  const [state, setstate] = useState();
  const handleShowImage = (Image) => {
    setstate(Image);
    setShowImage(true);
  };
  const handleMenuClick = (e) => {
    message.info("Click on menu item.");
    console.log("click", e);
  };
  // const items = [
  //   {
  //     label: "All",
  //     key: "1",
  //   },
  //   {
  //     label: "Today",
  //     key: "2",
  //   },
  //   {
  //     label: "Yesterday",
  //     key: "3",
  //   },
  //   {
  //     label: "Last 7 days",
  //     key: "4",
  //   },
  //   {
  //     label: "Last 30 days",
  //     key: "5",
  //   },
  // ];
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
  // const menuRequest = {
  //   itemsType,
  //   onClick: handleMenuClick,
  // };

  return (
    <div>
      <div className="flex justify-between items-center mt-4 px-6">
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
      <div className="h-full relative w-full">
        {showImage ? (
          <ImagePreview setShowImage={setShowImage} Image={state} />
        ) : null}
        <div className="w-full rounded-[6px] flex-shrink-0 px-6 pt-[31px]">
          {data === null || data === undefined || data?.length === 0 ? (
            <div className="flex flex-col w-full h-[506px] place-content-center justify-center items-center py-3">
              <div className=" text-[16px] text-textblack text-center">
                You don't have any template certificate yet.
              </div>
              <img src={NoData} alt="Image" className="" />
            </div>
          ) : (
            <div class=" w-full sm:rounded-lg grid grid-cols-3 gap-[64px] justify-between items-center h-auto relative ">
              {data?.map((item, index) => (
                <div className=" cursor-pointer shadow-myshadow rounded-myrounded border w-fit h-fit flex justify-center flex-col transform transition duration-500 hover:scale-105 hover:shadow-2xl hover:border">
                  <img
                    src={item?.image}
                    alt=""
                    onClick={() => handleShowImage(item?.image)}
                    className="h-[211px] flex-shrink-0 object-center mx-[22px] mt-[22px] "
                  />
                  <div className="w-full h-[1px] bg-[#DCDCE4] mt-[37px] mb-[19px] " />
                  <div className="px-[27px] mb-[25px] gap-[10px] flex flex-col  w-full">
                    <div className="flex justify-between items-center">
                      <div className="text-primary text-[18px] leading-normal  ">
                        {item?.Name}
                      </div>
                      <div className="text-primary rounded border border-green-700 w-fit px-2 text-[14.4px] leading-normal  ">
                        {item?.Type}
                      </div>
                    </div>

                    <div className="text-primary text-[14.4px] leading-normal  ">
                      Your certificate have been Verified on :
                    </div>
                    <div className="text-primary text-[14.4px] leading-normal  ">
                      {item?.created}
                    </div>

                    <div
                      key={index}
                      className="flex items-center justify-between gap-[10px] w-full"
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
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        {showModule ? <ViewQRComponent setModule={setModule} /> : null}
      </div>
    </div>
  );
}

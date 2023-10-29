import React, { useEffect, useState } from "react";
import NoData from "/src/assets/Images/NoItem.svg";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import SetReferencePopUp from "../PopUp/SetReferencePopUp";
import DeletePopUP from "../PopUp/DeletePopUP";
import CertificateImage from "/src/assets/Images/Certificate1.svg";
import EditNoteIcon from "@mui/icons-material/EditNote";
import ImagePreview from "./ImagePreview";
import { NavLink } from "react-router-dom";

function TableCreateTemplate() {
  const [showModule, setModule] = useState(false);
  const [DeleteModule, setDeleteModule] = useState(false);
  const [showImage, setShowImage] = useState(false);
  const date = new Date();
  const formattedDate = date
    .toLocaleDateString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    })
    .replace(/ /g, " ");
  var data = [
    {
      file: "File Name",
      created: formattedDate,
      image: CertificateImage,
    },
    {
      file: "File Name",
      created: formattedDate,
      image: CertificateImage,
    },
    {
      file: "File Name",
      created: formattedDate,
      image: CertificateImage,
    },
    {
      file: "File Name",
      created: formattedDate,
      image: CertificateImage,
    },
  ];
  const [state, setstate] = useState();
  const handleShowImage = (Image) => {
    setstate(Image);
    setShowImage(true);
  };

  return (
    <div className="h-full relative w-full pl-[33px] pr-[32px] bg-white shadow-myshadow rounded-myrounded mt-4 py-6">
      {showImage ? (
        <ImagePreview setShowImage={setShowImage} Image={state} />
      ) : null}
      <div className="inline-flex justify-between items-center w-full">
        <div className="">
          <div className="text-primary text-[16px] leading-normal">
            Create certificate
          </div>
          <div className="text-secondary text-[14px] leading-normal  text-center">
            List all certificate templates
          </div>
        </div>
        <NavLink
          className="text-white bg-primary text-[14px] px-[16px] py-[8px] w-[186px] rounded-[6px] inline-flex items-center  justify-center hover:bg-white hover:outline-primary hover:text-primary outline "
          to="design" 
        >
          Create template
        </NavLink>
      </div>
      <div className="mt-[37px] w-full rounded-[6px] flex-shrink-0 px-6 pt-[31px]">
        {data === null || data === undefined || data?.length === 0 ? (
          <div className="flex flex-col w-full h-[506px] place-content-center justify-center items-center py-3">
            <div className=" text-[16px] text-textblack text-center">
              You don't have any template certificate yet.
            </div>
            <img src={NoData} alt="Image" className="" />
          </div>
        ) : (
          <div class=" w-full sm:rounded-lg grid grid-cols-3 gap-[64px] items-center h-auto relative  b">
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
                  <div className="text-primary text-[18px] leading-normal  ">
                    {item?.file}
                  </div>
                  <div className="text-[14.4px] leading-normal self-stretch text-[#64748B] ">
                    {item?.created}
                  </div>
                  <div
                    key={index}
                    className="flex items-center gap-[10px] w-full"
                  >
                    <button className="flex w-full px-[16px] py-[8px] gap-[10px] justify-center items-center rounded-[6px] bg-primary text-white hover:bg-white hover:text-primary outline outline-2 hover:outline-primary ">
                      Edit
                      <EditNoteIcon />
                    </button>
                    <button
                      onClick={() => setDeleteModule(!DeleteModule)}
                      className="border border-[#D02D20] rounded-[5px] bg-white  p-[8px] justify-between flex"
                    >
                      <DeleteForeverIcon className="text-secondary w-[41px] h-[40px]" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      {showModule ? <SetReferencePopUp setModule={setModule} /> : null}
      {DeleteModule ? <DeletePopUP setDeleteModule={setDeleteModule} /> : null}
    </div>
  );
}

export default TableCreateTemplate;

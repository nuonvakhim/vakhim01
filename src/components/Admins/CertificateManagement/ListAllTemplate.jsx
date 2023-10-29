import React, { useState } from "react";
import EditNoteIcon from "@mui/icons-material/EditNote";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { useOutletContext } from "react-router-dom";

export default function ListAllTemplate() {
  const [data] = useOutletContext();
  const [state, setstate] = useState();
  const [showImage, setShowImage] = useState(false);
  const handleShowImage = (Image) => {
    setstate(Image);
    setShowImage(true);
  };

  return (
    <div class=" w-full sm:rounded-lg grid grid-cols-3 gap-[64px] items-center h-[700px] relative overflow-y-auto">
      {data?.map((item, index) => (
        <div className=" shadow-myshadow rounded-myrounded border w-fit h-fit flex justify-center flex-col transform transition duration-500 hover:scale-105 hover:shadow-2xl hover:border">
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
            <div key={index} className="flex items-center gap-[10px] w-full">
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
  );
}

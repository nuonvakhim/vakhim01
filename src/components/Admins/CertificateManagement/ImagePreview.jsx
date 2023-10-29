import React from "react";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import ClickOutside from "../../ClickOutside";

const ImagePreview = ({ Image, setShowImage }) => {
  console.log("Image", Image);
  return (
    <div className="flex absolute flex-col py-10 px-10 justify-center items-center z-100 overflow-x-hidden overflow-y-hidden w-full p-4 md:inset-0 h-[calc(100%-1rem)] md:h-full backdrop-blur-[2px] bg-white pb-4">
      <ClickOutside
        onClick={() => setShowImage(false)}
        className="w-full h-full "
      >
        <button
          onClick={() => setShowImage(false)}
          className="flex justify-end w-full "
        >
          <CloseRoundedIcon />
        </button>
        <img src={Image} alt="" className="w-full  object-contain h-full" />
      </ClickOutside>
    </div>
  );
};

export default ImagePreview;

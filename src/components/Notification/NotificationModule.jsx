import React from "react";
import ImageProfile from "/src/assets/Images/profile.svg";
const NotificationModule = ({ setModule }) => {
  var data = [
    {
      fullName: "Sokhim",
      userName: "sokhim32",
      type: "modify certificate",
      Image: ImageProfile,
      timeRequest: "1h",
    },
    {
      fullName: "Sokhim",
      userName: "sokhim32",
      type: "modify certificate",
      Image: ImageProfile,
      timeRequest: "1h",
    },
    {
      fullName: "Sokhim",
      userName: "sokhim32",
      type: "modify certificate",
      Image: ImageProfile,
      timeRequest: "1h",
    },
    {
      fullName: "Sokhim",
      userName: "sokhim32",
      type: "modify certificate",
      Image: ImageProfile,
      timeRequest: "1h",
    },
    {
      fullName: "Sokhim",
      userName: "sokhim32",
      type: "modify certificate",
      Image: ImageProfile,
      timeRequest: "1h",
    },
    {
      fullName: "Sokhim",
      userName: "sokhim32",
      type: "modify certificate",
      Image: ImageProfile,
      timeRequest: "1h",
    },
    {
      fullName: "Sokhim",
      userName: "sokhim32",
      type: "modify certificate",
      Image: ImageProfile,
      timeRequest: "1h",
    },
    {
      fullName: "Sokhim",
      userName: "sokhim32",
      type: "modify certificate",
      Image: ImageProfile,
      timeRequest: "1h",
    },
    {
      fullName: "Sokhim",
      userName: "sokhim32",
      type: "modify certificate",
      Image: ImageProfile,
      timeRequest: "1h",
    },
    {
      fullName: "Sokhim",
      userName: "sokhim32",
      type: "modify certificate",
      Image: ImageProfile,
      timeRequest: "1h",
    },
    {
      fullName: "Sokhim",
      userName: "sokhim32",
      type: "modify certificate",
      Image: ImageProfile,
      timeRequest: "1h",
    },
  ];
  return (
    // <div className=" flex absolute justify-center items-center z-100 overflow-x-hidden overflow-y-hidden w-full p-4 md:inset-0 h-[calc(100%-1rem)] md:h-full backdrop-blur-[2px] bg-black/10 shadow-myshadow ">
      <div className="absolute right-0 top-16 z-100 w-[593px] h-[35rem] flex-shrink-0 rounded-[10px] px-[17px] pt-[31px] bg-white shadow-myshadow overflow-y-auto ">
        <div className=" text-primary text-[20px] font-semibold leading-[32px] -tracking-[0.4px] mb-[25px] ">
          Notification
        </div>
          {data?.map((item, key) => (
            <div
              className={
                key % 2 == 0
                  ? "flex  px-[12px] py-[25px] gap-[20px]  bg-white "
                  : "flex  px-[12px] py-[25px] gap-[20px]  bg-lightgray "
              }
            >
              <img src={item?.Image} alt="" />
              <div className="flex flex-col w-full">
                <div className="flex justify-between w-full">
                  <div className="flex gap-[5px]">
                    <span className="text-[16px] text-primary font-bold  ">
                      {item?.fullName}
                    </span>
                    <span className="text-[15px] font-normal leading-[24px] text-[#9A9FA5] ">
                      @{item?.userName}
                    </span>
                  </div>
                  <div className="flex gap-[10px]">
                    <div className="text-primary text-[13px] font-semibold ">
                      {item?.timeRequest}
                    </div>
                    <div className="w-[12px] h-[12px] bg-secondary rounded-full " />
                  </div>
                </div>
                <div className="flex gap-[4px] items-center">
                  <span className="text-[15px] text-[#9A9FA5]">Requested</span>
                  <span className="text-[15px] text-primary font-bold  capitalize ">
                    {item?.type}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
    // </div>
  );
};

export default NotificationModule;

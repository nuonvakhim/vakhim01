import { Card } from "antd";
import React from "react";
import image from "/src/assets/Images/imagecheck.svg";
import card from "/src/assets/Icons/card.svg";
import verified from "/src/assets/Icons/verifyGreen.svg";
import checkdoc from "/src/assets/Icons/checkDoc.svg";
import notifi from "/src/assets/Icons/notifyBell.svg";
import leaf from "/src/assets/Images/Leaf.svg";
const Landing2 = () => {
  return (
    <div className="bg-mainbg bg-contain h-[920px] px-[100px]">
      <div className="flex flex-col w-fit bg-transparent pt-[120px] ">
        <div className="capitalize mb-4 px-2 text-4xl text-primary ">
          main features
        </div>
        <div className="h-[5px] rounded-[20px] self-stretch bg-secondary w-full "></div>
      </div>
      <div>
        <div className="pr-[296px] pt-[112px]  space-y-[20px]">
          <div className="flex w-full gap-[82px] justify-between items-start">
            <div className="w-1/2 h-[240px] flex flex-col items-start gap-1 flex-shrink-0">
              <div className=" text-[18px] text-transparent bg-clip-text leading-10 capitalize inline-block bg-secondary ">
                features
              </div>
              <div>
                <p className="text-[18px] text-primary leading-5 font-medium ">
                  Our system is a very reliable and secure system on a unified
                  platform.
                </p>
                <p className="text-[16px] leading-5 pt-3 text-primary ">
                  CertLock is a platform that provides trustworthy and legal
                  documents. Additionally, users can request, access, and
                  distribute the verified certificates, while the administrator
                  can easily approve or reject upcoming requests from the users
                  via the system.
                </p>
              </div>
            </div>
            <div className="w-1/2 h-[240px] flex justify-between flex-shrink-0">
              <div className=" inline-flex items-start justify-between gap-7 ">
                <div className="flex w-[235px] h-[240px] pt-[33px] pb-[28px] items-center justify-end text-center flex-col rounded-[24px] text-myText hover:text-white bg-white hover:bg-primary hover:bg-opacity-50">
                  <div className=" flex p-[10px] flex-col items-start gap-[10px]">
                    <div className="flex flex-col items-center gap-[9px] ">
                      <div className=" w-[40px] h-[40px] rounded-full bg-[#FFF7AE] flex justify-center">
                        <img src={card} alt="" className="object-contain " />
                      </div>
                      <div className=" text-[18px] leading-6 ">
                        Create certificate
                      </div>
                      <div className=" text-[14.4px] leading-6  ">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        molestiae quas vel sint com
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex w-[235px] h-[240px] pt-[33px] pb-[28px] items-center justify-end text-center flex-col rounded-[24px] text-myText hover:text-white bg-white hover:bg-primary hover:bg-opacity-50 ">
                  <div className=" flex p-[10px] flex-col items-start gap-[10px]">
                    <div className="flex flex-col items-center gap-[9px] ">
                      <div className=" w-[40px] h-[40px] rounded-full bg-[#B8FFB7] flex justify-center">
                        <img
                          src={verified}
                          alt=""
                          className="object-contain "
                        />
                      </div>
                      <div className=" text-[18px] leading-6 ">
                        Verified certificate
                      </div>
                      <div className=" text-[14.4px] leading-6  ">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        molestiae quas vel sint com
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex w-full gap-[82px] mb-[274px]  justify-between items-start">
            <div className="w-1/2 h-[240px] flex flex-col items-start gap-1 flex-shrink-0">
              <div className=" bg-white rounded-[6px]">
                <img
                  src={image}
                  alt=""
                  className="bottom-[14px] right-[7px] relative rounded-[6px]"
                />
              </div>
            </div>
            <div className="w-1/2 h-[240px] flex-shrink-0">
              <div className=" inline-flex items-start gap-7 ">
                <div className="flex w-[235px] h-[240px] pt-[33px] pb-[28px] items-center justify-end text-center flex-col rounded-[24px] text-myText hover:text-white bg-white hover:bg-primary hover:bg-opacity-50 ">
                  <div className=" flex p-[10px] flex-col items-start gap-[10px]">
                    <div className="flex flex-col items-center gap-[9px] ">
                      <div className=" w-[40px] h-[40px] rounded-full bg-[#FFBDBD] flex justify-center">
                        <img
                          src={checkdoc}
                          alt=""
                          className="object-contain "
                        />
                      </div>
                      <div className="  text-[18px] leading-6 ">
                        View & Check
                      </div>
                      <div className=" text-[14.4px] leading-6  ">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        molestiae quas vel sint com
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex w-[235px] h-[240px] pt-[33px] pb-[28px] items-center justify-end text-center flex-col rounded-[24px] text-myText hover:text-white bg-white hover:bg-primary hover:bg-opacity-50 ">
                  <div className=" flex p-[10px] flex-col items-start gap-[10px]">
                    <div className="flex flex-col items-center gap-[9px] ">
                      <div className=" w-[40px] h-[40px] rounded-full bg-[#AEC4FD] flex justify-center">
                        <img src={notifi} alt="" className="object-contain " />
                      </div>
                      <div className="  text-[18px] leading-6 ">
                        Notification
                      </div>
                      <div className="  text-[14.4px] leading-6  ">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        molestiae quas vel sint com
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing2;

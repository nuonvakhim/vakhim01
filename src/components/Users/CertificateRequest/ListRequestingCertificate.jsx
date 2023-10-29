import React from 'react'
import pendingstatus from "../../../assets/images/pendingstatus.svg";

export default function ListRequestingCertificate() {
    const date = new Date();

    const formattedDate = date
      .toLocaleDateString("en-GB", {
        day: "numeric",
        month: "long",
        year: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
      })
      .replace(/ /g, " ");
    var data = [
      {
        Name: "Bacll Certificate",
        created: formattedDate,
        image: pendingstatus,
        status: "pending"
      },
      {
        Name: "Bacll Certificate",
        created: formattedDate,
        image: pendingstatus,
        status: "pending"
      },
      {
        Name: "Bacll Certificate",
        created: formattedDate,
        image: pendingstatus,
        status: "pending"
  
      },
    ];
  
    return (
      <div className="h-full relative w-full">
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
                <div className="cursor-pointer shadow-myshadow rounded-myrounded border w-fit h-fit flex justify-center flex-col transform transition duration-500 hover:scale-105 hover:shadow-2xl hover:border">
                  {/* header card */}
                  <div className={` px-[27px] py-4 gap-[10px] flex flex-col bg-lightgray  w-full ${item.status === "pending" ? "bg-lightgray" : "" || item.status === "approved" ? "bg-[#06c2714f]" : "" || item.status === "verified" ? "bg-[#00975661]" : "" || item.status === "rejected" ? "bg-red-200" : "" }`}>
                    <div className="flex justify-between items-center">
                      <div className="text-primary text-[18px] leading-normal  ">
                        {item?.Name}
                      </div>
                      <div className={`text-primary rounded border h-2 w-4 text-[14.4px] leading-normal ${item.status === "pending" ? "bg-gray-300" : "" || item.status === "approved" ? "bg-green-500" : "" || item.status === "verified" ? "bg-green-900" : "" || item.status === "rejected" ? "bg-red-600" : "" }`}>
                      </div>
                    </div>
                    <div className="text-primary text-[14.4px] leading-normal  ">
                      {item?.created}
                    </div>
                  </div>
                  {/* middle of card */}
                  <div className="px-[27px] gap-[10px] flex flex-col bg-white  w-full">
                    <img src={item.image} alt="" />
                  </div>
                  {/* footer of card */}
                  <div className="px-[27px] gap-[10px] flex flex-col bg-lightgray w-full py-2">
                    <div className="flex justify-center items-center">
                      <div className="text-primary text-[16px] leading-normal  ">
                        Status
                      </div>
                    </div>
                    <div className="flex justify-center items-center">
                      <div className="text-primary text-[14.4px] leading-normal  ">
                        {item?.status}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  }

import React, { useState } from "react";
import NoData from "/src/assets/Images/NoItem.svg";
import EditNoteIcon from "@mui/icons-material/EditNote";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import SetReferencePopUp from "../PopUp/SetReferencePopUp";
import DeletePopUP from "../PopUp/DeletePopUP";

const SetReferenceForRequest = () => {
  const [showModule, setModule] = useState(false);
  const [DeleteModule, setDeleteModule] = useState(false);
  console.log("showModule", showModule);
  var data = [
    {
      id: 1,
      typeof: "ID",
      description:
        "simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
    },
    {
      id: 2,
      typeof: "ID",
      description:
        "simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
    },
    {
      id: 3,
      typeof: "ID",
      description:
        "simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
    },
    {
      id: 4,
      typeof: "ID",
      description:
        "simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
    },
  ];

  return (
    <div className="h-screen relative w-full px-[32px] py-6 bg-white shadow-myshadow rounded-myrounded">
      {showModule ? <SetReferencePopUp setModule={setModule} /> : null}
      {DeleteModule ? <DeletePopUP setDeleteModule={setDeleteModule} /> : null}
      <div className="inline-flex justify-between items-center w-full">
        <div className="">
          <div className="text-primary text-[24px] leading-normal">
            Set reference for request
          </div>
          <div className="text-secondary text-[14px] leading-normal  text-center">
            Set necessary reference for user to complete when they make request
          </div>
        </div>
        <button
          className="text-white bg-primary text-[14px] px-[16px] py-[8px] w-[186px] rounded-[6px] inline-flex items-center  justify-center hover:bg-white hover:outline-primary hover:text-primary outline "
          onClick={() => setModule(!showModule)}
        >
          Set references
        </button>
      </div> 
      <div className="mt-[37px] border rounded-[6px] flex-shrink-0">
        {data === null || data === undefined ? (
          <div className="flex flex-col w-full h-[506px] place-content-center justify-center items-center py-3">
            <div className=" text-[16px] text-textblack">
              You don't have any references yet.
            </div>
            <img src={NoData} alt="" className="" />
          </div>
        ) : (
          <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table class="w-full text-sm  text-myText text-center">
              <thead class="text-xs text-primary uppercase bg-white ">
                <tr>
                  <th scope="col" class="px-6 py-3">
                    NO
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Type of refernce
                  </th>
                  <th scope="col" class="px-6 py-3 text-left">
                    Description
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 border-l border-primary text-center"
                  >
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {data?.map((item, key) => (
                  <tr className={key % 2 == 0 ? "bg-white" : " bg-lightgray "}>
                    <th
                      scope="row"
                      class="px-6 py-4 font-medium  whitespace-nowrap  "
                    >
                      {item?.id}
                    </th>
                    <td class="px-6 py-4"> {item?.typeof}</td>
                    <td class="px-6 py-4  text-left"> {item?.description}</td>
                    <td class="px-6 py-4">
                      <div className="flex items-center justify-between">
                        <button
                          className="text-primary "
                          onClick={() => setModule(!showModule)}
                        >
                          <EditNoteIcon />
                        </button>
                        <button
                          className="text-[#EB5757]"
                          onClick={() => setDeleteModule(!DeleteModule)}
                        >
                          <DeleteForeverIcon />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default SetReferenceForRequest;

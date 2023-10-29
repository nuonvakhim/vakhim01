import React, { useEffect, useState } from "react";
import DisabledByDefaultRoundedIcon from "@mui/icons-material/DisabledByDefaultRounded";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import AddBoxRoundedIcon from "@mui/icons-material/AddBoxRounded";
import RemoveCircleOutlineRoundedIcon from "@mui/icons-material/RemoveCircleOutlineRounded";
import { Input } from "antd";
import myStyle from "./myStyle.css";
import addWhite from "/src/assets/Icons/add(white).svg";
import addBlack from "/src/assets/Icons/add(black).svg";
import { Checkbox, FormGroup } from "@mui/material";

function SetReferencePopUp({ setModule }) {
  const [isShown, setIsShown] = useState(false);
  const { TextArea } = Input;
  const inputArr = [];

  const [arr, setArr] = useState(inputArr);

  var radioData = [
    {
      value: "ID card",
    },
    {
      value: "Birth certificate",
    },
    {
      value: "Certificate",
    },
    {
      value: "Other",
    },
  ];

  const clickHandleButton = () => {
    setArr((s) => {
      return [
        ...s,
        {
          value: "",
        },
      ];
    });
  };

  const handleChange = (e) => {
    e.preventDefault();

    const index = e.target.id;
    setArr((s) => {
      const newArr = s.slice();
      newArr[index].value = e.target.value;
      return newArr;
    });
  };

  const handleDelete = (index) => {
    const newArray = [...arr];
    newArray.splice(index, 1);
    setArr(newArray);
  };

  const handleAdd = (i) => {
    radioData.push(...arr);
    handleDelete(i);
  };

  return (
    <div className=" flex absolute justify-center items-center z-100 overflow-x-hidden overflow-y-hidden w-full p-4 md:inset-0 h-[calc(100%-1rem)] md:h-full backdrop-blur-[2px] bg-black/10 shadow-myshadow ">
      <div className="bg-white border mt-3 mx-3 w-[891px] h-fit pb-6 rounded-[10px] ">
        <div className="bg-primary text-white inline-flex w-full justify-between py-[15px] px-4 rounded-t-[10px]">
          <div className="text-center">Set reference for user</div>
          <button onClick={() => setModule(false)}>
            <DisabledByDefaultRoundedIcon className="w-[17px] h-[17px] text-white " />
          </button>
        </div>
        <div className="flex flex-col pl-[116px] pr-[86px] pt-[20px] gap-[5px] ">
          <div className="text-primary text-[20px] leading-[20px] ">
            Reference
          </div>
          <div className="text-[14.4px] leading-[30px] text-textblack  ">
            The reference is what you want to explain to the use for more
            details.
          </div>
          <TextArea
            //   value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="The reference with which you can describe information to the users"
            autoSize={{ minRows: 5, maxRows: 5 }}
          />
          <div className="text-primary text-[20px] leading-[28px] ">
            Choose type
          </div>
          <div className="text-myText">Please provide an type for users</div>
          <div className="relative overflow-x-auto h-44">
            <FormControl>
              <FormLabel id="demo-radio-buttons-group-label"></FormLabel>
              {/* <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                name="radio-buttons-group"
                className=""
              >
                {radioData?.map((item, key) => (
                  <FormControlLabel
                    value={item.value}
                    control={<Radio />}
                    label={item.value}
                  />
                ))}
              </RadioGroup> */}
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label="ID Card"
                />
                <FormControlLabel
                  control={<Checkbox />}
                  label="Birth certificate"
                />
                <FormControlLabel
                  control={<Checkbox />}
                  label="Certificate"
                />
                <FormControlLabel
                  control={<Checkbox />}
                  label="Other"
                  onClick={clickHandleButton}
                />
              </FormGroup>
            </FormControl>
          </div>

            <div className="text-primary text-[16px] leading-[28px] ">
              Add other type
            </div>
          <div className="flex flex-col relative overflow-x-auto h-auto">
            {arr?.map((item, i) => (
              <div className="flex gap-4 mt-3">
                <Input
                  placeholder="Please Input The Type"
                  className="border py-[8px] px-[16px] rounded-[6px] text-myText"
                  onChange={handleChange}
                  value={item.value}
                  id={i}
                  type={item.type}
                />
                <button
                  className="border border-[#0BA768] text-[#0BA768] rounded-[6px] py-[8px] justify-center px-[16px] w-[130px] flex flex-row gap-2"
                  onClick={() => handleAdd(i)}
                >
                  <AddBoxRoundedIcon />
                  Add
                </button>
                <button
                  className="border border-[#C31E0A] text-[#C31E0A] rounded-[6px] py-[8px] justify-center px-[16px] w-[130px] flex flex-row gap-2"
                  onClick={() => handleDelete(i)}
                >
                  <RemoveCircleOutlineRoundedIcon />
                  Remove
                </button>
              </div>
            ))}
          </div>
          <div className="w-full bg-[#DCDCE4] h-[1px] mt-[15px]"></div>
          <div className="flex justify-end my-[15px]">
            <button
              onMouseEnter={() => setIsShown(true)}
              onMouseLeave={() => setIsShown(false)}
              className="bg-primary text-white rounded-[6px] flex justify-center items-center w-[217px] px-[16px] py-[8px] hover:bg-white hover:text-primary outline outline-2 hover:outline-primary "
            >
              Create referencees
              <img
                src={!isShown ? addWhite : addBlack}
                alt=""
                className="ml-3"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SetReferencePopUp;

import React, { useState } from "react";
import DisabledByDefaultRoundedIcon from "@mui/icons-material/DisabledByDefaultRounded";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import AddBoxRoundedIcon from "@mui/icons-material/AddBoxRounded";
import RemoveCircleOutlineRoundedIcon from "@mui/icons-material/RemoveCircleOutlineRounded";
import { Input } from "antd";
import myStyle from "./myStyle.css"


const TemplatePopUp = () => {
  const { TextArea } = Input;
  const inputArr = [
    {
      type: "text",
      id: 1,
      value: "",
    },
  ];

  const [arr, setArr] = useState(inputArr);

  var radioData = [
    {
      value: "idCard",
      label: "ID card",
    },
    {
      value: "birth_certificate",
      label: "Birth certificate",
    },
    {
      value: "certificate",
      label: "Certificate",
    },
    {
      value: "other",
      label: "Other",
    },
  ];

  const clickHandleButton = () => {
    setArr((s) => {
      return [
        ...s,
        {
          type: "text",
          value: "",
        },
      ];
    });
  };

  const handleChange = e => {
    e.preventDefault();

    const index = e.target.id;
    setArr(s => {
      const newArr = s.slice();
      newArr[index].value = e.target.value;
      return newArr;
    });
  };


  return (
    <div className="bg-white border mt-3 mx-3 w-[891px] h-[784px] rounded-[10px]">
      <div className="bg-primary text-white inline-flex w-full justify-between py-[19px] px-4 rounded-t-[10px]">
        <div></div>
        <div className="text-center">Set reference for user</div>
        <DisabledByDefaultRoundedIcon className="w-[17px] h-[17px] text-primary " />
      </div>
      <div className="flex flex-col pl-[116px] pr-[86px] pt-[42px] ">
        <div className="text-primary text-[20px] leading-[20px] ">
          Reference
        </div>
        <div className="text-[14.4px] leading-[30px] text-textblack  ">
          The reference is what you want to explain to the use for more details.
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
        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label">
            <div className="text-myText">Please provide an type for users</div>
          </FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            name="radio-buttons-group"
            className=""
          >
            {radioData?.map((item, key) => (
              <FormControlLabel
                value={item.value}
                control={<Radio />}
                label={item.label}
              />
            ))}
          </RadioGroup>
        </FormControl>
        <button
          className="flex items-center gap-[32px] mt-[39px] "
          onClick={clickHandleButton}
        >
          <AddBoxRoundedIcon className="text-primary w-[26px] h-[26px] flex-shrink-0  " />
          <div className="text-primary text-[20px] leading-[28px] ">
            Add type
          </div>
        </button>
        <div className="flex flex-col">
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
            <button className="border border-[#0BA768] text-[#0BA768] rounded-[6px] py-[8px] justify-center px-[16px] w-[130px] flex flex-row gap-2" onCli >
                <AddBoxRoundedIcon />
                Add
              </button>
              <button className="border border-[#C31E0A] text-[#C31E0A] rounded-[6px] py-[8px] justify-center px-[16px] w-[130px] flex flex-row gap-2">
                <RemoveCircleOutlineRoundedIcon />
                Remove
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TemplatePopUp;

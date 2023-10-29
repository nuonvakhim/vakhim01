import React, { useState } from "react";

import { Menu } from "antd";
import myStyle from "./myStyle.css";
const items = [
  {
    label: "FEATURE",
    key: "feature",
  },
  {
    label: "HOW IT WORKS",
    key: "howitworks",
  },
  {
    label: "ABOUT US",
    key: "aboutus",
  },
  {
    label: "CONTACT US",
    key: "contactus",
  },
];

const NavBarLanding = () => {
  const [current, setCurrent] = useState("mail");
  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };
  return (
    <Menu
      onClick={onClick}
      selectedKeys={[current]}
      mode="horizontal"
      items={items}
      style={{
        myStyle,
        backgroundColor: "transparent",
        color: "#004461",
      }}
    />
  );
};
export default NavBarLanding;

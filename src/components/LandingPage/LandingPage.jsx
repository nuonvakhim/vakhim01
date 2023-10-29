import { Button } from "antd";
import React from "react";
import Footer from "./Footer";
import Landing1 from "./Landing1";
import Landing2 from "./Landing2";
import Landing3 from "./Landing3";
import Landing4 from "./Landing4";
import NavBarLanding from "./NavBarLanding";

function LandingPage() {
  return (
    <div className=" w-full h-full inline-flex justify-center flex-col ">
      <Landing1 />
      <Landing2 />
      <Landing3 />
      <Landing4 />
      <Footer />
    </div>
  );
}

export default LandingPage;

import React from "react";
import NavBarLanding from "./NavBarLanding";
import image from "../../assets/Images/imageLanding.svg";
import Logo from "/src/assets/Icons/Logo.svg";
import { NavLink } from "react-router-dom";
function Landing1() {
  return (
    <div className=" bg-homepage lg:bg-cover relative md:bg-auto  w-full h-[100vh] bg-bottom px-[100px]">
      <div className="absolute w-[85%] flex flex-col justify-between flex-wrap md:flex-row items-center gap-5">
        <div className="">
          <img src={Logo} alt="" className="w-[10rem] h-[10rem] " />
        </div>
        <div>
          <NavBarLanding />
        </div>
        <div className="flex space-x-6">
          <NavLink to="login" className="rounded-[36px] h-[30px] bg-primary outline outline-1 outline-white text-white uppercase text-center px-8 hover:text-primary hover:bg-white hover:outline-primary flex items-center">
            sign up
          </NavLink>
          <NavLink to="login" className="rounded-[36px] h-[30px] bg-primary outline outline-1 outline-white text-white uppercase text-center px-8 hover:text-primary hover:bg-white hover:outline-primary flex items-center">
            login
          </NavLink>
        </div>
      </div>
      <div className=" inline-flex justify-evenly w-full gap-24 ">
        <div className="inline-flex pb-0 items-start flex-col place-content-center gap-[36px] w-1/2 ">
          <div className=" lg:text-[30px] lg:leading-[62px] text-primary lg:tracking-wider md:text-base ">
            <span className="font-semibold lg:text-[34px] text-primary md:text-lg">
              e-Certify
            </span>
            <span> </span>
            platform provide us benefit feature and security on data for
            candidates
          </div>
          <div className="text-primary lg:text-[18px] lg:leading-[3rem] tracking-normal md:text-base ">
            who want to make a request in approving or modify their certificate.
          </div>
          <button className=" text-white text-[16px] tracking-normal flex px-[60px] py-[13px] capitalize gap-[10px] rounded-[36px] bg-primary hover:bg-white outline hover:outline-primary hover:text-primary hover:outline-1 ">
            get start
          </button>
        </div>
        <img
          src={image}
          alt="Image"
          className="object-right-bottom mt-16  w-[40rem] h-[40rem] align-baseline "
        />
      </div>
    </div>
  );
}

export default Landing1;

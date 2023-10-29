import React, { useState } from "react";
import "./../../style/authForm.css";
import registerpic from "./../../assets/images/log.svg";
import logpic from "./../../assets/images/register.svg";
import signupwel from "./../../assets/images/signinwel.svg";
import signinwel from "./../../assets/images/signupwel.svg";
import logo from "./../../assets/images/officallogo.svg";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import { NavLink } from "react-router-dom";

export default function RegisterComponent(props) {
  const { isSignUpMode } = props;

  const handleSignInClick = () => {
    isSignUpMode(false);
  };
  return (
    <form action="#" className="sign-up-form ">
      <img src={logo} className="hidden md:block w-40 mb-4" alt="" />
      <img src={signinwel} className="w-40 md:w-60 mb-4" alt="" />
      <Box sx={{ "& > :not(style)": { m: 1, mb: 2 } }}>
        <FormControl variant="standard">
          <InputLabel htmlFor="input-with-icon-adornment">
            <span className="text-primary">Email</span>{" "}
            <span className="font-bold text-red-500">*</span>
          </InputLabel>
          <Input
            placeholder="example@gmail.com"
            style={{
              width: "400px",
              color: "#5D6D79",
            }}
            id="input-with-icon-adornment"
            startAdornment={
              <InputAdornment position="start">
                <EmailOutlinedIcon
                  className="text-iconcolor"
                  style={{ width: "20px", height: "20px" }}
                />
              </InputAdornment>
            }
          />
        </FormControl>
      </Box>
      <Box sx={{ "& > :not(style)": { m: 1, mb: 3 } }}>
        <FormControl variant="standard">
          <InputLabel htmlFor="input-with-icon-adornment">
            <span className="text-primary">Username</span>{" "}
            <span className="font-bold text-red-500">*</span>
          </InputLabel>
          <Input
            placeholder="example80"
            style={{
              width: "400px",
              color: "#5D6D79",
            }}
            id="input-with-icon-adornment"
            startAdornment={
              <InputAdornment position="start">
                <PersonOutlineOutlinedIcon
                  className="text-iconcolor"
                  style={{ width: "20px", height: "20px" }}
                />
              </InputAdornment>
            }
          />
        </FormControl>
      </Box>
      <div className=" w-[400px] flex justify-between items-center">
        <Box sx={{ "& > :not(style)": { m: 0, mb: 2 } }}>
          <FormControl variant="standard">
            <InputLabel htmlFor="input-with-icon-adornment">
              <span className="text-primary">Phone number</span>{" "}
              <span className="font-bold text-red-500">*</span>
            </InputLabel>
            <Input
              placeholder="0965601645"
              style={{
                width: "190px",
                color: "#5D6D79",
              }}
              id="input-with-icon-adornment"
              startAdornment={
                <InputAdornment position="start">
                  <LocalPhoneOutlinedIcon
                    className="text-iconcolor"
                    style={{ width: "20px", height: "20px" }}
                  />
                </InputAdornment>
              }
            />
          </FormControl>
        </Box>
        <Box sx={{ "& > :not(style)": { m: 0, mb: 2 } }}>
          <FormControl variant="standard">
            <InputLabel htmlFor="input-with-icon-adornment">
              <span className="text-primary">Date of Birth</span>{" "}
              <span className="font-bold text-red-500">*</span>
            </InputLabel>
            <Input
              placeholder="30/09/2002"
              style={{
                width: "190px",
                color: "#5D6D79",
              }}
              id="input-with-icon-adornment"
              startAdornment={
                <InputAdornment position="start">
                  <CalendarMonthOutlinedIcon
                    className="text-iconcolor"
                    style={{ width: "20px", height: "20px" }}
                  />
                </InputAdornment>
              }
            />
          </FormControl>
        </Box>
      </div>
      <Box sx={{ "& > :not(style)": { m: 1, mb: 2 } }}>
        <FormControl variant="standard">
          <InputLabel htmlFor="input-with-icon-adornment">
            <span className="text-primary">Address</span>{" "}
            <span className=" font-bold text-red-500">*</span>
          </InputLabel>
          <Input
            placeholder="Phnom Penh, Toul kork , Street 598"
            style={{
              width: "400px",
              color: "#5D6D79",
            }}
            id="input-with-icon-adornment"
            startAdornment={
              <InputAdornment position="start">
                <LocationOnOutlinedIcon
                  className="text-iconcolor"
                  style={{ width: "20px", height: "20px" }}
                />
              </InputAdornment>
            }
          />
        </FormControl>
      </Box>
      <div className=" w-[400px] flex justify-between items-center">
        <Box sx={{ "& > :not(style)": { m: 0, mb: 3, mt: 1 } }}>
          <FormControl variant="standard">
            <InputLabel htmlFor="input-with-icon-adornment">
              <span className="text-primary">Password</span>{" "}
              <span className=" font-bold text-red-500">*</span>
            </InputLabel>
            <Input
              placeholder="Text1234"
              style={{
                width: "190px",
                color: "#5D6D79",
              }}
              id="input-with-icon-adornment"
              startAdornment={
                <InputAdornment position="start">
                  <LockOutlinedIcon
                    className="text-iconcolor"
                    style={{ width: "20px", height: "20px" }}
                  />
                </InputAdornment>
              }
              endAdornment={
                <InputAdornment position="end">
                  <RemoveRedEyeOutlinedIcon
                    className="text-iconcolor"
                    style={{ width: "20px", height: "20px" }}
                  />
                </InputAdornment>
              }
            />
          </FormControl>
        </Box>
        <Box sx={{ "& > :not(style)": { m: 0, mb: 3, mt: 1 } }}>
          <FormControl variant="standard">
            <InputLabel htmlFor="input-with-icon-adornment">
              <span className="text-primary">Confirm Password</span>{" "}
              <span className=" font-bold text-red-500">*</span>
            </InputLabel>
            <Input
              placeholder="Text1234"
              style={{
                width: "190px",
                color: "#5D6D79",
              }}
              id="input-with-icon-adornment"
              startAdornment={
                <InputAdornment position="start">
                  <LockOutlinedIcon
                    className="text-iconcolor"
                    style={{ width: "20px", height: "20px" }}
                  />
                </InputAdornment>
              }
              endAdornment={
                <InputAdornment position="end">
                  <RemoveRedEyeOutlinedIcon
                    className="text-iconcolor"
                    style={{ width: "20px", height: "20px" }}
                  />
                </InputAdornment>
              }
            />
          </FormControl>
        </Box>
      </div>
      {/* button register */}
      <Button
        className="w-[400px] h-btnheight"
        variant="contained"
        style={{
          width: "400px",
          height: "50px",
          backgroundColor: "#004461",
          color: "white",
          borderRadius: "6px",
        }}
        disableElevation
      >
        Register
      </Button>
      <br />
      {/* <div className="flex justify-center items-center">
      <span className="w-full border border-gray-200"></span>
      <span className="px-4">OR</span>
      <span className="w-full border border-gray-200"></span>
    </div> */}
      {/* <GoogleSignup /> */}
      {/* <div className=" flex justify-center text-primary">
        <p className="mr-1">Already have account?</p>
        <button
          className=" font-bold"
          id="sign-up-btn"
          onClick={handleSignInClick}
        >
          Log in
        </button>
      </div> */}
    </form>
  );
}

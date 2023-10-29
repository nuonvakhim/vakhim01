import React, { useState } from "react";
import { useForm } from "react-hook-form"
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
import { Field } from "formik";

export default function Test1Component() {
  const [isSignUpMode, setIsSignUpMode] = useState(false);
  const [data, setData] = useState(false);

  const handleSignUpClick = () => {
    setIsSignUpMode(true);
  };

  const handleSignInClick = (data) => {
    setIsSignUpMode(false);
  };
  return (
    <div className={`container font-myText ${isSignUpMode ? "sign-up-mode" : ""}`}>
      <div className="forms-container">
        <div className="signin-signup">
          {/* start login form */}
          <form action="#" className="sign-in-form">
            <img src={logo} className="hidden md:block w-40 mb-4" alt="" />
            <img src={signupwel} className="w-40 md:w-60 mt-20 md:mt-0 mb-4" alt="" />
            {/* username login */}
            <Box sx={{ "& > :not(style)": { m: 1 } }}>
              <FormControl variant="standard">
                <InputLabel
                  htmlFor="input-with-icon-adornment"
                  style={{ color: "#004461" }}
                >
                  Username
                </InputLabel>
                <Field
                  placeholder="example70"
                  style={{
                    width: "400px",
                  }}
                  className="text-iconcolor"
                  id="input-with-icon-adornment"
                  startAdornment={
                    <InputAdornment position="start">
                      <PersonOutlineOutlinedIcon style={{width: "20px", height: "20px"}} className="text-iconcolor" />
                    </InputAdornment>
                  }
                />
              </FormControl>
            </Box>
            {/* password login */}
            <Box sx={{ "& > :not(style)": { m: 2 } }}>
              <FormControl variant="standard">
                <InputLabel
                  htmlFor="input-with-icon-adornment"
                  style={{ color: "#004461" }}
                >
                  Password
                </InputLabel>
                <Input
                  type="password"
                  placeholder="Text1234"
                  className="text-iconcolor"
                  id="input-with-icon-adornment"
                  startAdornment={
                    <InputAdornment position="start">
                      <LockOutlinedIcon style={{width: "20px", height: "20px"}} className=" text-iconcolor" />
                    </InputAdornment>
                  }
                  endAdornment={
                    <InputAdornment position="end">
                      <RemoveRedEyeOutlinedIcon className=" text-iconcolor" />
                    </InputAdornment>
                  }
                />
                <div className="mt-3 flex items-center justify-between">
                  <div>
                    <label
                      className=" text-primary hover:text-blue-400 font-medium flex justify-center items-center"
                      for="remember"
                    >
                      <input
                        className="ml-2 leading-tight "
                        type="checkbox"
                        id="remember"
                        name="remember"
                      />
                      <span className="ml-1 text-sm">remember me</span>
                    </label>
                  </div>
                  <div>
                    <NavLink
                      to="/forgot-password"
                      className="font-medium text-sm text-primary hover:text-blue-400"
                    >
                      forgot password?
                    </NavLink>
                  </div>
                </div>
                <br />
                {/* button login */}
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
                  Login
                </Button>
              </FormControl>
              {/* <div className="flex justify-center items-center">
                <span className="w-full border border-gray-200"></span>
                <span className="px-4 text-primary">OR</span>
                <span className="w-full border border-gray-200"></span>
              </div> */}
            </Box>
            {/* <GoogleSignup /> */}
            {/* <div className="mt-4 flex justify-center text-primary">
              <p className="mr-1">Don't have account yet?</p>
              <button
                className=" font-bold"
                id="sign-up-btn"
                onClick={handleSignUpClick}
              >
                Sign Up
              </button>
            </div> */}
          </form>
          {/* end login form */}

          {/* start signup form */}
          {/* <RegisterComponent data={isSignUpMode}/> */}
          {/* end signup form */}
        </div>
      </div>

      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>New here ?</h3>
            <p>
              If you don't have an account register, You can{" "}
              <b>Register here!</b>
            </p>
            <button
              className="btn transparent"
              id="sign-up-btn"
              onClick={handleSignUpClick}
            >
              Sign Up
            </button>
          </div>
          <img src={logpic} className="image w-[28rem]" alt="" />
        </div>
        <div className="panel right-panel ">
          <div className="content">
            <h3>Already joined?</h3>
            <p>
              If you already have an account register, You can{" "}
              <b>Login here !</b>
            </p>
            <button
              className="btn transparent"
              id="sign-in-btn"
              onClick={handleSignInClick}
            >
              Sign In
            </button>
          </div>
          <img src={registerpic} className="image w-[28rem]" alt="" />
        </div>
      </div>
    </div>
  );
}

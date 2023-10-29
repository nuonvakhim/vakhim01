import React, { useState } from "react";
import { Field, Formik, Form } from "formik";
import * as Yup from "yup";
import "./../../style/authForm.css";
import registerpic from "./../../assets/images/log.svg";
import logpic from "./../../assets/images/register.svg";
import signupwel from "./../../assets/images/signinwel.svg";
import logo from "./../../assets/images/officallogo.svg";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import { NavLink } from "react-router-dom";
import RegisterComponent from "./RegisterComponent";
import { AiOutlineLock, AiOutlineMail } from "react-icons/ai";

const loginSchema = Yup.object().shape({
  email: Yup.string()
    .matches(
      /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$|^\w+[^~!@#$%^&*()]*@\w+\.\w{3,6}$/,
      {
        message: "Please insert a valid email address.",
      }
    )
    .required("Email can't empty"),
  password: Yup.string().required("Password can't empty"),
});

export default function LoginComponent() {
  const [isSignUpMode, setIsSignUpMode] = useState(false);
  const [data, setData] = useState(false);

  const handleSignUpClick = () => {
    setIsSignUpMode(true);
  };

  const handleSignInClick = (data) => {
    setIsSignUpMode(false);
  };

  const [showPassword, setShowPassword] = useState(false);
  const [user, setUser] = useState({});

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  const handleLogin = () => {
    console.log(user);
  };

  return (
    <div
      className={`container font-myText ${isSignUpMode ? "sign-up-mode" : ""}`}
    >
      <div className="forms-container">
        <div className="signin-signup">
          {/* start login form */}
          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            validationSchema={loginSchema}
            onSubmit={handleLogin}
          >
            {({ errors, touched }) => (
              <div className="flex flex-1 flex-col items-center justify-center relative">
                {/* <!-- Login box --> */}
                <div className="flex flex-1 flex-col  justify-center space-y-5 w-full">
                  <Form
                    className="flex flex-col space-y-2 font-SecondaryFont"
                    onChange={handleInput}
                  >
                    {/* Email and Phone */}
                    <label
                      htmlFor="email"
                      className="font-medium text-base text-left text-text_normal"
                    >
                      Email
                    </label>
                    <div className="relative">
                      <Field
                        type="text"
                        style={{
                          ":focus": {
                            border: "2",
                            borderColor: "green",
                          },
                        }}
                        placeholder="example@gmail.com"
                        name="email"
                        id="email"
                        className={`input-field w-full focus:rounded-[20px] rounded-[20px] focus:outline-b-green_custom focus:border-2 focus:drop-shadow-md  focus:border-b-green_custom   focus:ring-0 focus:border-transparent  ${
                          touched.email && errors.email
                            ? "input-error rounded-[20px] focus:border-b-0"
                            : ""
                        }  
                      }`}
                      />
                      <AiOutlineMail
                        className="text-gray-500 absolute right-3 top-5 transform -translate-y-1/2"
                        size={20}
                      />
                      {errors.email && touched.email ? (
                        <div className="text-red-500 ml-3 text-sm mt-2">
                          {errors.email}
                        </div>
                      ) : null}
                    </div>
                    {/* Password */}
                    <label
                      htmlFor="password"
                      className="font-medium text-base text-left text-text_normal"
                    >
                      Password
                    </label>
                    <div className="relative inline-flex items-center w-full">
                      <Field
                        type={showPassword ? "text" : "password"}
                        placeholder="Password"
                        name="password"
                        id="password"
                        className={`input-field border-2 w-full focus:rounded-[20px] rounded-[20px]   focus:outline-b-green_custom focus:border-2 focus:drop-shadow-md focus:border-b-green_custom   focus:ring-0 focus:border-transparent  ${
                          touched.password && errors.password
                            ? "input-error  rounded-[20px] focus:border-b-0"
                            : ""
                        }`}
                      />

                      {user.password && (
                        <FontAwesomeIcon
                          icon={showPassword ? faEye : faEyeSlash}
                          onClick={togglePasswordVisibility}
                          className="absolute inset-y-0 top-4 right-0 flex items-center pr-3 text-gray-700 cursor-pointer"
                        />
                      )}
                    </div>
                    {errors.password && touched.password ? (
                      <div className="text-red-500 ml-3 text-sm">
                        {errors.password}
                      </div>
                    ) : null}

                    <button
                      type="submit"
                      className="flex items-center justify-center flex-none px-3 py-2 md:px-4 md:py-3 border-2 rounded-[20px]  bg-green_custom text-white h-14"
                    ></button>
                  </Form>

                  <div className="flex justify-center items-center">
                    <span className="w-full border border-gray-200"></span>
                    <span className="px-4">OR</span>
                    <span className="w-full border border-gray-200"></span>
                  </div>
                </div>
              </div>
            )}
          </Formik>

          {/* start signup form */}
          <RegisterComponent data={isSignUpMode} />
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

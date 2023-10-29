import React, { useState } from "react";
import { Field, Formik, Form } from "formik";
import * as Yup from "yup";
import "./../../style/authForm.css";
import registerpic from "./../../assets/images/log.svg";
import logpic from "./../../assets/images/register.svg";
import signupwel from "./../../assets/images/welcomesignin.svg";
import logo from "./../../assets/images/officallogo.svg";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { NavLink } from "react-router-dom";
import RegisterComponent from "./RegisterComponent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const loginSchema = Yup.object().shape({
  username: Yup.string().required("Username can't empty"),
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
      className={`container  font-myText ${isSignUpMode ? "sign-up-mode" : ""}`}
    >
      <div className="forms-container">
        <div className="signin-signup">
          <div className="form absolute -top-64 left-52 sign-in-form">
            <img src={logo} className="hidden md:block w-40 mb-4" alt="" />
            <img
              src={signupwel}
              className="w-40 md:w-60 mt-20 md:mt-0 mb-4"
              alt=""
            />
            {/* start login form */}
            <Formik
              initialValues={{
                username: "",
                password: "",
              }}
              validationSchema={loginSchema}
              onSubmit={handleLogin}
            >
              {({ errors, touched }) => (
                <div className="flex flex-1 flex-col items-center justify-center relative">
                  {/* <!-- Login box --> */}
                  <div className="flex flex-1 flex-col  justify-start space-y-5 w-full">
                    <Form
                      className="flex flex-col space-y-2 font-SecondaryFont"
                      onChange={handleInput}
                    >
                      {/* username */}
                      <label
                        htmlFor="username"
                        className="font-medium self-start text-[14.4px] font-myText text-primary"
                      >
                        Username
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
                          placeholder="example70"
                          name="username"
                          id="usernamesignin"
                          className={`input-field font-myText px-7 w-[20rem] h-8 m-0 bg-white rounded-none focus:outline-b-green_custom focus:border-2 focus:drop-shadow-md  focus:border-b-green_custom  focus:border-b-0  focus:outline-none focus:ring-0 focus:border-transparent focus:rounded-lg  ${
                            touched.username && errors.username
                              ? "input-error rounded-none focus:border-b-0  focus:outline-none"
                              : ""
                          }  
                      }`}
                        />
                        <PersonOutlineOutlinedIcon
                          style={{ width: "20px", height: "20px" }}
                          className="text-iconcolor absolute left-0 top-4 transform -translate-y-1/2"
                        />
                        {errors.username && touched.username ? (
                          <div className="text-red-500 text-[14.4px] mt-2">
                            {errors.username}
                          </div>
                        ) : null}
                      </div>
                      {/* Password */}
                      <label
                        htmlFor="password"
                        className="font-medium self-start text-[14.4px] font-myText text-primary"
                      >
                        Password
                      </label>
                      <div className="relative items-center w-full">
                        <Field
                          type={showPassword ? "text" : "password"}
                          placeholder="Password"
                          name="password"
                          id="passwordsignin"
                          className={`input-field font-myText w-[20rem] px-7 h-8 m-0 bg-white focus:rounded-lg rounded-none focus:outline-b-green_custom focus:border-2 focus:drop-shadow-md  focus:border-b-green_custom focus:border-b-0  focus:outline-none  focus:ring-0 focus:border-transparent  ${
                            touched.password && errors.password
                              ? "input-error rounded-none focus:border-b-0  focus:outline-none"
                              : ""
                          }`}
                        />
                        <LockOutlinedIcon
                          style={{ width: "20px", height: "20px" }}
                          className=" text-iconcolor absolute left-0 top-4 transform -translate-y-1/2"
                        />
                        {user.password && (
                          <FontAwesomeIcon
                            icon={showPassword ? faEye : faEyeSlash}
                            onClick={togglePasswordVisibility}
                            className="absolute inset-y-0 top-2 right-0 flex items-center pr-3 text-iconcolor cursor-pointer"
                            x
                          />
                        )}
                        {errors.password && touched.password ? (
                          <div className="text-red-500 text-[14.4px]">
                            {errors.password}
                          </div>
                        ) : null}
                      </div>
                      <br />
                      <button
                        type="submit"
                        className="flex w-full bg-primary text-white items-center justify-center flex-none  border-2 rounded-myrounded bg-green_custom h-12 "
                      >
                        Log in
                      </button>
                    </Form>

                    {/* <div className="flex justify-center items-center">
                      <span className="w-full border border-gray-200"></span>
                      <span className="px-4">OR</span>
                      <span className="w-full border border-gray-200"></span>
                    </div> */}
                  </div>
                </div>
              )}
            </Formik>
          </div>

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

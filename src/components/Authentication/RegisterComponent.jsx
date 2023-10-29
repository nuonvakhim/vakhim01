import React, { useState } from "react";
import { Field, Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { NavLink } from "react-router-dom";
import "./../../style/authForm.css";
import signinwel from "./../../assets/images/signinwel.svg";
import logo from "./../../assets/images/officallogo.svg";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FiCalendar, FiMail, FiUser } from "react-icons/fi";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
const SignupSchema = Yup.object().shape({
  email: Yup.string()
    .required("Email can't empty")
    .matches(
      /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$|^\w+[^~!@#$%^&*()]*@\w+\.\w{3,6}$/,
      {
        message: "Please insert a valid email address.",
      }
    ),
  username: Yup.string()
    .required("Username can't empty")
    .matches(
      /^[A-Za-z0-9]{4,}$/,
      "Password must be at least 4 characters or numbers"
    ),
  phonenumber: Yup.string().required("Phone number can't empty"),
  dob: Yup.string().required("Date of Birth can't empty"),
  gender: Yup.string().required("Gender can't empty"),
  address: Yup.string().required("Address can't empty"),
  password: Yup.string()
    .required("Password can't empty")
    .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/, {
      message:
        "Must contain at least one number and one uppercase and lowercase letter, and at least 6 or more characters",
    }),
  confirmpassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm password can't empty"),
});

export default function RegisterComponent(props) {
  const { isSignUpMode } = props;

  const handleSignInClick = () => {
    isSignUpMode(false);
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
  const handleRegister = () => {
    console.log(user);
  };
  return (
    <div className="form absolute -top-80 sign-up-form w-96 justify-self-center">
      {/* <img src={logo} className="hidden md:block w-40 mb-4" alt="" /> 
      <img src={signinwel} className="w-40 md:w-60 mb-4" alt="" />  */}
      <Formik
        initialValues={{
          email: "",
          username: "",
          phonenumber: "",
          dob: new Date(),
          gender: "",
          address: "",
          password: "",
          confirmpassword: "",
        }}
        validationSchema={SignupSchema}
        onSubmit={handleRegister}
      >
        {({ values, errors, touched, setFieldValue }) => (
          <div className="flex flex-1 flex-col items-center justify-center relative">
            {/* <!-- Login box --> */}
            <div className="flex flex-1 flex-col  justify-start space-y-5 w-full">
              <Form
                className="flex flex-col space-y-2 font-SecondaryFont"
                onChange={handleInput}
              >
                {/* Email */}
                <label
                  htmlFor="username"
                  className="font-medium self-start text-[14.4px] font-myText text-primary"
                >
                  Email <span className=" font-bold text-red-500">*</span>
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
                    placeholder="example70@gmail.com"
                    name="email"
                    id="email"
                    className={`input-field font-myText px-7 w-[40rem] h-8 m-0 bg-white focus:rounded-lg rounded-none focus:outline-b-green_custom focus:border-2 focus:drop-shadow-md  focus:border-b-green_custom  focus:border-b-0  focus:outline-none focus:ring-0 focus:border-transparent  ${
                      touched.email && errors.email
                        ? "input-error rounded-none focus:border-b-0  focus:outline-none"
                        : ""
                    }  
                      }`}
                  />
                  <EmailOutlinedIcon
                    style={{ width: "20px", height: "20px" }}
                    className="text-iconcolor absolute left-0 top-4 transform -translate-y-1/2"
                  />
                  {errors.email && touched.email ? (
                    <div className="text-red-500 text-[14.4px] mt-2">
                      {errors.email}
                    </div>
                  ) : null}
                </div>
                {/* Username */}
                <label
                  htmlFor="username"
                  className="font-medium self-start text-[14.4px] font-myText text-primary"
                >
                  Username <span className=" font-bold text-red-500">*</span>
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
                    id="usernamesignup"
                    className={`input-field font-myText px-7 w-[40rem] h-8 m-0 bg-white focus:rounded-lg rounded-none focus:outline-b-green_custom focus:border-2 focus:drop-shadow-md  focus:border-b-green_custom  focus:border-b-0  focus:outline-none focus:ring-0 focus:border-transparent  ${
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
                {/* Phone number */}
                <label
                  htmlFor="phonenumber"
                  className="font-medium self-start text-[14.4px] font-myText text-primary"
                >
                  Phone number{" "}
                  <span className=" font-bold text-red-500">*</span>
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
                    placeholder="0965601645"
                    name="phonenumber"
                    id="phonenumber"
                    className={`input-field font-myText px-7 w-[40rem] h-8 m-0 bg-white focus:rounded-lg rounded-none focus:outline-b-green_custom focus:border-2 focus:drop-shadow-md  focus:border-b-green_custom  focus:border-b-0  focus:outline-none focus:ring-0 focus:border-transparent  ${
                      touched.phonenumber && errors.phonenumber
                        ? "input-error rounded-none focus:border-b-0  focus:outline-none"
                        : ""
                    }  
                      }`}
                  />
                  <LocalPhoneOutlinedIcon
                    style={{ width: "20px", height: "20px" }}
                    className="text-iconcolor absolute left-0 top-4 transform -translate-y-1/2"
                  />
                  {errors.phonenumber && touched.phonenumber ? (
                    <div className="text-red-500 text-[14.4px] mt-2">
                      {errors.phonenumber}
                    </div>
                  ) : null}
                </div>
                {/* Address */}
                <label
                  htmlFor="address"
                  className="font-medium self-start text-[14.4px] font-myText text-primary"
                >
                  Address <span className=" font-bold text-red-500">*</span>
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
                    placeholder="Phnom penh, Toul kork, Street 568"
                    name="address"
                    id="address"
                    className={`input-field font-myText px-7 w-[40rem] h-8 m-0 bg-white focus:rounded-lg rounded-none focus:outline-b-green_custom focus:border-2 focus:drop-shadow-md  focus:border-b-green_custom  focus:border-b-0  focus:outline-none focus:ring-0 focus:border-transparent  ${
                      touched.address && errors.address
                        ? "input-error rounded-none focus:border-b-0  focus:outline-none"
                        : ""
                    }  
                      }`}
                  />
                  <LocationOnOutlinedIcon
                    style={{ width: "20px", height: "20px" }}
                    className="text-iconcolor absolute left-0 top-4 transform -translate-y-1/2"
                  />
                  {errors.address && touched.address ? (
                    <div className="text-red-500 text-[14.4px] mt-2">
                      {errors.address}
                    </div>
                  ) : null}
                </div>
                <div className="w-full flex justify-center">
                  {/* gender */}
                  <div className="w-full md:w-[50%] flex flex-nowrap flex-col justify-start gap-4 md:mt-0 mt-6">
                    <label
                      htmlFor="address"
                      className="font-medium self-start text-[14.4px] font-myText text-primary"
                    >
                      Gender <span className=" font-bold text-red-500">*</span>
                    </label>
                    <div className="flex items-center text-base">
                      <div role="group" aria-labelledby="my-radio-group">
                        <label>
                          <Field
                            type="radio"
                            value="male"
                            name="gender"
                            className="w-4 h-4  text-green_custom focus:drop-shadow-md  bg-gray-100 border-gray-300 focus:ring-green_custom"
                          />{" "}
                          Male
                        </label>
                        <label>
                          <Field
                            type="radio"
                            value="female"
                            name="gender"
                            className="w-4 h-4 text-green_custom focus:drop-shadow-md  bg-gray-100 border-gray-300 focus:ring-green_custom ml-2 md:ml-5"
                          />{" "}
                          Female
                        </label>
                      </div>
                    </div>
                    <ErrorMessage
                      name="gender"
                      component="div"
                      className="text-red-500 text-sm"
                    />
                  </div>
                  {/* date of birth */}
                  <div className="ml-2">
                    <label
                      htmlFor="dob"
                      className="font-medium self-start text-[14.4px] font-myText text-primary"
                    >
                      Date of Birth
                    </label>
                    <div className="relative mt-2">
                      <DatePicker
                        name="dob"
                        id="dob"
                        yearDropdownItemNumber={100}
                        scrollableYearDropdown={true}
                        showYearDropdown={true}
                        selected={values.dob}
                        maxDate={new Date()}
                        dateFormat="MMMM d, yyyy"
                        className="flex w-full h-10 px-3 py-2 md:px-4 md:py-3 outline-none border-b-1 border-green_custom rounded-[20px] focus:drop-shadow-md  font-medium placeholder:font-normal pr-10 focus:outline-none focus:ring-2 focus:ring-green_custom  focus:border-none"
                        onChange={(date) => setFieldValue("dob", date)}
                      />
                      <span className="absolute top-0 right-0 bottom-0 flex items-center pr-3 pointer-events-none">
                        <FiCalendar className="w-5 h-5 text-gray-400" />
                      </span>
                    </div>
                    {errors.dob && touched.dob ? (
                      <div className="text-red-500 text-sm">{errors.dob}</div>
                    ) : null}
                  </div>
                </div>
                {/*}
                <div>
                  <label
                    htmlFor="idcard"
                    className="font-medium self-start text-[14.4px] font-myText text-primary"
                  >
                    ID Card {" "}
                  </label>
                  <input multiple={true} type="file" />
                  {/* {meta.touched && meta.error ? (
                    <div style={{ color: "red" }}>{meta.error}</div>
                  ) : null} 
                </div> */}
                <div className="flex justify-center">
                  {/* Password */}
                  <div>
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
                        id="passwordsignup"
                        className={`input-field font-myText w-[11.5rem] px-7 h-8 m-0 bg-white focus:rounded-lg rounded-none focus:outline-b-green_custom focus:border-2 focus:drop-shadow-md  focus:border-b-green_custom focus:border-b-0  focus:outline-none  focus:ring-0 focus:border-transparent  ${
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
                  </div>
                  {/* Confirm Password */}
                  <div className="ml-2">
                    <label
                      htmlFor="password"
                      className="font-medium self-start text-[14.4px] font-myText text-primary"
                    >
                      Confirm Password
                    </label>
                    <div className="relative items-center w-full">
                      <Field
                        type={showPassword ? "text" : "password"}
                        placeholder="Confirm Password"
                        name="confirmpassword"
                        id="confirmpassword"
                        className={`input-field font-myText w-[11.5rem]  px-7 h-8 m-0 bg-white focus:rounded-lg rounded-none focus:outline-b-green_custom focus:border-2 focus:drop-shadow-md  focus:border-b-green_custom focus:border-b-0  focus:outline-none  focus:ring-0 focus:border-transparent  ${
                          touched.confirmpassword && errors.confirmpassword
                            ? "input-error rounded-none focus:border-b-0  focus:outline-none"
                            : ""
                        }`}
                      />
                      <LockOutlinedIcon
                        style={{ width: "20px", height: "20px" }}
                        className=" text-iconcolor absolute left-0 top-4 transform -translate-y-1/2"
                      />
                      {user.confirmpassword && (
                        <FontAwesomeIcon
                          icon={showPassword ? faEye : faEyeSlash}
                          onClick={togglePasswordVisibility}
                          className="absolute inset-y-0 top-2 right-0 flex items-center pr-3 text-iconcolor cursor-pointer"
                          x
                        />
                      )}
                      {errors.confirmpassword && touched.confirmpassword ? (
                        <div className="text-red-500 text-[14.4px]">
                          {errors.confirmpassword}
                        </div>
                      ) : null}
                    </div>
                  </div>
                </div>

                <br />
                <button
                  type="submit"
                  className="flex w-full bg-primary text-white items-center justify-center flex-none  border-2 rounded-myrounded bg-green_custom h-12 "
                >
                  Register
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
  );
}

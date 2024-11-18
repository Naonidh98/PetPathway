import React, { useState } from "react";
import Logo from "../assets/dogLogo.png";
import catImg from "../assets/catSignup.jpg";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { setProfile } from "../slices/profileSlice";
import { sendOTP } from "../services/operations/auth";
import { LoadingOne } from "../components";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [showPass1, setShowPass1] = useState(false);
  const [showPass2, setShowPass2] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //submit handler
  function submitHandler(data, event) {
    event.preventDefault();
    console.log(data);
    if (data.password.length < 8) {
      toast.error("Password length must be greater than 8.");
      return;
    } else if (data.password !== data.cPassword) {
      toast.error("Password and confirm password do not match.");
      return;
    } else {
      //todo : send OTP API call
      dispatch(sendOTP(data, navigate, setLoading));
    }
  }

  return (
    <div className="w-[98%] max-w-[1440px] h-full flex justify-center items-center my-[55px] px-2 mx-auto">
      <div className="w-full md:w-[65%] flex flex-col gap-4">
        <div className="flex justify-center items-center">
          <div className="flex flex-col gap-4 w-full">
            <header className="">
              <h2 className="text-xl sm:text-2xl font-bold p-0 mb-4 flex items-center gap-2">
                Pet Pathway{" "}
                <img
                  src={Logo}
                  alt="Logo"
                  width={36}
                  className="animate-bounce"
                />{" "}
              </h2>
              <h3 className="text-sm sm:text-md">Create your account</h3>
            </header>

            {/* Sign up form */}
            <form
              className="flex flex-col gap-6 my-4"
              onSubmit={handleSubmit(submitHandler)}
            >
              <div className="flex flex-col gap-2">
                <label htmlFor="firstName" className="font-bold font-roboto text-sm sm:text-md ">
                  First Name :
                </label>
                <input
                  type="text"
                  id="firstName"
                  placeholder="Enter your first name"
                  className="shadow-white shadow-sm outline-none rounded-full py-2 px-4 bg-richblack-800"
                  {...register("firstName", { required: true })}
                />
                {errors.firstName && (
                  <span className="text-[#FF0000] font-bold font-inter">
                    Required <sup>*</sup>
                  </span>
                )}
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="lastName" className="font-bold font-roboto text-sm sm:text-md ">
                  Last name :
                </label>
                <input
                  type="text"
                  id="lastName"
                  placeholder="Enter your last name"
                  className="shadow-white shadow-sm outline-none rounded-full py-2 px-4 bg-richblack-800"
                  {...register("lastName", { required: true })}
                />
                {errors.lastName && (
                  <span className="text-[#FF0000] font-bold font-inter">
                    Required <sup>*</sup>
                  </span>
                )}
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="font-bold font-roboto text-sm sm:text-md ">
                  Email Address :
                </label>
                <input
                  type="text"
                  id="email"
                  placeholder="Enter your email"
                  className="shadow-white shadow-sm outline-none rounded-full py-2 px-4 bg-richblack-800"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <span className="text-[#FF0000] font-bold font-inter">
                    Required <sup>*</sup>
                  </span>
                )}
              </div>
              <div className="flex justify-between font-roboto flex-wrap gap-4">
                <div className="flex flex-col gap-y-2 w-[100%] sm:w-[46%] relative">
                  <label htmlFor="pass1" className="font-bold text-sm sm:text-md ">
                    Password :
                  </label>
                  <input
                    type={showPass1 ? "text" : "password"}
                    id="pass1"
                    placeholder="Enter your password"
                    className="shadow-white shadow-sm outline-none rounded-full py-2 px-4 bg-richblack-800"
                    {...register("password", { required: true })}
                  />
                  {errors.password && (
                    <span className="text-[#FF0000] font-bold font-inter">
                      Required <sup>*</sup>
                    </span>
                  )}
                  <div
                    onClick={() => {
                      setShowPass1(!showPass1);
                    }}
                    className="absolute top-10 right-5"
                  >
                    {showPass1 ? <FaRegEye /> : <FaRegEyeSlash />}
                  </div>
                </div>
                <div className="flex flex-col gap-y-2 w-[100%] sm:w-[46%] relative">
                  <label htmlFor="" className="font-bold font-roboto text-sm sm:text-md ">
                    Confirm Password :
                  </label>
                  <input
                    type={showPass2 ? "text" : "password"}
                    placeholder="Confirm password"
                    className="shadow-white shadow-sm outline-none rounded-full py-2 px-4 bg-richblack-800"
                    {...register("cPassword", { required: true })}
                  />
                  {errors.cPassword && (
                    <span className="text-[#FF0000] font-bold font-inter">
                      Required <sup>*</sup>
                    </span>
                  )}
                  <div
                    onClick={() => {
                      setShowPass2(!showPass2);
                    }}
                    className="absolute top-10 right-5"
                  >
                    {showPass2 ? <FaRegEye /> : <FaRegEyeSlash />}
                  </div>
                </div>
              </div>

              {loading ? (
                <div className="my-[25px]">
                  <LoadingOne />
                </div>
              ) : (
                <button className="mx-auto w-[250px] mt-8 p-2 font-poppins rounded-md bg-blue-600 text-white hover:scale-95 transition-all">
                  Create Account
                </button>
              )}
            </form>
            {/* Register button */}
            <p className="text-center font-poppins text-sm sm:text-md ">
              Already has an account?{" "}
              <Link to={"/login"}>
                <span className="text-blue-100 font-bold">Login</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;

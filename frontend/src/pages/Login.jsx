import React from "react";
import Logo from "../assets/dogLogo.png";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { login } from "../services/operations/auth";
import { useState } from "react";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import { LoadingOne } from "../components";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [showPassword,setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function submitHandler(data, event) {
    event.preventDefault();
    dispatch(login(data, setLoading, navigate));
  }

  return (
    <div className="w-[98%] max-w-[1440px] mx-auto h-full flex justify-center items-center py-[55px] px-2">
      <div className="w-full  md:w-[65%] flex flex-col gap-4">
        <header className="">
          <h2 className="text-xl sm:text-2xl font-bold p-0 mb-4 flex items-center gap-2 font-poppins">
            Pet Pathway{" "}
            <img src={Logo} alt="Logo" width={36} className="animate-bounce" />{" "}
          </h2>
          <h3 className="text-sm sm:text-md font-inter">Log in to your account</h3>
          <p className="text-sm sm:text-md font-inter">Welcome Back</p>
        </header>

        {/* Login form */}
        <form
          className="flex flex-col gap-6 my-4"
          onSubmit={handleSubmit(submitHandler)}
        >
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-sm sm:text-md font-bold font-roboto">
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
          <div className="flex flex-col gap-2 relative">
            <label htmlFor="pass" className="font-bold font-roboto">
             Enter Password :
            </label>
            <input
              type={showPassword ? "text"  : "password"}
              id="pass"
              placeholder="Enter your password"
              className="shadow-white shadow-sm outline-none rounded-full py-2 px-4 bg-richblack-800"
              {...register("password", { required: true })}
            />
            {errors.password && (
              <span className="text-[#FF0000] font-bold font-inter">
                Required <sup>*</sup>
              </span>
            )}
            <div onClick={()=>{setShowPassword(!showPassword)}} className="absolute top-10 right-5">
            {
              showPassword ? <FaRegEye/>  :<FaRegEyeSlash/>
            }
            </div>
          </div>

          {/* Forgot password */}
          <Link to={"/forgot-password"}>
            <p className="text-right text-blue-100 font-poppins font-bold text-sm sm:text-md">
              Forgot password
            </p>
          </Link>

          {loading ? (
            <div><LoadingOne/></div>
          ) : (
            <div className="flex justify-center md:justify-start">
              <button className="mt-4 py-2 px-6 rounded-md bg-deepBlue-5 text-white hover:scale-95 transition-all">
                Login
              </button>
            </div>
          )}
        </form>

        {/* Register button */}
        <p className="text-sm sm:text-md text-center font-poppins">
          Don't have any account ?{" "}
          <Link to={"/register"}>
            <span className="text-blue-100 font-bold">Create Account</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;

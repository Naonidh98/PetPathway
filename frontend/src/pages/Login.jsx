import React from "react";
import Logo from "../assets/dogLogo.png";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { login } from "../services/operations/auth";
import { useState } from "react";
const Login = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function submitHandler(data, event) {
    event.preventDefault();
    dispatch(login(data, setLoading));
  }

  return (
    <div className="w-[98%] max-w-[1440px] mx-auto h-full flex justify-center items-center py-[100px] px-2">
      <div className="w-full  md:w-[65%] flex flex-col gap-4">
        <header className="">
          <h2 className="text-2xl font-bold p-0 mb-4 flex items-center gap-2 font-poppins">
            Pet Pathway{" "}
            <img src={Logo} alt="Logo" width={36} className="animate-bounce" />{" "}
          </h2>
          <h3 className="text-md font-inter">Log in to your account</h3>
          <p className="text-md font-inter">Welcome Back</p>
        </header>

        {/* Login form */}
        <form
          className="flex flex-col gap-6 my-4"
          onSubmit={handleSubmit(submitHandler)}
        >
          <div className="flex flex-col gap-2">
            <label htmlFor="" className="font-bold font-roboto">
              Email Address :
            </label>
            <input
              type="text"
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
          <div className="flex flex-col gap-2">
            <label htmlFor="" className="font-bold font-roboto">
              Password :
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="shadow-white shadow-sm outline-none rounded-full py-2 px-4 bg-richblack-800"
              {...register("password", { required: true })}
            />
            {errors.password && (
              <span className="text-[#FF0000] font-bold font-inter">
                Required <sup>*</sup>
              </span>
            )}
          </div>

          {/* Forgot password */}
          <Link to={"/forgot-password"}>
            <p className="text-right text-blue-100 font-poppins font-bold text-md">
              Forgot password
            </p>
          </Link>

          {loading ? (
            <div>Loading...</div>
          ) : (
            <div>
              <button className="w-[100px] mx-auto mt-4 py-2 px-4 rounded-md bg-deepBlue-5 text-white hover:scale-95 transition-all">
                Login
              </button>
            </div>
          )}
        </form>

        {/* Register button */}
        <p className="text-md text-center font-poppins">
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

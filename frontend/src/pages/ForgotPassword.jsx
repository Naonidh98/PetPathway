import React from "react";
import { Link } from "react-router-dom";
import { FaLongArrowAltLeft } from "react-icons/fa";
const ForgotPassword = () => {
  return (
    <div className="w-[98%] max-w-[1440px] mx-auto min-h-[750px] flex justify-center items-center py-[100px] px-2">
      <div className="w-full  md:w-[65%] flex flex-col gap-4">
        <h2 className="text-center text-4xl font-poppins font-bold">
          Reset Password
        </h2>
        <p className="text-center text-lg text-white/80 font-roboto">
          Enter your registered email to reset your password
        </p>
        <form className="w-[80%] mx-auto py-[35px] flex flex-col gap-y-6">
          <div className="flex flex-col gap-2">
            <label htmlFor="" className="font-bold font-roboto">
              Email Address :
            </label>
            <input
              type="text"
              placeholder="Enter your email"
              className="shadow-white shadow-sm outline-none rounded-full py-2 px-4 bg-richblack-800"
            />
          </div>
          <div className="flex justify-between items-center">
            <Link to={'/login'}>
              <div className="font-poppins text-white flex items-center gap-2 p-2"><FaLongArrowAltLeft/> Login</div>
            </Link>
            <button className="bg-blue-300 tex-white font-poppins px-4 py-2 rounded">Reset</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;

import React, { useEffect } from "react";
import { useState } from "react";
import { FaClockRotateLeft } from "react-icons/fa6";
import OtpInput from "react-otp-input";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { resendOTP, signup } from "../services/operations/auth";
import { useForm } from "react-hook-form";

const OTP = () => {
  const [otp, setOtp] = useState("");
  const { profile } = useSelector((state) => state.profile);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loading1, setLoading1] = useState(false);
  const [loading2, setLoading2] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();

    if (profile === null) {
      navigate("/register");
      return;
    }

    const data = {
      firstName: profile.firstName,
      lastName: profile.lastName,
      email: profile.email,
      otp: otp,
      type: "Client",
      password: profile.password,
    };

    dispatch(signup(data, navigate, setLoading2));
  }

  return (
    <div className="w-[98%] max-w-[1440px] mx-auto min-h-[750px] flex justify-center items-center py-[100px] px-2">
      <div className="w-full  md:w-[65%] flex flex-col gap-4">
        <h2 className="text-center text-xl md:text-3xl xl:text-4xl font-poppins font-bold">
          Verify your email
        </h2>
        <p className="text-center text-md lg:text-lg text-white/80 font-roboto">
          Enter 6 digit OTP pin
        </p>
        <form
          className="w-[80%] mx-auto py-4 sm:py-[35px] flex flex-col gap-y-6"
          onSubmit={handleSubmit}
        >
          <input type="text" placeholder="Enter Otp" onChange={(e)=>{
            setOtp(e.target.value)
          }} className="sm:hidden my-2 w-[60%] mx-auto p-2 bg-richblack-800 text-white rounded"/>

          <div className="py-[25px] hidden sm:flex justify-center">
            <OtpInput
              value={otp}
              onChange={setOtp}
              numInputs={6}
              renderSeparator={<span>-</span>}
              inputStyle="w-[20px] text-white bg-richblack-700 rounded-[8px] border-[1px] border-richblack-500 text-[3rem] text-center"
              focusStyle="border-[5px] border-red-500"
              isInputNum={true}
              shouldAutoFocus={true}
              containerStyle="flex justify-between gap-4"
              renderInput={(props) => <input {...props} />}
            />
          </div>

          <div className="flex justify-between items-center">
            {loading1 ? (
              <div>Loading....</div>
            ) : (
              <div
                onClick={() => {
                  dispatch(resendOTP(profile, setLoading1));
                }}
                className="cursor-pointer font-poppins text-white flex items-center gap-2 p-2"
              >
                <FaClockRotateLeft /> Resend
              </div>
            )}
            {loading2 ? (
              <div>Loading....</div>
            ) : (
              <button className="bg-blue-300 tex-white font-poppins px-4 py-2 rounded">
                Verify
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default OTP;

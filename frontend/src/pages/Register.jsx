import React from "react";
import Logo from "../assets/dogLogo.png";
import catImg from "../assets/catSignup.jpg";
import { Link } from "react-router-dom";
const Register = () => {
  return (
    <div className="w-full h-full flex justify-center items-center bg-[#fbc4ab]">
      <div className="flex flex-row-reverse  w-[94%] max-w-[1200px] h-fit rounded-xl shadow-xl p-4 bg-gradient-to-b from-[#fbc4ab] to-white/60">
        {/* Right */}
        <div className="w-1/3">
          <img
            src={catImg}
            alt="Dog img"
            className="w-full h-full object-fit"
          />
        </div>

        {/* Left */}
        <div className="w-2/3 flex justify-center items-center">
          <div className="flex flex-col gap-4 w-[65%]">
            <header className="">
              <h2 className="text-2xl font-bold p-0 mb-4 flex items-center gap-2">
                {" "}
                <img
                  src={Logo}
                  alt="Logo"
                  width={36}
                  className="animate-bounce"
                />{" "}
                Pet Pathway
              </h2>
              <h3 className="text-md">Create your account</h3>
            </header>

            {/* Sign up form */}
            <form className="flex flex-col gap-2 my-4">
              <div className="flex flex-col gap-2">
                <label htmlFor="" className="font-bold">
                  First Name :
                </label>
                <input
                  type="text"
                  placeholder="Enter your first name"
                  className="shadow-xl outline-none rounded-full p-2"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="" className="font-bold">
                  last name :
                </label>
                <input
                  type="text"
                  placeholder="Enter your last name"
                  className="shadow-xl outline-none rounded-full p-2"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="" className="font-bold">
                  Email Address :
                </label>
                <input
                  type="text"
                  placeholder="Enter your email"
                  className="shadow-xl outline-none rounded-full p-2"
                />
              </div>
              <div className="flex justify-between">
                <div className="flex flex-col gap-y-2 w-[46%]">
                  <label htmlFor="" className="font-bold">
                    Password :
                  </label>
                  <input
                    type="password"
                    placeholder="Enter your password"
                    className="shadow-xl outline-none rounded-full p-2"
                  />
                </div>
                <div className="flex flex-col gap-y-2 w-[46%]">
                  <label htmlFor="" className="font-bold">
                    Confirm Password :
                  </label>
                  <input
                    type="password"
                    placeholder="Confirm password"
                    className="shadow-xl outline-none rounded-full p-2"
                  />
                </div>
              </div>

              <button className="mt-4 p-2 rounded-full bg-blue-600 text-white hover:scale-95 transition-all">
                Create Account
              </button>
            </form>

            {/* Register button */}
            <p className="text-md text-center">
              Already has an account?{" "}
              <Link to={"/login"}>
              <span className="text-blue-300 font-bold">Login</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;

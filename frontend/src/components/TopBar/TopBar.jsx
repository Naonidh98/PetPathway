import React, { useState } from "react";
import NavLinks from "./NavLinks";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
const TopBar = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState(null);

  const [userNav, setUserNav] = useState("false");

  const location = useLocation();

  return (
    <div className="w-full py-4 bg-richblack-800 shadow-sm shadow-white/50">
      <div className="w-[98%] max-w-[1440px] mx-auto flex justify-between items-center">
        {/* Logo */}
        <h2 className="font-bold text-2xl font-poppins">PetPathway</h2>

        {/* Navlinks */}
        <div className="flex gap-6">
          {NavLinks.map(
            (item, index) =>
              (item.user === "all" || item.user === userNav) && (
                <Link key={index} to={item.link}>
                  <p
                    className={`hover:scale-95 transition-all font-roboto ${
                      location.pathname === item.link ? "text-yellow-25" : ""
                    }`}
                  >
                    {" "}
                    {item.title}{" "}
                  </p>
                </Link>
              )
          )}
        </div>

        {/* login Sigup + dashboard btns */}
        <div className="flex items-center gap-4 font-poppins font-semibold">
          {!user && (
            <button
              onClick={() => {
                navigate("/login");
              }}
              className="text-blue-50 border-2 border-blue-200 rounded-md py-2 px-4"
            >
              Login
            </button>
          )}
          {!user && (
            <button
              onClick={() => {
                navigate("/register");
              }}
              className="bg-blue-200 text-white border-2 border-blue-200 rounded-md py-2 px-4"
            >
              Sign up
            </button>
          )}

          {user && (
            <button
              onClick={() => {
                navigate("/dashboard");
              }}
              className="text-blue-50 border-2 border-blue-200 rounded-md py-2 px-4"
            >
              Dashboard
            </button>
          )}
          {user && (
            <button
              onClick={() => {
                navigate("/");
              }}
              className="bg-blue-200 text-white border-2 border-blue-200 rounded-md py-2 px-4"
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default TopBar;

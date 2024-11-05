import React, { useEffect, useState } from "react";
import NavLinks from "./NavLinks";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../services/operations/auth";
import { FaSearch } from "react-icons/fa";
import { IoMdClose, IoIosSearch } from "react-icons/io";

const TopBar = () => {
  const { user } = useSelector((state) => state.user);
  const { token } = useSelector((state) => state.user);

  const [userNav, setUserNav] = useState("false");
  const [searchBar, setSearchBar] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const dispatch = useDispatch();

  useEffect(() => {
    if (user) {
      setUserNav("true");
    } else {
      setUserNav("false");
    }
  }, [user]);

  return (
    <div className="w-full py-4 bg-richblack-800 shadow-sm shadow-white/50 relative">
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
          <button
            onClick={() => {
              setSearchBar(!searchBar);
            }}
            className="font-semibold flex  items-center gap-1 hover:scale-95 transition-all font-poppins"
          >
            <span>
              {searchBar ? (
                <IoMdClose className="text-2xl" />
              ) : (
                <IoIosSearch className="text-2xl" />
              )}
            </span>{" "}
            <span>
            {
              searchBar ? "Close" : "Search"
            }
            </span>
          </button>

          {!token && (
            <button
              onClick={() => {
                navigate("/login");
              }}
              className="text-blue-50 border-2 border-blue-200 rounded-md py-2 px-4"
            >
              Login
            </button>
          )}
          {!token && (
            <button
              onClick={() => {
                navigate("/register");
              }}
              className="bg-blue-200 text-white border-2 border-blue-200 rounded-md py-2 px-4"
            >
              Sign up
            </button>
          )}

          {token && (
            <button
              onClick={() => {
                navigate("/dashboard/my-profile");
              }}
              className="text-blue-50 border-2 border-blue-200 rounded-md py-2 px-4"
            >
              Dashboard
            </button>
          )}
          {token && (
            <button
              onClick={() => {
                dispatch(logout(navigate));
              }}
              className="bg-blue-200 text-white border-2 border-blue-200 rounded-md py-2 px-4"
            >
              Logout
            </button>
          )}
        </div>
      </div>
      {/* Search bar */}
      <div className={`shadow-lg shadow-richblack-700 absolute ${searchBar ? "top-[80px]" : "top-[-180px]"} transition-all left-0 bg-white flex justify-center w-full z-10`}>
        <input type="text" placeholder="Search..." className="py-2 text-xl w-[98%] max-w-[1440px] bg-transparent outline-none border-none text-black font-roboto"/>
      </div>
    </div>
  );
};

export default TopBar;

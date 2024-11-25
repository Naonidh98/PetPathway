import React, { useEffect, useState } from "react";
import NavLinks from "./NavLinks";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../services/operations/auth";
import { FaShoppingCart } from "react-icons/fa";
import { IoMdClose, IoIosSearch } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";

const TopBar = () => {
  const { user } = useSelector((state) => state.user);
  const { token } = useSelector((state) => state.user);

  const [userNav, setUserNav] = useState("false");
  const [searchBar, setSearchBar] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const [query, setQuery] = useState("");

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
        <h2
          className="font-bold text-xl lg:text-2xl font-poppins cursor-pointer"
          onClick={() => {
            navigate("/");
          }}
        >
          PetPathway
        </h2>

        {/* Navlinks */}
        <div className="hidden lg:flex lg:pl-[50px] xl:pl-[180px]">
          <div className="flex gap-6">
            {NavLinks.map(
              (item, index) =>
                (item.user === "all" || (user && item.user === user.type)) && (
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
        </div>

        {/* login Sigup + dashboard btns */}
        <div className="hidden lg:flex items-center gap-4 font-poppins font-semibold">
          <div>
            {user && user.type === "user" && (
              <div className="flex gap-4">
                <button
                  onClick={() => {
                    setSearchBar(!searchBar);
                  }}
                  className="font-semibold flex  items-center gap-1 hover:scale-95 transition-all font-poppins"
                >
                  <span>
                    {searchBar ? (
                      <IoMdClose className="text-xl xl:text-2xl" />
                    ) : (
                      <IoIosSearch className="text-xl xl:text-2xl" />
                    )}
                  </span>{" "}
                  <span>{searchBar ? "Close" : "Search"}</span>
                </button>
                <button
                  onClick={() => {
                    navigate("/cart");
                  }}
                  className="font-semibold flex  items-center gap-1 hover:scale-95 transition-all font-poppins"
                >
                  <span className="px-2">
                    <FaShoppingCart className="text-xl" />
                  </span>
                </button>
              </div>
            )}
          </div>

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

        {/* Menu btn */}
        <button
          onClick={() => {
            setShowMenu(!showMenu);
          }}
          className="lg:hidden"
        >
          {showMenu ? (
            <IoMdClose className="text-white text-xl" />
          ) : (
            <RxHamburgerMenu className="text-white text-xl" />
          )}
        </button>
      </div>
      {/* Search bar */}
      <div
        className={`shadow-lg shadow-richblack-700 absolute ${
          searchBar ? "top-[80px]" : "top-[-180px]"
        } transition-all left-0 bg-white flex justify-center w-full z-10`}
      >
        <input
          onChange={(e) => {
            setQuery(e.target.value);
          }}
          onKeyDown={(event) => {
            var code = event.keyCode || event.which;
            if (query !== "" && code === 13) {
              navigate(`/search/${query}`);
              window.scroll(0, 0);
              setQuery("");
              setSearchBar(false);
            }
          }}
          type="text"
          placeholder="Search..."
          className="py-2 text-xl w-[98%] max-w-[1440px] bg-transparent outline-none border-none text-black font-roboto"
        />
      </div>
    </div>
  );
};

export default TopBar;

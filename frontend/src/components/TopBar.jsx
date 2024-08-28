import React from "react";
import Navlinks from "../data/Navlinks";
import { Link } from "react-router-dom";
import { useState } from "react";
const TopBar = () => {

    
  //Todo  : fetch user from redux
  const [user, setUser] = useState(false);
  //temp
  const [userAvailable, setUserAvailable] = useState("false");

  return (
    <div className="w-full bg-black text-white">
      <div className="w-[98%] max-w-[1280px] py-4 mx-auto flex justify-between items-center">
        {/* Logo */}
        <div>PetPathway</div>

        {/* Links */}
        <ul className="flex gap-8 items-center">
          {Navlinks.map(
            (item) =>
              (item.user === userAvailable || item.user === "all") && (
                <Link to={item?.link} key={item?.id}>
                  {item.title}
                </Link>
              )
          )}
        </ul>

        {/* Dashboard + login & Signup */}
        <div className="flex gap-6 items-center">
          {!user && <button className="bg-blue-200 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full shadow-lg transition">Login</button>}
          {!user && <button className="bg-blue-200 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full shadow-lg transition">Signup</button>}

          {user && <button className="bg-blue-200 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full shadow-lg transition">Dashboard</button>}
          {user && <button className="bg-blue-200 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full shadow-lg transition">Logout</button>}
        </div>
      </div>
    </div>
  );
};

export default TopBar;

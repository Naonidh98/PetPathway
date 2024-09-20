import { useState } from "react";
import BarLink from "./BarLink";
import SideBarLinks from "./SideBarLinks";
import { Link } from "react-router-dom";
import { FaGear } from "react-icons/fa6";
import { IoLogOut } from "react-icons/io5";

const SideBar = () => {
  return (
    <div
      className="hidden min-w-[150px] flex-col border-r-[1px] border-r-richblack-700 lg:flex
        h-[calc[100vh-3.5rem)] bg-richblack-800 py-10 px-2"
    >
      {SideBarLinks.map((data, index) => (
        <div key={index}>
          <BarLink
            index={index}
            link={data.link}
            title={data?.title}
            iconName={data?.icon}
            type={data.type}
          />
        </div>
      ))}

      <div className="w-full h-1 bg-white/80 my-4"></div>

      <div>
        <Link to="/dashboard/setting">
          <div className="text-white flex gap-2 items-center py-4">
            <div>
              <FaGear className="md:text-lg text-3xl" />
            </div>
            <div>Settings</div>
          </div>
          <div className="text-white flex gap-2 items-center py-4">
            <div>
              <IoLogOut className="md:text-lg text-3xl" />
            </div>
            <div>Logout</div>
          </div>
        </Link>
      </div>
    </div>
  );
};
export default SideBar;

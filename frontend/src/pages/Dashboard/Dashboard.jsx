import React from "react";
import { Outlet } from "react-router-dom";
import { SideBar } from "../../components/index";

const Dashboard = () => {
  return (
    <div className="relative flex bg-richblack-400">
      <SideBar />
      <div className=" flex-1 overflow-auto bg-richblack-900">
        <div className="py-10">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

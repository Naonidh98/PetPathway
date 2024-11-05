import React, { useState } from "react";
import DashboardChart from "./DashboardChart";
const StoreDashboard = () => {
  const [currentChart, setCurrentChart] = useState("revenue");
  return (
    <div>
      <div>
        <div className="mx-auto w-11/12 max-w-[1000px] py-10">
          <div>
            <div className="space-y-2">
              <h1 className="text-2xl font-bold text-richblack-5">
                Hi Moderator 👋
              </h1>
              <p className="font-medium text-richblack-200">
                Let's start something new
              </p>
            </div>
            <div className="my-4 flex flex-col-reverse  gap-3 md:flex-row md:flex md:h-[450px] md:space-x-4">
              <div className="flex flex-col flex-1 rounded-md bg-richblack-800 p-6">
                <div className="flex items-center justify-between">
                  <p className="text-lg font-bold text-richblack-5">
                    Visualize
                  </p>
                  <div className="flex items-center space-x-4">
                    <button
                      onClick={() => setCurrentChart("revenue")}
                      className={`px-2 py-2 rounded-md ${
                        currentChart === "revenue"
                          ? "bg-richblack-900 text-yellow-100"
                          : "bg-richblack-800 text-richblack-100"
                      }`}
                    >
                      Revenue
                    </button>
                    <button
                      onClick={() => setCurrentChart("students")}
                      className={`px-2 py-2 rounded-md ${
                        currentChart === "students"
                          ? "bg-richblack-900 text-yellow-100"
                          : "bg-richblack-800 text-richblack-100"
                      }`}
                    >
                      Students
                    </button>
                  </div>
                </div>
                {/*<DashboardChart details={details} currentChart={currentChart} />*/}
              </div>
              <div className="flex min-w-[250px] flex-col rounded-md bg-richblack-800 p-6">
                <p className="text-lg font-bold text-richblack-5">Statistics</p>
                <div className="mt-4 space-y-4">
                  <div>
                    <p className="text-lg text-richblack-200">Total Courses</p>
                    <p className="text-3xl font-semibold text-richblack-50">
                      120
                    </p>
                  </div>
                  <div>
                    <p className="text-lg text-richblack-200">Total Students</p>
                    <p className="text-3xl font-semibold text-richblack-50">
                      151
                    </p>
                  </div>
                  <div>
                    <p className="text-lg text-richblack-200">Total Earnings</p>
                    <p className="text-3xl font-semibold text-richblack-50">
                      ₹ 100
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-md bg-richblack-800 p-6">
            <div className="flex items-center justify-between">
              <p className="text-lg font-bold text-richblack-5">Your Courses</p>
              <button className="text-xs font-semibold text-yellow-50">
                View all
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoreDashboard;

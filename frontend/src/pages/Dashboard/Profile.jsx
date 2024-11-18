import React from "react";

import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const { user } = useSelector((state) => state.user);
  const navigate = useNavigate();

  return (
    <div className="mx-auto w-11/12 max-w-[1000px] font-poppins">
      <div className="">
        <h1 className="mb-14 text-3xl font-medium text-richblack-5">
          My Profile
        </h1>

        {/* section 1 */}
        <div className="flex items-center justify-between rounded-md border-[1px] border-richblack-700 bg-richblack-800 p-3 md:p-8 md:px-12">
          <div className="flex items-center gap-x-4 ">
            <img
              src={user?.profile_image}
              alt={`profile-${user?.firstName}`}
              className="aspect-square w-[78px] rounded-full object-cover"
            />
            <div className="space-y-1">
              <p className="text-lg font-semibold text-richblack-5">
                {" "}
                {user?.firstName + " " + user?.lastName}{" "}
              </p>
              <p className=" text-[11px] md:text-sm text-richblack-300 md:max-w-full max-w-[220px] break-words">
                {" "}
                {user?.email}
              </p>
            </div>
          </div>
          <div className="hidden md:block">
            <button
              onClick={() => {
                navigate("/dashboard/setting");
              }}
              className="py-2 px-4 bg-yellow-50 text-black font-bold font-roboto rounded-sm"
            >
              Edit
            </button>
          </div>
        </div>

        {/* section 2 */}
        <div className="my-10 flex flex-col gap-y-3 md:gap-y-10 rounded-md border-[1px] border-richblack-700 bg-richblack-800 p-3 md:p-8 md:px-12">
          <div className="flex w-full items-center justify-between">
            <p className="text-lg font-semibold text-richblack-5">About</p>
            <div>
              <button
                onClick={() => {
                  navigate("/dashboard/setting");
                }}
                className="py-2 px-4 bg-yellow-50 text-black font-bold font-roboto rounded-sm"
              >
                Edit
              </button>
            </div>
          </div>
          <p className="text-richblack-400 text-sm font-medium">
            {" "}
            {user?.profileId?.about ?? "Write Something about Yourself"}
          </p>
        </div>

        {/* section 3 */}
        <div className="my-10 flex flex-col gap-y-10 rounded-md border-[1px] border-richblack-700 bg-richblack-800 p-3 md:p-8 md:px-12">
          <div className="flex w-full items-center justify-between">
            <p className="text-lg font-semibold text-richblack-5">
              Personal Details
            </p>
            <div className="">
              <button
                onClick={() => {
                  navigate("/dashboard/setting");
                }}
                className="py-2 px-4 bg-yellow-50 text-black font-bold font-roboto rounded-sm"
              >
                Edit
              </button>
            </div>
          </div>
          <div className="flex gap-y-5 md:flex-row flex-col max-w-[500px] justify-between">
            <div className="flex flex-col gap-y-5">
              <div>
                <p className="mb-2 text-sm text-richblack-100">First Name</p>
                <p className="text-sm font-medium text-richblack-5">
                  {user?.firstName}
                </p>
              </div>
              <div>
                <p className="mb-2 text-sm text-richblack-100">Email</p>
                <p className="text-sm font-medium text-richblack-5 break-words">
                  {user?.email}
                </p>
              </div>
              <div>
                <p className="mb-2 text-sm text-richblack-100">Gender</p>
                <p className="text-sm font-medium text-richblack-5">
                  {user?.profileId?.gender ?? "NA"}
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-y-5">
              <div>
                <p className="mb-2 text-sm text-richblack-100">Last Name</p>
                <p className="text-sm font-medium text-richblack-5">
                  {user?.lastName}
                </p>
              </div>
              <div>
                <p className="mb-2 text-sm text-richblack-100">Phone Number</p>
                <p className="text-sm font-medium text-richblack-5">
                  {user?.profileId?.contact_no ?? "NA"}
                </p>
              </div>
              <div>
                <p className="mb-2 text-sm text-richblack-100">Date of Birth</p>
                <p className="text-sm font-medium text-richblack-5">
                  {user?.profileId?.dob ?? "NA"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

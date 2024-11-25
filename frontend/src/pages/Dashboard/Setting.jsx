import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateProfileImage } from "../../services/operations/profie";
import { IoTrashBin } from "react-icons/io5";
import { updatePassword } from "../../services/operations/auth";
import { updateProfileInfo } from "../../services/operations/profie";

const Setting = () => {
  const dispatch = useDispatch();
  const { user, token } = useSelector((state) => state.user);
  const [file, setFile] = useState(null);

  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [passLoading, setPassLoading] = useState(false);

  const [profileLoading, setProfileLoading] = useState(false);

  const [about, setAbout] = useState("");
  const [dob, setDob] = useState("");
  const [contact_no, setContact_no] = useState("");

  return (
    <div className="mx-auto w-11/12 max-w-[1000px] font-poppins">
      <div className="">
        <h1 className="mb-14 text-3xl font-medium text-richblack-5">
          Settings
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
                Edit Profile Image
              </p>
              <p className=" text-[11px] md:text-sm text-richblack-300 md:max-w-full max-w-[220px] break-words">
                {" "}
                {user?.firstName + " " + user?.lastName}{" "}
              </p>
              <p>{file ? `File selected : ${file.name}` : ``}</p>
            </div>
          </div>
          <div className="flex gap-4 items-center">
            <label
              htmlFor="profileImg"
              className="cursor-pointer py-2 px-4 border-2 border-white  font-bold font-roboto rounded-sm"
            >
              Select
            </label>
            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={(e) => {
                setFile(e.target.files[0]);
              }}
              id="profileImg"
            />
            <button
              onClick={() => {
                dispatch(updateProfileImage(file, token));
              }}
              className="py-2 px-4 bg-yellow-50 text-black font-bold font-roboto rounded-sm"
            >
              Save
            </button>
          </div>
        </div>

        {/* section 2 */}
        <div className="my-10 flex flex-col gap-y-3 md:gap-y-10 rounded-md border-[1px] border-richblack-700 bg-richblack-800 p-3 md:p-8 md:px-12">
          <h2 className="text-lg font-semibold text-richblack-5">
            Edit Personal Info
          </h2>

          <form
            className="flex flex-col gap-4"
            onSubmit={(e) => {
              e.preventDefault();
              dispatch(
                updateProfileInfo(
                  {
                    about,
                    dob,
                    contact_no,
                  },
                  token,
                  setProfileLoading
                )
              );
            }}
          >
            <div className="flex flex-col gap-2">
              <label htmlFor="about" className="cursor-pointer">
                About :
              </label>
              <textarea
                rows={3}
                type="text"
                id="about"
                className="bg-richblack-600 rounded-sm p-2"
                onChange={(e) => {
                  setAbout(e.target.value);
                }}
                placeholder={
                  user?.profileId?.about
                    ? user?.profileId?.about
                    : "write something about yourself"
                }
              />
            </div>

            <div className="flex justify-between">
              <div className="flex flex-col gap-2 w-1/3">
                <label htmlFor="dob" className="cursor-pointer">
                  DOB :
                </label>
                <input
                  type="date"
                  id="dob"
                  onChange={(e) => {
                    setDob(e.target.value);
                  }}
                  className="bg-richblack-600 rounded-sm p-2"
                  placeholder={
                    user?.profileId?.dob ? user?.profileId?.dob : "NA"
                  }
                />
              </div>

              <div className="flex flex-col gap-2 w-1/3">
                <label htmlFor="phNo" className="cursor-pointer">
                  Contact Number :
                </label>
                <input
                  type="text"
                  id="phNo"
                  onChange={(e) => {
                    setContact_no(e.target.value);
                  }}
                  className="bg-richblack-600 rounded-sm p-2"
                  placeholder={
                    user?.profileId?.contact_no
                      ? user?.profileId?.contact_no
                      : "Enter your contact number"
                  }
                />
              </div>
            </div>

            <div className="flex justify-end">
              <button className="my-4 w-fit py-2 px-4 bg-yellow-50 text-black font-bold font-roboto rounded-sm">
                Update
              </button>
            </div>
          </form>
        </div>

        {/* section 3 */}
        <div className="my-10  items-center justify-between gap-y-10 rounded-md border-[1px] border-richblack-700 bg-richblack-800 p-3 md:p-8 md:px-12">
          <h2 className="text-lg font-semibold text-richblack-5">
            Update Password
          </h2>
          <form
            className="mt-8 flex flex-col gap-[28px]"
            onSubmit={(e) => {
              e.preventDefault();
              dispatch(
                updatePassword(
                  {
                    newPassword: newPassword,
                    confirmPassword: confirmPassword,
                    oldPassword: oldPassword,
                  },
                  token,
                  setPassLoading
                )
              );
            }}
          >
            <div className="flex flex-col gap-2">
              <label htmlFor="oldPass" className="cursor-pointer">
                Old Password :
              </label>
              <input
                type="password"
                id="oldPass"
                className="bg-richblack-600 rounded-sm p-2"
                onChange={(e) => {
                  setOldPassword(e.target.value);
                }}
                placeholder={"Enter your old password"}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="newPass" className="cursor-pointer">
                New Password :
              </label>
              <input
                type="password"
                id="newPass"
                className="bg-richblack-600 rounded-sm p-2"
                onChange={(e) => {
                  setNewPassword(e.target.value);
                }}
                placeholder={"Enter your new password"}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="confirmPass" className="cursor-pointer">
                Confirm Password :
              </label>
              <input
                type="password"
                id="confirmPass"
                className="bg-richblack-600 rounded-sm p-2"
                onChange={(e) => {
                  setConfirmPassword(e.target.value);
                }}
                placeholder={"Confirm your new password"}
              />
            </div>

            <div className="flex justify-end">
              {!passLoading && (
                <button className="my-4 w-fit py-2 px-4 bg-yellow-50 text-black font-bold font-roboto rounded-sm">
                  Update
                </button>
              )}
            </div>
          </form>
        </div>

        {/* section 4 
        <div className="my-10 flex items-center justify-between gap-y-10 rounded-md border-[1px] border-richblack-700 bg-pink-600 p-3 md:p-8 md:px-12">
          <p>Delete Account</p>
          <IoTrashBin className="text-xl cursor-pointer" />
        </div>
        */}
      </div>
    </div>
  );
};

export default Setting;

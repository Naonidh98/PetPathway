import React, { useState } from "react";
import * as Icons from "react-icons/ri";
import { Outlet, useNavigate } from "react-router-dom";
import { SideBar } from "../../components/index";
import { useSelector } from "react-redux";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import SideBarLinks from "../../components/Sidebar/SideBarLinks";
import { FaGear } from "react-icons/fa6";
import { IoLogOut } from "react-icons/io5";
import LogoutModal from "../../components/Modal/LogoutModal";

const BarLinOne = ({ title, link, type, iconName, index, setOpenBar }) => {
  const Icon = Icons[iconName];
  const naigate = useNavigate();
  return (
    <div
      key={index}
      onClick={() => {
        naigate(link);
        setOpenBar(false);
      }}
    >
      <div className="text-white  gap-2 items-center py-4 px-2 flex flex-col w-[85px] bg-blue-700 rounded-md">
        <div>
          <Icon className="md:text-lg text-3xl" />
        </div>
        <div>{title}</div>
      </div>
    </div>
  );
};

const Dashboard = () => {
  const naigate = useNavigate();
  const { user } = useSelector((state) => state.user);
  const [openBar, setOpenBar] = useState(false);
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="relative flex bg-richblack-400">
      <div class="fixed bottom-0 start-0 md:hidden w-full font-bold font-poppins bg-blue-400 border-2 border-white/50">
        <div
          className={`${
            openBar ? "" : "hidden"
          } transition-all bg-blue-500 p-2 w-[100%] mx-auto border-b-2 flex items-center justify-between flex-wrap gap-4`}
        >
          {SideBarLinks.map((data, index) => {
            if (data.type === user.type || data.type === "all") {
              return (
                <div key={index}>
                  <BarLinOne
                    index={index}
                    link={data.link}
                    title={data?.title}
                    iconName={data?.icon}
                    type={data.type}
                    setOpenBar={setOpenBar}
                    user={user}
                  />
                </div>
              );
            }
          })}

          <div>
            <div
              onClick={() => {
                naigate("/dashboard/setting");
                setOpenBar(false);
              }}
            >
              <div className="text-white  gap-2 items-center py-4 px-2 flex flex-col w-[85px] bg-blue-700 rounded-md">
                <div>
                  <FaGear className="md:text-lg text-3xl" />
                </div>
                <div>Settings</div>
              </div>
            </div>
          </div>
          <div>
            <div
              onClick={() => {
                setShowModal(true);
                setOpenBar(false);
              }}
            >
              <div className="text-white  gap-2 items-center py-4 px-2 flex flex-col w-[85px] bg-blue-700 rounded-md">
                <div>
                  <IoLogOut className="md:text-lg text-3xl" />
                </div>
                <div>Log out</div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-[98%] mx-auto flex justify-between items-center py-2">
          <div>
            <span>{user.firstName}</span>
            <span> </span>
            <span>{user.lastName}</span>
          </div>
          <div
            className="text-white"
            onClick={() => {
              setOpenBar(!openBar);
            }}
          >
            {openBar ? <IoMdClose /> : <GiHamburgerMenu />}
          </div>
        </div>
      </div>

      <SideBar setShowModal={setShowModal}/>
      <div className=" flex-1 overflow-auto bg-richblack-900">
        <div className="py-10">
          <Outlet />
        </div>
      </div>

      {/* Log out modal */}
      <div>{showModal && <LogoutModal setShowModal={setShowModal} />}</div>
    </div>
  );
};

export default Dashboard;

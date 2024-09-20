import React from "react";
import * as Icons from "react-icons/ri";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const BarLink = ({ title, link, type, iconName, index }) => {
  const Icon = Icons[iconName];
  const { user } = useSelector((state) => state.user);

  return (
    <Link key={index} to={link}>
      {(user?.type === type || type === "all") && (
        <div className="text-white flex gap-2 items-center py-4">
          <div>
            <Icon className="md:text-lg text-3xl" />
          </div>
          <div>{title}</div>
        </div>
      )}
    </Link>
  );
};

export default BarLink;

import React, { useEffect, useState } from "react";

import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

const ItemInfo = ({ item }) => {
  const [avgRating, setAvgRating] = useState(0);

  return (
    <>
      <h1 className="text-2xl font-bold font-roboto">{item?.title}</h1>
      <h1 className="text-md capitalize font-poppins my-1 font-semibold">
        {item?.brand}
      </h1>
      <div className="flex items-center mt-2"></div>

      <div className="mt-4">
        <span className="">M.R.P: ₹ {item?.price}</span>
      </div>
      <div className="text-richblack-100">Inclusive of all taxes</div>
    </>
  );
};

export default ItemInfo;

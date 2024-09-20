import React, { useEffect, useState } from "react";

import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

const ItemInfo = ({ item }) => {
  const [avgRating, setAvgRating] = useState(0);

  useEffect(() => {
    const averageRating = (
      item.reviews.reduce((acc, cur) => acc + cur.rating, 0) /
      item.reviews.length
    ).toFixed(2);

    setAvgRating(averageRating);
  }, []);

  return (
    <>
      <h1 className="text-2xl font-bold font-roboto">{item.title}</h1>
      <h1 className="text-md capitalize font-poppins my-1 font-semibold">{item.brand}</h1>
      <div className="flex items-center mt-2">
        <div className="flex items-center text-yellow-300 gap-[3px] text-2xl">
          {Array.from({ length: 5 }).map((_, index) => (
            <span key={index}>
              {index < avgRating ? <FaStar /> : <FaRegStar />}
            </span>
          ))}
        </div>

        <span className="text-xs text-richblack-100">({avgRating})</span>
        <span className="ml-2 text-md">{item.reviews.length} review</span>
      </div>

      <div className="mt-4">
        <span className="line-through text-richblack-400">
          M.R.P: ₹{item.price}
        </span>
        <span className="text-3xl font-bold ml-2">
          ₹{(item.price * ((100 - item.discount) / 100)).toFixed(2)}
        </span>
        <span className="text-sm ml-2 text-caribbeangreen-200 font-bold">
          {item.discount}% OFF
        </span>
      </div>
      <div className="text-richblack-100">Inclusive of all taxes</div>
    </>
  );
};

export default ItemInfo;

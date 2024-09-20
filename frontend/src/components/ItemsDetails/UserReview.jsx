import React from "react";

import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

const UserReview = ({ review }) => {
  return (
    <div className="flex py-4 font-roboto">
      <img
        alt={review.user.name}
        className="w-10 h-10 rounded-full bg-black"
        height="25"
        width="25"
        src={review.user.image}
      />
      <div className="ml-4">
        <div className="flex items-center">
          <span className="font-semibold text-md capitalize">
            {review.user.name}
          </span>
          <div className="flex items-center text-yellow-300 gap-[3px] ml-2">
            {Array.from({ length: 5 }).map((_, index) => (
              <span key={index}>
                {index < review.rating ? <FaStar /> : <FaRegStar />}
              </span>
            ))}
          </div>
        </div>
        <div className="text-xs text-richblack-300 -mt-1">
          {new Date(review.createdAt || Date.now()).toDateString()}
        </div>
        <p className="text-sm">{review.comment}</p>
      </div>
    </div>
  );
};

export default UserReview;

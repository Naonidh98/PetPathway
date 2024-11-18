import React from "react";
import { IoStarSharp } from "react-icons/io5";

const ReviewCard = ({ data, index }) => {
  return (
    <div
      key={index}
      className="w-[355px] bg-richblack-800 rounded-xl p-4 flex flex-col gap-y-[18px]"
    >
      {/* Stars */}
      <div className="flex gap-1 items-center">
        <IoStarSharp className={`${(1 <= data.rating) ? "text-yellow-50" : ""}`}/>
        <IoStarSharp className={`${(2 <= data.rating) ? "text-yellow-50" : ""}`}/>
        <IoStarSharp className={`${(3 <= data.rating) ? "text-yellow-50" : ""}`} />
        <IoStarSharp className={`${(4 <= data.rating) ? "text-yellow-50" : ""}`}/>
        <IoStarSharp className={`${(5 <= data.rating) ? "text-yellow-50" : ""}`}/>
      </div>

      <div className="text-sm md:text-md font-roboto">{data.comment}</div>

      <div className="flex items-center gap-4 mt-4">
        <img
          src={data.image}
          loading="lazy"
          alt="client"
          className="w-[55px] h-[55px] rounded-full object-cover overflow-hidden"
        />
        <div>{data.name}</div>
      </div>
    </div>
  );
};

export default ReviewCard;

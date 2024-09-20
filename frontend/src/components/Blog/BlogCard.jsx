import React, { useState } from "react";
import { FaHeart, FaRegHeart, FaRegStar } from "react-icons/fa";
import { RiShare2Line } from "react-icons/ri";

const BlogCard = ({ title, description, author, date, image, likes }) => {
  const [liked, setLiked] = useState(false);
  const handleLike = () => {
    setLiked(!liked);
  };

  return (
    <div className="rounded-md overflow-hidden shadow-lg bg-richblack-800">
      <img className="w-full h-48 object-fill" src={image} alt={title} />
      <div className="px-6 py-4">
        <h2 className="font-bold text-xl mb-2">{title}</h2>
        <p className="text-sm text-[gray] pb-2">Written By {author}</p>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <div className="flex justify-between ">
          <div className="flex items-start gap-4 text-xl">
            <button
              onClick={handleLike}
              className="flex flex-col items-center "
            >
              {liked ? (
                <FaHeart className="text-[red] transform transition-transform duration-100 hover:scale-125" />
              ) : (
                <FaRegHeart className="transform transition-transform duration-100 hover:scale-125" />
              )}
              <p className="text-[gray] text-base">{likes}</p>
            </button>
            <button className="transform transition-transform duration-100 hover:scale-125 ">
              <FaRegStar />
            </button>
            <button className="transform transition-transform duration-100 hover:scale-125 ">
              <RiShare2Line />
            </button>
          </div>
          <div>
            <p className="text-sm text-gray-600">
              {date} | <button className="text-[#3399ff]">Read More</button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;

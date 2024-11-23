import React, { useEffect, useState } from "react";
import { FaHeart, FaRegHeart, FaRegStar } from "react-icons/fa";
import { RiShare2Line } from "react-icons/ri";
import RawHtml from "react-raw-html";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import { likeBlog } from "../../services/operations/blog";
import { useDispatch, useSelector } from "react-redux";

const BlogCard = ({ data }) => {
  const { token, user } = useSelector((state) => state.user);
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (data) {
      setLiked(data.likes.find((userId) => userId === user._id));
      setLikeCount(data.likes.length);
    }
  }, [data]);

  const handleLike = () => {
    dispatch(likeBlog({ blogId: data._id }, token, setLikeCount, setLiked));
  };

  return (
    <div>
      <div className="rounded-md overflow-hidden shadow-lg bg-richblack-800 h-full flex flex-col">
        <img src={data?.image} className={"w-full"} loading="lazy" />
        <div className="px-6 py-4">
          <h2 className="font-bold text-xl mb-2">{data?.title}</h2>
          <p className="text-sm text-[gray] pb-2">{`Written By ${data?.author?.firstName} ${data?.author?.lastName}`}</p>
          <div className="text-gray-700 text-base h-[144px]  overflow-hidden">
            <RawHtml.div>{data?.description}</RawHtml.div>
          </div>
        </div>
        <div className="px-6 pt-4 pb-2 mt-auto">
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
                <p className="text-[gray] text-base">{likeCount}</p>
              </button>
            </div>
            <div>
              <p className="text-sm text-gray-600">
                {moment(data?.createdAt ?? Date.now()).fromNow()} |{" "}
                <button
                  className="text-[#3399ff]"
                  onClick={() => navigate(`/blog/${data?._id}`)}
                >
                  Read More
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;

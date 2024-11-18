import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import breed1 from "../../assets/breed1.png";
import { FaHeart, FaRegHeart, FaRegStar } from "react-icons/fa";
import { RiShare2Line } from "react-icons/ri";
import { IoIosArrowBack } from "react-icons/io";
import LoadingTwo from "../Spinner/LoadingTwo";
import { getBlogData } from "../../services/operations/blog";
import { useDispatch, useSelector } from "react-redux";
import RawHtml from "react-raw-html";
import moment from "moment";

const BlogDetail = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { id } = useParams();

  const [liked, setLiked] = useState(false);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const { token } = useSelector((state) => state.user);

  const handleLike = () => {
    setLiked(!liked);
  };

  const goBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    dispatch(getBlogData({ blogId: id }, token, setData, setLoading));
  }, []);

  if (loading) {
    return (
      <div className="w-screen h-screen flex justify-center items-center">
        <LoadingTwo />
      </div>
    );
  }

  if (!data) {
    return <div>Invalid request</div>;
  }

  return (
    <>
      <button
        className="mx-10 mt-5 flex gap-2 items-center hover:text-[#2d42bb]"
        onClick={goBack}
      >
        <IoIosArrowBack /> Back
      </button>
      <div className=" flex flex-col items-center mx-60 my-10">
        {/* blog title  */}
        <div className="mb-4">
          <h1 className="text-5xl font-bold text-center">{data?.title}</h1>
        </div>

        <div className="mb-10 text-center">
          {/* blog author */}
          <p className="text-base text-center text-gray-600 text-[#b4b4b4]">
            Written By <span>{data?.author?.firstName}</span>{" "}
            <span>{data?.author?.lastName}</span>
          </p>

          <p className="text-[gray]">
            {moment(data?.createdAt ?? Date.now()).fromNow()}
          </p>
        </div>
        {/* blog Image */}
        <div>
          {data.image && (
            <div className="w-[50rem] h-[30rem] overflow-hidden rounded-lg mb-10">
              <img src={data?.image} className="w-full h-full object-cover" />
            </div>
          )}
        </div>

        {/* blog Description */}
        <div className="w-full text-left">
        <RawHtml.div>{data?.description}</RawHtml.div>
        </div>

        {/* blog buttons  */}
        <div className="flex items-start justify-end  gap-4 text-xl  w-full">
          <button onClick={handleLike} className="flex flex-col items-center ">
            {liked ? (
              <FaHeart className="text-[red] transform transition-transform duration-100 hover:scale-125" />
            ) : (
              <FaRegHeart className="transform transition-transform duration-100 hover:scale-125" />
            )}
            <p className="text-[gray] text-base">{data?.likes?.length}</p>
          </button>
          <button className="transform transition-transform duration-100 hover:scale-125 ">
            <FaRegStar />
          </button>
          <button className="transform transition-transform duration-100 hover:scale-125 ">
            <RiShare2Line />
          </button>
        </div>

        {/* scroll to top button  */}
        {/* <button className="fixed right-10 bottom-10 rounded-full text-2xl p-3 bg-black z-[1000]" onClick={handleScrollToTop}><IoIosArrowUp /></button> */}
      </div>
    </>
  );
};

export default BlogDetail;

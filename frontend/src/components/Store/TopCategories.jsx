import React from "react";
import { topCategoriesData } from "./data";
import Img from "../LazyLoadImage/Img";
import { Link, useNavigate } from "react-router-dom";

const TopCategories = ({data}) => {

  const navigate  = useNavigate();
  return (
    <div className="py-[34px]">
      <h2 className="text-center text-4xl font-poppins font-bold my-4">
        Top Categories
      </h2>
      <div className="my-4 flex flex-wrap gap-4 justify-evenly xl:justify-between">
        {data.map((item, index) => (
          <div
            className="hover:scale-95 transition-all cursor-pointer flex flex-col gap-y-4 bg-richblack-800 rounded-md overflow-hidden"
            key={index}
            onClick={()=>{
              navigate(`/category/${item?._id}`);
            }}
          >
            <Img
              src={item.image || item.thumbnail}
              className="w-[250px] h-[250px] object-cover"
            />
            <p className="font-roboto text-lg font-bold p-4">{item.title}</p>
          </div>
        ))}
        <Link to={"/store/categories/all"}>
          <div className="cursor-pointer bg-blue-300 rounded-md text-xl font-roboto font-bold text-white hover:scale-95 transition-all h-[326px] w-[250px] flex items-center justify-center">
            See more
          </div>
        </Link>
      </div>
    </div>
  );
};

export default TopCategories;

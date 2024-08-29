import React from "react";
import topCategoriesData from "./data";
import Img from "../LazyLoadImage/Img";
const TopCategories = () => {
  return (
    <div className="py-[34px]">
      <h2 className="text-center text-4xl font-poppins font-bold my-4">
        Top Categories
      </h2>
      <div className="my-4 flex flex-wrap justify-between gap-6">
        {topCategoriesData.map((item, index) => (
          <div className="hover:scale-95 transition-all cursor-pointer flex flex-col gap-y-4 bg-richblack-800 rounded-md overflow-hidden" key={index}>
            <Img src={item.image} className="w-[250px] h-[250px] object-cover"/>
            <p className="font-roboto text-lg font-bold p-4">{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopCategories;

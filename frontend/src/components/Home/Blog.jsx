import React from "react";
import { blogData } from "./data";
import Img from "../LazyLoadImage/Img";
const Blog = () => {
  return (
    <div className="py-[34px]">
      {/* Top */}
      <div className="text-center">
        <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl font-poppins">
          Blogs
        </h2>
        <p className="text-sm sm:text-lg font-roboto my-4">
          Explore our Blog Section for expert tips, pet care advice, and the
          latest trends. Learn about health, training, and fun activities to
          keep your furry friends happy and healthy!
        </p>
      </div>

      {/*Blog card*/}
      <div className="flex justify-evenly mt-[25px] flex-wrap gap-4">
        {blogData.map((data, index) => (
          <div
            key={index}
            className="w-[250px]  bg-richblack-800 p-1 rounded"
          >
            <Img src={data.image} className="w-full" />

            <p className="text-sm lg:text-md">{data.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;

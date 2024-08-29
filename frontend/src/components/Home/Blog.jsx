import React from "react";
import { blogData } from "./data";
import Img from "../LazyLoadImage/Img";
const Blog = () => {
  return (
    <div className="py-[34px]">
      {/* Top */}
      <div className="text-center">
        <h2 className="font-bold text-4xl font-poppins">Blogs</h2>
        <p className="text-lg font-roboto my-4">
          All producta are disgned for ease and durable you sndmsd nsmndsd snmsd
          sdns dsdnsd
        </p>
      </div>

      {/*Blog card*/}
      <div className="flex justify-between mt-[25px]">
        {blogData.map((data, index) => (
          <div
            key={index}
            className="w-[250px] rounded-lg overflow-hidden shadow-2xl cursor-pointer hover:scale-105 transition-all"
          >
            <Img src={data.image} className="w-full object-cover" />

            <p className="p-4">{data.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;

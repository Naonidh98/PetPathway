import React from "react";
import { blogData } from "./data";
const Blog = () => {
  return (
    <div className="py-[25px]">
      {/* Top */}
      <div className="text-center">
        <h2 className="font-bold text-4xl">Blogs</h2>
        <p className="text-xl">
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
            <img src={data.image} alt="blog" className="w-full object-cover" />

            <p className="p-4">{data.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;

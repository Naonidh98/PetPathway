import React from "react";
import Filter from "../components/Store/Filter";
import ItemCard from "../components/Store/ItemCard";

const CategoryItems = () => {
  return (
    <div>
      {/* top */}
      <div className="bg-richblack-800">
        <div className="max-w-[1440px] mx-auto py-[24px] flex flex-row-reverse justify-evenly">
          {/* Image */}
          <img
            src="https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?q=80&w=1949&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="catImage"
            className="w-[15%] rounded"
          />

          {/* Content */}
          <div className="w-[75%] flex flex-col gap-4">
            <h2 className="font-poppins text-3xl font-bold">Category Name</h2>
            <p className="font-roboto text-lg">
              kosk kslkd skdlskd sslllllllllllllllllllllllllllllllllllllll
              sdklskdl sldlskdl
            </p>

            <p className="font-medium">Total items</p>
          </div>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto py-4">
        {/* Filter */}
        <Filter />

        {/* Items */}
        <ItemCard />

        {/* load more */}
        <div className="flex justify-center my-4">
          <button className="flex justify-center gap-2 items-center text-sm font-poppins bg-blue-300 text-white font-bold rounded p-2">
            Load more
          </button>
        </div>
      </div>
    </div>
  );
};

export default CategoryItems;

import React, { useState } from "react";
import { FaFilter } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

const Filter = () => {
  const [showFilter, setShowFilter] = useState(false);
  const [openSearch,setOpenSearch] = useState(false);
  return (
    <div>
      {/* Filter */}
      <div className="flex justify-end">
        <button onClick={()=>{setShowFilter(!showFilter)}}>
          {showFilter ? (
            <p className="flex justify-center gap-2 items-center text-md font-poppins bg-white/90 text-black rounded p-2">
              <IoMdClose className="text-[15px]" /> Close
            </p>
          ) : (
            <p className="flex justify-center gap-2 items-center text-md font-poppins bg-white/90 text-black rounded p-2">
              <FaFilter className="text-[15px]" /> Filter
            </p>
          )}
        </button>
      </div>
      <hr className="w-full text-white/50 my-4 rounded" />
      <div>
        {showFilter && (
          <div>
            <div className="font-poppins">
              {/* Pet Type */}
              <div className="flex gap-4 items-center my-[15px]">
                <span className="font-semibold text-xl pr-4">Pet : </span>
                <div className="flex item-center gap-2">
                  <label>Dog</label>
                  <input type="radio" />
                </div>
                <div className="flex item-center gap-2">
                  <label>Cat</label>
                  <input type="radio" />
                </div>
                <div className="flex item-center gap-2">
                  <label>Both</label>
                  <input type="radio" />
                </div>
              </div>
              {/* Show Item */}
              <div className="flex gap-4 items-center my-[15px]">
                <span className="font-semibold text-xl pr-4">
                  Service type:{" "}
                </span>
                <div className="flex item-center gap-2">
                  <label>Pets</label>
                  <input type="radio" />
                </div>
                <div className="flex item-center gap-2">
                  <label>Items</label>
                  <input type="radio" />
                </div>
                <div className="flex item-center gap-2">
                  <label>Both</label>
                  <input type="radio" />
                </div>
              </div>
              {/* Range */}
              <div className="w-full flex items-center my-[15px]">
                <label className="font-semibold text-xl pr-4">
                  Price Range :
                </label>
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    className="bg-richblack-800 text-white p-2 rounded"
                    placeholder="Min"
                  />
                  <p>To</p>
                  <input
                    type="number"
                    className="bg-richblack-800 text-white p-2 rounded"
                    placeholder="Max"
                  />
                </div>
              </div>
              {/* Product type */}
              <div className="w-full flex items-center my-[15px]">
                <label className="font-semibold text-xl pr-4">
                  Product type :
                </label>
                <div className="flex items-center gap-2">
                  <div className="cursor-pointer px-4 py-2 rounded-full border-2 bg-yellow-50 text-black font-semibold ">
                    Toys
                  </div>
                  <div className="cursor-pointer px-4 py-2 rounded-full text-white border-2 border-white/50 font-semibold ">
                    Cloths
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-end gap-8">
              <button className="flex justify-center gap-2 items-center text-md font-poppins border-2 border-white text-white font-bold rounded px-4 py-2">
                Close
              </button>
              <button className="flex justify-center gap-2 items-center text-md font-poppins bg-blue-300 text-white font-bold rounded px-4 py-2">
                Apply
              </button>
            </div>
            <hr className="w-full text-white/50 my-4 rounded" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Filter;

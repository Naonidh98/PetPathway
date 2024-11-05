import React, { useState } from "react";
import dogLoad from "../../assets/dogPet.gif";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";

const SearchStoreItem = () => {
  const [itemForm, setItemForm] = useState(false);
  const [categoryForm, setCategoryForm] = useState(true);

  return (
    <div className="mx-auto w-11/12 max-w-[1000px] font-poppins">
      <div className="flex">
        <select className="bg-richblack-800 px-2 w-[15%]">
          <option>Category</option>
          <option>Item</option>
        </select>
        <input
          type="email"
          placeholder="Search Something..."
          className="text-black outline-none w-[70%] bg-white text-gray-600 text-sm px-4 py-3"
        />
        <button
          type="button"
          className="flex w-[15%] items-center justify-center bg-[#007bff] px-5 text-sm text-white"
        >
          Search
        </button>
      </div>

      <div className="py-6">
        <img src={dogLoad} alt="" className="w-[150px] mx-auto" />
      </div>

      <div>
        {/* category */}
        <div className="bg-richblack-800 my-[15px] text-sm p-2 py-4 rounded flex justify-evenly items-center">
          <div className="flex flex-col gap-[10px]">
            <p>Category Name</p>
            <p className="font-roboto">Category desc</p>
          </div>
          <div className="flex flex-col gap-[10px] text-sm">
            <p>
              Created at : <span>12/12/2021</span>
            </p>
            <p>
              Updated at : <span>12/12/2021</span>
            </p>
          </div>

          <div className="flex gap-[55px] text-2xl">
            <MdEdit className="text-white cursor-pointer" />
            <MdDelete className="text-white cursor-pointer" />
          </div>
        </div>
        {/*item name */}
        <div className="bg-richblack-800 my-[15px] text-sm p-2 py-4 rounded flex justify-evenly items-center">
          <div className="flex flex-col gap-[10px]">
            <p>Category Name</p>
            <p className="font-roboto">Category desc</p>
          </div>
          <div className="flex flex-col gap-[10px] text-sm">
            <p>
              Created at : <span>12/12/2021</span>
            </p>
            <p>
              Updated at : <span>12/12/2021</span>
            </p>
          </div>

          <div className="flex gap-[55px] text-2xl">
            <MdEdit className="text-white cursor-pointer" />
            <MdDelete className="text-white cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchStoreItem;

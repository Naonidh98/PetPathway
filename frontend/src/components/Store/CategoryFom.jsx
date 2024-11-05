import React from "react";

const CategoryFom = () => {
  return (
    <div>
      <div className="my-10 flex flex-col gap-y-3 md:gap-y-10 rounded-md border-[1px] border-richblack-700 bg-richblack-800 p-3 md:p-8 md:px-12">
        <h2 className="text-lg font-semibold text-richblack-5">
          Category form
        </h2>

        <form className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label htmlFor="title" className="cursor-pointer">
              Title :
            </label>
            <input
              rows={3}
              type="text"
              id="title"
              className="bg-richblack-600 rounded-sm p-2"
              placeholder="add title"
            />
            <label htmlFor="about" className="cursor-pointer">
              Description :
            </label>
            <textarea
              rows={3}
              type="text"
              id="about"
              className="bg-richblack-600 rounded-sm p-2"
              placeholder="add description"
            />
          </div>

          <div>
            <label
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              for="file_input"
            >
              Upload image
            </label>
            <input
              class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
              id="file_input"
              type="file"
            />
          </div>

          <div className="flex justify-end">
            <button className="my-4 w-fit py-2 px-4 bg-yellow-50 text-black font-bold font-roboto rounded-sm">
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CategoryFom;

import React from "react";

const ItemForm = () => {
  return (
    <div>
      <div className="my-10 flex flex-col gap-y-3 md:gap-y-10 rounded-md border-[1px] border-richblack-700 bg-richblack-800 p-3 md:p-8 md:px-12">
        <h2 className="text-lg font-semibold text-richblack-5">Item Form</h2>

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

          <div className="flex flex-col gap-2">
            <label htmlFor="category" className="cursor-pointer">
              Category :
            </label>
            <input
              type="text"
              id="category"
              className="bg-richblack-600 rounded-sm p-2"
              placeholder="add category"
            />
          </div>

          <div className="flex justify-between">
            <div className="flex flex-col gap-2 w-[45%]">
              <label htmlFor="price" className="cursor-pointer">
                Price :
              </label>
              <input
                type="text"
                id="price"
                className="bg-richblack-600 rounded-sm p-2"
                placeholder="enter price"
              />
            </div>

            <div className="flex flex-col gap-2 w-[45%]">
              <label htmlFor="brand" className="cursor-pointer">
                Brand :
              </label>
              <input
                type="text"
                id="brand"
                className="bg-richblack-600 rounded-sm p-2"
                placeholder="enter brand name"
              />
            </div>
          </div>

          <div className="flex justify-between">
            <div className="flex flex-col gap-2 w-[45%]">
              <label htmlFor="dimension" className="cursor-pointer">
                Dimension :
              </label>
              <input
                type="text"
                id="dimension"
                className="bg-richblack-600 rounded-sm p-2"
                placeholder="enter price"
              />
            </div>

            <div className="flex flex-col gap-2 w-[45%]">
              <label htmlFor="origin" className="cursor-pointer">
                Origin :
              </label>
              <input
                type="text"
                id="origin"
                className="bg-richblack-600 rounded-sm p-2"
                placeholder="enter origin"
              />
            </div>
          </div>

          <div className="flex justify-between">
            <div className="flex flex-col gap-2 w-[45%]">
              <label htmlFor="gtin" className="cursor-pointer">
                GTIN :
              </label>
              <input
                type="text"
                id="gtin"
                className="bg-richblack-600 rounded-sm p-2"
                placeholder="enter gtin number"
              />
            </div>

            <div className="flex flex-col gap-2 w-[45%]">
              <label htmlFor="sku" className="cursor-pointer">
                SKU :
              </label>
              <input
                type="text"
                id="sku"
                className="bg-richblack-600 rounded-sm p-2"
                placeholder="enter sku number"
              />
            </div>
          </div>
          
          <div className="flex justify-between">
            <div className="flex flex-col gap-2 w-[45%]">
              <label htmlFor="type" className="cursor-pointer">
                Product Type :
              </label>
              <input
                type="text"
                id="type"
                className="bg-richblack-600 rounded-sm p-2"
                placeholder="enter product type"
              />
            </div>

            <div className="flex flex-col gap-2 w-[45%]">
              <label htmlFor="policy" className="cursor-pointer">
                Return Policy :
              </label>
              <input
                type="text"
                id="policy"
                className="bg-richblack-600 rounded-sm p-2"
                placeholder="entern return policy"
              />
            </div>
          </div>

          <div>
            <label
              class="block mb-2 text-gray-900 dark:text-white"
              for="file_input"
            >
              Thumbnail :
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

export default ItemForm;

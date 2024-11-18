import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { LoadingOne } from "../../components/index";
import { useDispatch, useSelector } from "react-redux";
import { createItem } from "../../services/operations/store";
import { categoryApi } from "../../services/api";

const ItemForm = () => {
  const [loading, setLoading] = useState(false);
  const [categories, setCategory] = useState([]);

  const { token } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function submitHandler(data, event) {
    event.preventDefault();
    dispatch(createItem(data, setLoading, token));
    console.log(data);
  }

  const fetchCategories = async () => {
    setLoading(true);
    try {
      const response = await fetch(categoryApi?.get_category_name);
      const cat = await response.json();

      setCategory(cat.data);
    } catch (err) {
      console.log("Api error...", err);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <div>
      <div className="my-10 flex flex-col gap-y-3 md:gap-y-10 rounded-md border-[1px] border-richblack-700 bg-richblack-800 p-3 md:p-8 md:px-12">
        <h2 className="text-lg font-semibold text-richblack-5">Item Form</h2>

        <form
          className="flex flex-col gap-4"
          onSubmit={handleSubmit(submitHandler)}
        >
          <div className="flex flex-col gap-2">
            <label htmlFor="title" className="cursor-pointer">
              Title :
            </label>
            <input
              rows={3}
              type="text"
              id="title"
              className="bg-richblack-600 rounded-sm p-2"
              placeholder="Enter product title"
              {...register("title", { required: true })}
            />
            {errors.title && (
              <span className="text-[#FF0000] font-bold font-inter">
                Required <sup>*</sup>
              </span>
            )}

            <label htmlFor="about" className="cursor-pointer my-2">
              Description :
            </label>
            <textarea
              rows={3}
              type="text"
              id="about"
              className="bg-richblack-600 rounded-sm p-2"
              placeholder="Enter product description"
              {...register("description", { required: true })}
            />
            {errors.description && (
              <span className="text-[#FF0000] font-bold font-inter">
                Required <sup>*</sup>
              </span>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="category" className="cursor-pointer">
              Category :
            </label>

            <select
              className="bg-richblack-600 rounded-sm p-2"
              {...register("category", { required: true })}
            >
              <option value="">Select category</option>

              {categories.map((data, index) => {
                return (
                  <option key={index} value={data?.title}>
                    {data?.title}
                  </option>
                );
              })}
            </select>
            {errors.category && (
              <span className="text-[#FF0000] font-bold font-inter">
                Required <sup>*</sup>
              </span>
            )}
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
                placeholder="Enter product price"
                {...register("price", { required: true })}
              />
              {errors.price && (
                <span className="text-[#FF0000] font-bold font-inter">
                  Required <sup>*</sup>
                </span>
              )}
            </div>

            <div className="flex flex-col gap-2 w-[45%]">
              <label htmlFor="brand" className="cursor-pointer">
                Brand :
              </label>
              <input
                type="text"
                id="brand"
                className="bg-richblack-600 rounded-sm p-2"
                placeholder="Enter brand name"
                {...register("brand", { required: true })}
              />
              {errors.brand && (
                <span className="text-[#FF0000] font-bold font-inter">
                  Required <sup>*</sup>
                </span>
              )}
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
                placeholder="Enter dimensions"
                {...register("dimension", { required: true })}
              />
              {errors.dimension && (
                <span className="text-[#FF0000] font-bold font-inter">
                  Required <sup>*</sup>
                </span>
              )}
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
                {...register("origin", { required: true })}
              />
              {errors.origin && (
                <span className="text-[#FF0000] font-bold font-inter">
                  Required <sup>*</sup>
                </span>
              )}
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
                placeholder="Enter gtin number"
                {...register("gtin", { required: true })}
              />
              {errors.gtin && (
                <span className="text-[#FF0000] font-bold font-inter">
                  Required <sup>*</sup>
                </span>
              )}
            </div>

            <div className="flex flex-col gap-2 w-[45%]">
              <label htmlFor="sku" className="cursor-pointer">
                SKU :
              </label>
              <input
                type="text"
                id="sku"
                className="bg-richblack-600 rounded-sm p-2"
                placeholder="Enter sku number"
                {...register("sku", { required: true })}
              />
              {errors.sku && (
                <span className="text-[#FF0000] font-bold font-inter">
                  Required <sup>*</sup>
                </span>
              )}
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
                placeholder="Enter product type"
                {...register("type", { required: true })}
              />
              {errors.type && (
                <span className="text-[#FF0000] font-bold font-inter">
                  Required <sup>*</sup>
                </span>
              )}
            </div>

            <div className="flex flex-col gap-2 w-[45%]">
              <label htmlFor="policy" className="cursor-pointer">
                Return Policy :
              </label>

              <select
                className="bg-richblack-600 rounded-sm p-2"
                {...register("return", { required: true })}
              >
                <option selected>No return</option>
                <option>7 Day return</option>
                <option>4 Day return</option>
              </select>
              {errors.return && (
                <span className="text-[#FF0000] font-bold font-inter">
                  Required <sup>*</sup>
                </span>
              )}
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
              {...register("thumbnail", { required: true })}
            />
            {errors.thumbnail && (
              <span className="text-[#FF0000] font-bold font-inter">
                Required <sup>*</sup>
              </span>
            )}
          </div>

          <div className="flex justify-end">
            {loading ? (
              <>
                <LoadingOne />
              </>
            ) : (
              <button className="my-4 w-fit py-2 px-4 bg-yellow-50 text-black font-bold font-roboto rounded-sm">
                Create
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default ItemForm;

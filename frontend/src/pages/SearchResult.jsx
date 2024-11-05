import React from "react";
import { useParams } from "react-router-dom";
import { FaFilter } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";

const SearchResult = () => {
  const params = useParams();

  return (
    <div className="max-w-[1440px] mx-auto h-full py-4">
        
      <h2 className="font-roboto text-xl italic text-blue-100">
        Search result for {params.query}
      </h2>

      <div>
        {/* Filter */}
        <div className="flex justify-end">
          <button className="flex justify-center gap-2 items-center text-md font-poppins bg-white/90 text-black rounded p-2">
            <FaFilter className="text-[15px]" /> Filter
          </button>
        </div>
        <hr className="w-full text-white/50 my-4 rounded" />
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
            <span className="font-semibold text-xl pr-4">Service type: </span>
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
            <label className="font-semibold text-xl pr-4">Price Range :</label>
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
            <label className="font-semibold text-xl pr-4">Product type :</label>
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

      {/* Pets */}
      <div>
        <h2 className="font-poppins text-2xl">
          Pets Related to " {params.query} "
        </h2>
        <div>
          <div class="text-black relative flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
            <a
              class="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl"
              href="#"
            >
              <img
                className="object-cover"
                src="https://images.unsplash.com/photo-1507145569372-d69bae8bc9a0?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="product image"
              />
              <span class="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">
                39% OFF
              </span>
            </a>
            <div class="mt-4 px-5 pb-5">
              <a href="#">
                <h5 class="text-xl tracking-tight text-slate-900 font-poppins">
                  Nike Air MX Super 2500 - Red
                </h5>
              </a>
              <div class="mt-2 mb-5 flex items-center justify-between">
                <p>
                  <span class="text-3xl font-bold text-slate-900">$449</span>
                  <span class="text-sm text-slate-900 line-through">$699</span>
                </p>
                <div class="flex items-center">
                  <svg
                    aria-hidden="true"
                    class="h-5 w-5 text-yellow-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <svg
                    aria-hidden="true"
                    class="h-5 w-5 text-yellow-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <svg
                    aria-hidden="true"
                    class="h-5 w-5 text-yellow-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <svg
                    aria-hidden="true"
                    class="h-5 w-5 text-yellow-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <svg
                    aria-hidden="true"
                    class="h-5 w-5 text-yellow-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <span class="mr-2 ml-3 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">
                    5.0
                  </span>
                </div>
              </div>
              <button className="w-full hover:scale-90 transition-transform flex items-center justify-center gap-2 bg-blue-300 text-white rounded p-4">
                Add to cart <FaShoppingCart />
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-center my-4">
          <button className="flex justify-center gap-2 items-center text-sm font-poppins bg-blue-300 text-white font-bold rounded p-2">
            Load more
          </button>
        </div>
      </div>

      <hr className="w-full text-white/50 my-4 rounded" />

      {/* Items */}
      <div>
        <h2 className="font-poppins text-2xl">
          Items Related to " {params.query} "
        </h2>
        <div></div>
        <div className="flex justify-center my-4">
          <button className="flex justify-center gap-2 items-center text-sm font-poppins bg-blue-300 text-white font-bold rounded p-2">
            Load more
          </button>
        </div>
      </div>

    </div>
  );
};

export default SearchResult;

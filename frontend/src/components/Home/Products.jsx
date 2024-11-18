import React from "react";
import { productData } from "./data";
import Img from "../LazyLoadImage/Img";
const Products = () => {
  return (
    <div className="py-[34px] flex flex-wrap items-center justify-between">
      {/* left */}
      <div className="w-full lg:w-1/3">
        <h2 className="text-center lg:text-left font-bold text-2xl sm:text-3xl md:text-4xl font-poppins">
          Pet Products
        </h2>
        <p className="text-center lg:text-left text-sm sm:text-lg font-roboto my-2">
          From nutritious food and tasty treats to fun toys and comfortable
          bedding, our store offers everything you need to keep your pet happy,
          healthy, and entertained. We source our products from trusted brands,
          ensuring that each item meets the highest standards of quality and
          safety.
        </p>
        <div className="flex justify-center mb-12 lg:justify-start lg:mb-0">
          <button className="mt-[24px] bg-[#dc2f02] hover:scale-110 transition-all font-inter text-white px-4 py-2 rounded-xl font-[400] text-lg">
            See more
          </button>
        </div>
      </div>

      {/* Right */}
      <div className="w-full lg:w-2/3 flex flex-wrap justify-evenly lg:justify-end gap-4">
        {productData.map((data, index) => (
          <div key={index}>
            <Img
              src={data.image}
              className={
                "w-[150px] h-[150px] lg:w-[280px] lg:h-[280px] object-cover rounded-lg"
              }
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;

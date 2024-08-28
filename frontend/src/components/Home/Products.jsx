import React from "react";
import { productData } from "./data";
const Products = () => {
  return (
    <div className="py-[25px] flex items-center justify-between">
      {/* left */}
      <div className="w-1/3">
        <h2 className="font-bold text-4xl">Pet Products</h2>
        <p className="text-xl">
          All producta are disgned for ease and durable you sndmsd nsmndsd snmsd
          sdns dsdnsd
        </p>
        <button>See more</button>
      </div>

      {/* Right */}
      <div className="w-2/3 flex flex-wrap  justify-end gap-4">
        {productData.map((data, index) => (
          <div key={index}>
            <img src={data.image} alt="products" className="w-[280px] h-[280px] object-cover rounded-lg"/>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;

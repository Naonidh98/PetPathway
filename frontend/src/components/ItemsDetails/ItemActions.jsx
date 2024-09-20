import React, { useState } from "react";

import { IoIosAdd } from "react-icons/io";
import { RiSubtractLine } from "react-icons/ri";

const ItemActions = ({ item }) => {
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    console.log("handleAddToCart");
  };

  const handleQuickBuy = () => {
    console.log("handleQuickBuy");
  };

  return (
    <div className="mt-4">
      <label className="block text-xl font-medium" htmlFor="quantity">
        Quantity
      </label>
      <div className="flex mt-1">
        <button
          className="p-2 bg-blue-200 rounded-l-md text-xl"
          onClick={() => setQuantity((prev) => (prev <= 1 ? 1 : prev - 1))}
        >
          <RiSubtractLine />
        </button>
        <input
          className="w-12 text-center border-t border-b border-blue-200 bg-richblack-700 outline-none text-lg py-1"
          id="quantity"
          name="quantity"
          type="text"
          readOnly={true}
          value={quantity}
        />
        <button
          className="p-2 bg-blue-200 rounded-r-md text-2xl"
          onClick={() =>
            setQuantity((prev) => (prev >= item.stock ? item.stock : prev + 1))
          }
        >
          <IoIosAdd />
        </button>
      </div>
      <div className="flex mt-8 space-x-4">
        <button
          className="bg-blue-200 text-white border-2 border-blue-200 rounded-md py-2 px-4"
          onClick={handleAddToCart}
        >
          ADD TO CART
        </button>
        <button
          className="text-blue-50 border-2 border-blue-200 rounded-md py-2 px-4 text-bold"
          onClick={handleQuickBuy}
        >
          QUICK BUY
        </button>
      </div>
    </div>
  );
};

export default ItemActions;

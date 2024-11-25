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
      </label>
      <div className="flex mt-1"></div>
      <div className="flex mt-8 space-x-4">
        
      </div>
    </div>
  );
};

export default ItemActions;

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Img from "../LazyLoadImage/Img";
import data from "./data";

const SimilarItems = ({ item }) => {
  const [similarItems, setSimilarItems] = useState([]);

  useEffect(() => {
    setSimilarItems(data.filter((a) => a.category == item.category));
  }, []);

  return (
    <div className="flex flex-wrap justify-center gap-3 font-poppins">
      {similarItems.map((item) => (
        <Link
          key={item.id}
          to={`/store/${item.id}`}
          className="overflow-hidden rounded-lg bg-richblack-800 w-[340px] flex flex-col gap-2"
        >
          <Img
            src={item.images[0]}
            className="max-w-full h-[200px] object-cover mx-auto"
          />

          <div className="px-2">
            <p className="text-lg font-bold">{item.product}</p>
            <p className="text-sm font-inter">{item.title}</p>
            <p className="text-xl mt-2 text-blue-300 font-bold">{`Rs. ${item.price}`}</p>
          </div>

          <button className="bg-blue-300 text-white text-center w-full py-2">
            Add to cart
          </button>
        </Link>
      ))}
    </div>
  );
};

export default SimilarItems;

import React, { useState, useEffect } from "react";
import {
  DiscountBanner,
  TopCategories,
  BestSellers,
} from "../components/index";
import { storeApi } from "../services/api";
import { getStoreItem } from "../services/operations/store";
import { useDispatch } from "react-redux";
import LoadingTwo from "../components/Spinner/LoadingTwo";
import ItemCard from "../components/Store/ItemCard";

const Store = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getStoreItem(setLoading, setData));
  }, []);

  if (loading || data === null) {
    return (
      <div className="w-screen h-screen flex items-center justify-center">
        <LoadingTwo />
      </div>
    );
  }

  return (
    <div className="max-w-[1440px] mx-auto">
      {/* Discount banner */}

      <DiscountBanner />

      {/* Top categories */}
      <TopCategories data={data?.topCat} />

      {/* BestSellers */}
      <h2 className="text-center text-4xl font-poppins font-bold my-6">
        Newly Added
      </h2>
      <hr className="my-2" />
      <div className="flex gap-2 flex-wrap justify-evenly xl:justify-between">
        {data?.latest.map((data, index) => (
          <ItemCard data={data} index={index} />
        ))}
      </div>

      {/* video */}
      <video autoPlay="autoplay" loop="loop" className="w-full py-[34px]">
        <source src="https://zigly-happy-pets.s3.ap-south-1.amazonaws.com/videos/2023-09-10-drool-worthy-treats-desktop.mp4" />
      </video>

      {/* Toys */}
      <h2 className="text-center text-4xl font-poppins font-bold my-6">
        For Dogs
      </h2>
      <hr className="my-2" />
      <div className="flex gap-2 flex-wrap justify-evenly xl:justify-between">
        {data?.dog.map((data, index) => (
          <ItemCard data={data} index={index} />
        ))}
      </div>

      {/* other items */}
      <h2 className="text-center text-4xl font-poppins font-bold my-6">
        For Cats
      </h2>
      <hr className="my-2" />
      <div className="flex gap-2 flex-wrap justify-evenly xl:justify-between">
        {data?.cat.map((data, index) => (
          <ItemCard data={data} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Store;

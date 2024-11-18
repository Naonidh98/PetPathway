import React, { useState, useEffect } from "react";
import {
  DiscountBanner,
  TopCategories,
  BestSellers,
} from "../components/index";
import { storeApi } from "../services/api";
import { getStoreItem } from "../services/operations/store";
import { useDispatch } from "react-redux";

const Store = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getStoreItem(setLoading, setData));
  }, []);

  if (loading || data === null) {
    return <div>Loading</div>;
  }

  return (
    <div className="max-w-[1440px] mx-auto">
      {/* Discount banner */}
      <DiscountBanner />

      {/* Top categories */}
      <TopCategories data={data?.topCat} />

      {/* BestSellers */}
      <BestSellers data={data?.latest} />

      {/* video */}
      <video autoPlay="autplay" loop="loop" className="w-full py-[34px]">
        <source src="https://zigly-happy-pets.s3.ap-south-1.amazonaws.com/videos/2023-09-10-drool-worthy-treats-desktop.mp4" />
      </video>

      {/* Toys */}
      <BestSellers data={data?.dog} />

      {/* video */}
      <video autoPlay="autplay" loop="loop" className="w-full py-[34px]">
        <source src="https://zigly-happy-pets.s3.ap-south-1.amazonaws.com/videos/2023-09-10-drool-worthy-treats-desktop.mp4" />
      </video>

      {/* other items */}
      <BestSellers data={data?.cat} />

      {/* Reviews */}
    </div>
  );
};

export default Store;

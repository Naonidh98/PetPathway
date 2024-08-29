import React from "react";
import {
  DiscountBanner,
  TopCategories,
  BestSellers,
} from "../components/index";
const Store = () => {
  return (
    <div className="max-w-[1440px] mx-auto">
      {/* Discount banner */}
      <DiscountBanner />

      {/* Top categories */}
      <TopCategories />

      {/* BestSellers */}
      <BestSellers />

      {/* video */}
      <video autoPlay="autplay" loop="loop" className="w-full py-[34px]">
        <source src="https://zigly-happy-pets.s3.ap-south-1.amazonaws.com/videos/2023-09-10-drool-worthy-treats-desktop.mp4" />
      </video>

      {/* Toys */}
      <BestSellers />

      {/* video */}
      <video autoPlay="autplay" loop="loop" className="w-full py-[34px]">
        <source src="https://zigly-happy-pets.s3.ap-south-1.amazonaws.com/videos/2023-09-10-drool-worthy-treats-desktop.mp4" />
      </video>

      {/* other items */}
      <BestSellers />

      {/* Reviews */}
    </div>
  );
};

export default Store;

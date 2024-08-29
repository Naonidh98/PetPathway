import React from "react";

import {
  Hero,
  DogBreed,
  Products,
  Blog,
  Services,
  Reviews,
} from "../components/index";

import { FaChevronDown } from "react-icons/fa";

const Home = () => {
  return (
    <div className="w-full h-full">
      <div className="w-full max-w-[1440px] mx-auto relative">
        {/* Hero */}
        <Hero />

        {/* Scroll down btn*/}
        <div className="w-[95px] h-[95px] rounded-full flex items-center justify-center  bg-white/90 mx-auto animate-bounce">
          <FaChevronDown className="text-richblack-900 text-[35px]" />
        </div>

        {/* Dog Breed*/}
        <DogBreed />

        {/* Pet Products */}
        <Products />

        {/* Blogs */}
        <Blog />

        {/* Services */}
        <Services />

        {/* Reviews */}
        <Reviews />
      </div>
    </div>
  );
};

export default Home;

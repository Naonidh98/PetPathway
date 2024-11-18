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
      <div className="w-[98%] max-w-[1440px] mx-auto relative">
        {/* Hero */}
        <Hero />
        {/* Hero -2 */}
        <div className="lg:hidden">
          <div className="container mx-auto flex flex-col items-center py-12 sm:py-24">
            <div className="w-full lg:flex justify-center items-center flex-col mb-5 sm:mb-10">
              <h1 className="font-poppins text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center text-gray-800 font-black leading-7 md:leading-10">
                Pet Pathway
              </h1>
              <p className="w-[80%] mx-auto text-center text-sm sm:text-lg my-4 font-roboto">
                Welcome to PetPathway — your go-to hub for pet adoption,
                products, and expert pet care blogs. Discover your new furry
                friend, shop essentials, and learn top tips for happy pets, all
                in one place!
              </p>
            </div>
            <div className="flex justify-center items-center gap-8">
              <button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 lg:text-xl lg:font-bold  rounded text-white px-4 sm:px-10 border border-indigo-700 py-2 sm:py-4 text-sm">
                Learn more
              </button>
              <button className="bg-blue-400 p-2 rounded px-4 sm:px-10 font-bold py-2 sm:py-4 text-sm">
                Register
              </button>
            </div>
          </div>
        </div>

        {/* Scroll down btn*/}
        <div className="w-[55px] h-[55px] lg:w-[95px] lg:h-[95px] rounded-full flex items-center justify-center  bg-white/90 mx-auto animate-bounce">
          <FaChevronDown className="text-richblack-900 text-[18px] lg:text-[35px]" />
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

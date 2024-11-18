import React from "react";
import { dogBreed } from "./data";
import Img from "../LazyLoadImage/Img";
const DogBreed = () => {
  return (
    <div className="flex flex-col gap-4 py-[34px]">
      <h1 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold font-poppins">Dog Breed</h1>
      <p className="text-center font-roboto text-sm sm:text-lg">
        Find yourself a perfect freind from a wide variety of choices.
      </p>

      {/* Breed card */}
      <div className="flex flex-wrap justify-evenly my-2">
        {dogBreed.map((dog, index) => (
          <div key={index} className="w-fit flex flex-col justify-center m-4">
            <div className="">
              <Img
                src={dog.image}
                className={"w-[100px] h-[100px] sm:w-[150px] sm:h-[150px] object-cover rounded-full"}
              />
            </div>

            <p className="text-center pt-4 text-sm sm:text-lg font-inter">{dog.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DogBreed;

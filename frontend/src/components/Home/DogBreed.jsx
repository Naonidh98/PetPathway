import React from "react";
import { dogBreed } from "./data";
import Img from "../LazyLoadImage/Img";
const DogBreed = () => {
  return (
    <div className="flex flex-col gap-4 py-[34px]">
      <h1 className="text-center text-4xl font-bold font-poppins">Dog Breed</h1>
      <p className="text-center font-roboto text-lg">
        Find yourself a perfect freind from a wide variety of choices.
      </p>

      {/* Breed card */}
      <div className="flex justify-between my-2">
        {dogBreed.map((dog, index) => (
          <div key={index} className="flex flex-col justify-center">
            <div className="">
              <Img
                src={dog.image}
                className={"w-[150px] h-[150px] object-cover rounded-full"}
              />
            </div>

            <p className="text-center pt-4 text-xl font-inter">{dog.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DogBreed;

import React from "react";
import { dogBreed } from "./data";
const DogBreed = () => {
  return (
    <div className="flex flex-col gap-4 pt-4">
      <h1 className="text-center text-4xl font-bold">Dog Breed</h1>
      <p className="text-center">
        Find yourself a perfect freind from a wide variety of choices.
      </p>

      {/* Breed card */}
      <div className="flex justify-between">
        {dogBreed.map((dog, index) => (
          <div key={index} className="flex flex-col justify-center">
            <div className="">
              <img src={dog.image} alt="breed"  className="w-[150px] h-[150px] object-cover rounded-full"/>
            </div>

            <p className="text-center pt-4 text-xl">{dog.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DogBreed;

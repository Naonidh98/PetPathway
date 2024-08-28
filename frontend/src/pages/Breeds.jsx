import React from "react";
import BreedCard from "../components/BreedCard";
import BreedData from "../assets/BreedData";

const Breeds = () => {
  return (
    <div className="bg-zinc-100 h-full">
      <div className="max-w-[1200px] mx-auto my-0 p-5">
        <h1 className="text-center text-5xl mx-0 mt-5 mb-8 font-semibold">
          Breeds
        </h1>

        <div className="flex flex-wrap justify-center gap-5">
          {BreedData.map((breed, index) => (
            <BreedCard key={index} {...breed} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Breeds;

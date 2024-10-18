import React, { useEffect, useState } from "react";

import BreedData from "../components/Breeds/BreedData";
import { BreedCard } from "../components/index";

import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Breeds = () => {
  const [breeds, setBreeds] = useState([]);
  const [loading, setLoading] = useState(false);
  const [breed, setBreed] = useState("affenpinscher");

  const navigate = useNavigate();

  const fetchDogBreeds = async () => {
    const toastId = toast.loading("loading...");
    setLoading(true);
    try {
      const response = await fetch("https://dog.ceo/api/breeds/list");
      const cat = await response.json();
      setBreeds(cat.message);

      toast.success("Data fetched");
    } catch (err) {
      console.log("Api error...", err);
      toast.error("Failed");
    }
    setLoading(false);
    toast.dismiss(toastId);
  };

  useEffect(() => {
    fetchDogBreeds();
  }, []);

  if (loading) {
    return <div>Loading....</div>;
  }

  return (
    <div className="bg-zinc-100  h-screen">
      <div className="max-w-[1200px] mx-auto my-0 p-5">
        <h1 className="text-center text-4xl py-5 mx-0 mt-5 mb-8 font-semibold">
          Search Dog By Breed
        </h1>

        {/*<div className="flex flex-wrap justify-center gap-5">
          {BreedData.map((breed, index) => (
            <BreedCard key={index} {...breed} />
          ))}
        </div> */}

        <div className="flex justify-center p-[34px]">
          <select
            onChange={(e) => {
              setBreed(e.target.value);
            }}
            className="w-[350px] bg-richblack-800 p-2 rounded-md font-roboto border-[1px] border-white/80"
          >
            {breeds.map((title, index) => (
              <option key={index}>{title}</option>
            ))}
          </select>
        </div>

        <div className="flex justify-center py-8">
          <button
            onClick={() => {
              navigate(`/breeds/${breed}`);
            }}
            className="py-2 px-4 rounded-md bg-blue-200"
          >
            Search
          </button>

          {/* Todo : add a dog video */}
        </div>
      </div>
    </div>
  );
};

export default Breeds;

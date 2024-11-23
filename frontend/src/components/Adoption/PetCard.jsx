import React from "react";

import { FaExternalLinkAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const PetCard = ({ data , index }) => {

    const naviagte  = useNavigate();

  return (
    <div key={index} className="w-[350px] cursor-pointer hover:scale-95 transition-all">
      <div className="max-w-sm">
        <div className="bg-richblack-800  text-white relative shadow-lg hover:shadow-xl transition duration-500 rounded-lg">
          <img
            className="rounded-t-lg w-full h-[300px] object-cover"
            src={data.thumbnail}
            alt="petImg"
            loading="lazy"
          />
          <div className="absolute top-0  right-0 p-2 text-black text-sm font-roboto bg-white/70 rounded-lg">
            Posted At : <span>{data?.createdAt.split("T")[0]}</span>
          </div>

          <div class="px-2 py-4 rounded-lg">
            <h1 className="text-xl font-poppins font-bold">{data.name}</h1>
            <p class="font-roboto text-sm my-1">
              <span>{data.state}, {data.city}</span>
            </p>
            <div className="flex justify-between">
              <p class="font-roboto text-sm my-1">
                <span className="font-bold">Gender : </span>
                <span>{data.gender}</span>
              </p>
              <p class="font-roboto text-sm my-1">
                <span className="font-bold">Age : </span>
                <span>{data.age}</span>
              </p>
            </div>
            <div className="flex justify-between">
              <p class="font-roboto text-sm my-1">
                <span className="font-bold">Breed : </span>
                <span>{data.breed}</span>
              </p>
              <p class="font-roboto text-sm my-1">
                <span className="font-bold">Vaccinated : </span>
                <span>{data.vaccinated}</span>
              </p>
            </div>

            <hr className="my-1" />

            <div>
              <p className="py-2 font-poppins font-semibold">Owner details:</p>
              <p class="font-roboto text-sm my-1">
                <span className="font-bold">Name : </span>
                <span>{data.owner.firstName} </span>
                <span>{data.owner.lastName}</span>
              </p>
              <p class="font-roboto text-sm my-1">
                <span className="font-bold">Email : </span>
                <a href={`mailto:${data.owner.email}`} className="font-roboto text-blue-25 underline">Contact now</a>
              </p>
            </div>

            <hr className="my-2"/>

            <div className="flex justify-end">
            <button onClick={()=>{
              naviagte(`/pet/detail/${data?._id}`)
            }} class="mt-6 py-2 px-4 flex items-center gap-2 bg-blue-200 text-gray-800 font-bold rounded-lg shadow-md hover:shadow-lg transition duration-300">
              See More Details <FaExternalLinkAlt />
            </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PetCard;

import React from "react";

import { FaExternalLinkAlt } from "react-icons/fa";

const PetCard = ({details}) => {
  return (
    <div className="container m-4">
      <div className="max-w-sm">
        <div className="bg-richblack-800  text-white relative shadow-lg hover:shadow-xl transition duration-500 rounded-lg">
          <img
            className="rounded-t-lg"
            src="https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1049&q=80"
            alt=""
          />
          <div className="absolute top-0  right-0 p-2 text-black text-sm font-roboto bg-white/70 rounded-lg">
            Posted At : <span>20/12/2024</span>
          </div>
          <div class="py-6 px-8 rounded-lg">
            <h1 className="text-xl font-poppins font-bold">Peanut</h1>
            <div>
              <p class="font-roboto text-sm my-1">
                <span>Gender: </span>
                <span>Male</span>
              </p>
              <p class="font-roboto text-sm my-1">
                <span>Age: </span>
                <span>18</span>
              </p>
              <p class="font-roboto text-sm my-1">
                <span>Delhi,</span>
                <span>Patel Nagar</span>
              </p>
            </div>

            <hr className="my-1" />

            <div>
              <p>Owner details:</p>
              <p class="font-roboto text-sm my-1">
                <span>Name: </span>
                <span>Rahul</span>
              </p>
              <p class="font-roboto text-sm my-1">
                <span>Number,</span>
                <span>Contact now</span>
              </p>
            </div>

            <hr className="my-1" />

            <button class="mt-6 py-2 px-4 flex items-center gap-2 bg-blue-200 text-gray-800 font-bold rounded-lg shadow-md hover:shadow-lg transition duration-300">
              See More Details <FaExternalLinkAlt />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PetCard;

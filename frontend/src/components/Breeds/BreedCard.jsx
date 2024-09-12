import React from "react";
import { Link } from "react-router-dom";

const BreedCard = ({ id, name, image }) => {
  return (
    <div className="cursor-pointer group relative w-[30%] aspect-square overflow-hidden rounded-xl hover:duration-300 hover:scale-[1.03] hover:shadow-2xl hover:shadow-pure-greys-600">
      <Link to={`/breeds/${id}`}>
        <img
          src={image}
          alt={name}
          className="h-full w-full grayscale object-cover group-hover:grayscale-0"
        />
        <div className="absolute w-full font-medium text-xl text-white bg-gradient-to-b from-transparent to-black opacity-0 duration-300 p-6 bottom-0 group-hover:opacity-100 group-hover:scale-105">
          {name}
        <p style={{ color: '#c5cbd3', fontSize : "0.7rem" }} >Read more</p>
        </div>
      </Link>
    </div>
  );
};

export default BreedCard;

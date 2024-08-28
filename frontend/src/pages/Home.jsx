import React from "react";

import {
  Hero,
  DogBreed,
  Products,
  Blog,
  Services,
  Consultation,
} from "../components/index";

const Home = () => {
  return (
    <div className="w-full h-full ">
      <div className="w-full max-w-[1440px] mx-auto relative">
        {/* Hero */}
        <Hero />

        {/* Dog Breed*/}
        <DogBreed />

        {/* Pet Products */}
        <Products />

        {/* Blogs */}
        <Blog />

        {/* Services */}
        <Services />

        {/* Consultation */}
        <Consultation />
      </div>
    </div>
  );
};

export default Home;

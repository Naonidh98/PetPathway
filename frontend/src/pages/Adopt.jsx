import React from "react";
import Filter from "../components/Store/Filter";
import { DiscountBanner } from "../components";
import PetCard from "../components/Adoption/PetCard";
const Adopt = () => {
  return (
    <div className="max-w-[1440px] mx-auto">
      {/* Banner */}
      <div>
        <DiscountBanner />
      </div>

      {/* Filters */}
      <div className="my-[25px]">
        <Filter />
      </div>

      {/* Pets */}
      <div>

    <PetCard/>

      </div>
    </div>
  );
};

export default Adopt;

import React from "react";

import Banner from "../Banner/Banner";
import { storeBanner } from "./data";

const DiscountBanner = () => {
  return (
    <div>
      <Banner data={storeBanner} />
    </div>
  );
};

export default DiscountBanner;

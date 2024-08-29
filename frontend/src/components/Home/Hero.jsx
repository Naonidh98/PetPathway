import React from "react";
import HeroSlider from "./HeroSlider";
const Hero = () => {
  return (
    <div className="min-h-[748px] relative pt-12 pb-12 flex items-center overflow-hidden lg:px-[50px] lg:pt-24 after:lg:h-[740px] after:lg:w-[740px] after:lg:bg-gradient-to-tl after:lg:from-richblack-800 after:lg:to-richblack-300 after:lg:absolute after:lg:rounded-full after:lg:-right-28 after:lg:-top-24">
      <HeroSlider />
    </div>
  );
};

export default Hero;

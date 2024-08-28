import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./swiper.css";

import { Navigation, Pagination, Scrollbar, Autoplay } from "swiper/modules";

import { heroSliderData } from "./data";

const HeroSlider = () => {
  return (
    <Swiper
      modules={[Pagination, Navigation, Autoplay]}
      autoplay={false}
      loop={true}
      pagination={{
        clickable: true,
        dynamicBullets: true,
      }}
      navigation={true}
      className="heroSlider"
    >
      {heroSliderData.map((slide, index) => {
        const { title, subtitle, image, buttonText } = slide;
        return (
          <SwiperSlide className="" key={index}>
            <div className="conatiner mx-auto text-center lg:text-left">
              <div className="flex flex-col justify-evenly items-center lg:flex-row">
                {/* text */}
                <div className="px-2 w-[750px]">
                  <h1 className="text-richblack-900 text-[36px] leading-tight lg:text-[72px] lg:leading-[98px] font-extrabold mb-4">
                    {title}
                  </h1>
                  <p className="text-base lg:text-[18px] lg:leading-8 max-w-[548px] mb-8">
                    {subtitle}
                  </p>
                  <button className="btn">{buttonText}</button>
                </div>

                {/* image */}
                <div className="flex  justify-center">
                  <img src={image} alt="petImage" className="h-96 lg:h-auto" />
                </div>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default HeroSlider;

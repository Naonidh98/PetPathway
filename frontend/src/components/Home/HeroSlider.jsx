import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { useNavigate } from "react-router-dom";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./swiper.css";

import { Navigation, Pagination, Scrollbar, Autoplay } from "swiper/modules";

import { heroSliderData } from "./data";

const HeroSlider = () => {
  const navigate = useNavigate();

  return (
    <Swiper
      modules={[Pagination, Navigation, Autoplay]}
      autoplay={true}
      loop={true}
      pagination={{
        clickable: true,
        dynamicBullets: true,
      }}
      navigation={false}
      className="heroSlider"
    >
      {heroSliderData.map((slide, index) => {
        const { title, subtitle, image, buttonText, link } = slide;
        return (
          <SwiperSlide className="" key={index}>
            <div className="w-[98%] mx-auto text-center lg:text-left">
              <div className="flex flex-col justify-evenly items-center lg:flex-row">
                {/* text */}
                <div className="px-2 w-[750px]">
                  <h1 className="text-wrap text-white leading-normal font-poppins text-4xl lg:text-6xl font-extrabold mb-4">
                    {title}
                  </h1>
                  <p className="text-wrap text-xl font-roboto w-full text-center lg:text-left mb-8 text-white/90">
                    {subtitle}
                  </p>
                  <button
                    onClick={() => {
                      navigate(link);
                      window.scroll(0, 0);
                    }}
                    className="mt-[24px] bg-[#dc2f02] hover:scale-110 transition-all font-inter text-white px-4 py-2 rounded-xl font-[400] text-lg"
                  >
                    {buttonText}
                  </button>
                </div>

                {/* image */}
                <div className="hidden lg:flex justify-center">
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

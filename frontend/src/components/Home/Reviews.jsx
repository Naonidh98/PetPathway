import React from "react";
import ReviewCard from "./ReviewCard";
import { reviewData } from "./data";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, Autoplay } from "swiper/modules";

const Reviews = () => {
  return (
    <div className="hidden xl:block py-[34px]">
      <div className="mb-[25px]">
        <h2 className="text-center text-4xl font-bold">
          What Our Clients Say :
        </h2>
        <h2 className="font-roboto my-4 text-center px-2 w-[80%] mx-auto text-md">
          Hear from our satisfied clients about their experiences with our
          seamless adoption process, top-quality products, and exceptional care.
          Discover why pet owners trust us to make their pets’ lives better and
          their own experiences easier.
        </h2>
      </div>

      {/* Client review Slider */}
      <div className="py-[25px] md:py-[50px] lg:py-[100px]">
      <Swiper
        modules={[Autoplay]}
        autoplay={true}
        loop={true}
        slidesPerView={4}
        slidesPerGroup={4}
        spaceBetween={15}
        effect={"coverflow"}
        navigation={{
          prevEl: ".custom_prev_n",
          nextEl: ".custom_next_n",
        }}
        className="carausel-6-columns carausel-arrow-center"
      >
        {reviewData.map((data, index) => (
          <SwiperSlide key={index}>
            {<ReviewCard data={data} index={index} />}
          </SwiperSlide>
        ))}
      </Swiper>
      </div>
    </div>
  );
};

export default Reviews;

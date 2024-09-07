import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, Autoplay } from "swiper/modules";
import Img from "../LazyLoadImage/Img";
const ItemSwiper = ({ data, desc, title }) => {
  return (
    <div className="py-[34px]">
      <h2 className="text-center text-4xl font-poppins font-bold my-4">
        {title}
      </h2>
      <p className="pb-2 text-center">{desc}</p>

      <div>
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
          {data.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="p-2 rounded-lg bg-richblack-800 w-[350px] flex flex-col gap-2">
                <Img
                  src={item.image}
                  className="w-[200px] h-[200px] object-cover mx-auto"
                />

                <p className="text-xl font-bold">{item.title}</p>
                <p className="text-sm font-inter">{item.desc}</p>

                <p className="my-2">{`$ ${item.price}`}</p>

                <button className="bg-blue-300 text-white text-center w-full py-1">
                  Add to cart
                </button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ItemSwiper;

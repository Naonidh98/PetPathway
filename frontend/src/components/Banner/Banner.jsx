import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, Autoplay } from "swiper/modules";

const Banner = ({data}) => {
  return (
    <div className="hidden lg:flex">
      <Swiper
        modules={[Pagination, Navigation, Autoplay]}
        autoplay={true}
        loop={true}
        pagination={{
          clickable: true,
          dynamicBullets: false,
        }}
        navigation={false}
      >
        {data.map((item, index) => (
          <SwiperSlide key={index}>
            {" "}
            <div>
              <img
                src={item.img}
                alt="banner"
                className="w-full h-[300px] object-cover"
              />
            </div>{" "}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;

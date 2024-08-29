import React from "react";

import Banner1 from "../../assets/discount1.png";
import Banner2 from "../../assets/discount2.png";
import Banner3 from "../../assets/discount3.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, Autoplay } from "swiper/modules";

const DiscountBanner = () => {
  const Banner = [Banner1, Banner2, Banner3];

  return (
    <div>
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
        {Banner.map((img, index) => (
          <SwiperSlide key={index}>
            {" "}
            <div>
              <img
                src={img}
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

export default DiscountBanner;

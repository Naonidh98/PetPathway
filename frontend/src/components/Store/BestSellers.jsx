import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, Autoplay } from "swiper/modules";
import dogFood from "../../assets/Category2.png";
import Img from "../LazyLoadImage/Img";
const BestSellers = () => {
  const bestSellerData = [
    {
      image: dogFood,
      id: 0,
      title: "Pedigree",
      desc: "Pedigree Dentastix Small Breed (5-10 kg) Oral Care Dog Treat Weekly Pack (7 Sticks) Dog Dental Treat - 110 gm",
      price: "148.00",
    },
    {
      image: dogFood,
      id: 0,
      title: "Pedigree",
      desc: "Pedigree Dentastix Small Breed (5-10 kg) Oral Care Dog Treat Weekly Pack (7 Sticks) Dog Dental Treat - 110 gm",
      price: "148.00",
    },
    {
      image: dogFood,
      id: 0,
      title: "Pedigree",
      desc: "Pedigree Dentastix Small Breed (5-10 kg) Oral Care Dog Treat Weekly Pack (7 Sticks) Dog Dental Treat - 110 gm",
      price: "148.00",
    },
    {
      image: dogFood,
      id: 0,
      title: "Pedigree",
      desc: "Pedigree Dentastix Small Breed (5-10 kg) Oral Care Dog Treat Weekly Pack (7 Sticks) Dog Dental Treat - 110 gm",
      price: "148.00",
    },
    {
      image: dogFood,
      id: 0,
      title: "Pedigree",
      desc: "Pedigree Dentastix Small Breed (5-10 kg) Oral Care Dog Treat Weekly Pack (7 Sticks) Dog Dental Treat - 110 gm",
      price: "148.00",
    },
    {
      image: dogFood,
      id: 0,
      title: "Pedigree",
      desc: "Pedigree Dentastix Small Breed (5-10 kg) Oral Care Dog Treat Weekly Pack (7 Sticks) Dog Dental Treat - 110 gm",
      price: "148.00",
    },
    {
      image: dogFood,
      id: 0,
      title: "Pedigree",
      desc: "Pedigree Dentastix Small Breed (5-10 kg) Oral Care Dog Treat Weekly Pack (7 Sticks) Dog Dental Treat - 110 gm",
      price: "148.00",
    },
    {
      image: dogFood,
      id: 0,
      title: "Pedigree",
      desc: "Pedigree Dentastix Small Breed (5-10 kg) Oral Care Dog Treat Weekly Pack (7 Sticks) Dog Dental Treat - 110 gm",
      price: "148.00",
    },
  ];

  return (
    <div className="py-[34px]">
      <h2 className="text-center text-4xl font-poppins font-bold my-4">
        Best Sellers
      </h2>

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
          {bestSellerData.map((data, index) => (
            <SwiperSlide key={index}>
              <div className="p-2 rounded-lg bg-richblack-800 w-[350px] flex flex-col gap-2">
                <Img
                  src={data.image}
                  className="w-[200px] h-[200px] object-cover mx-auto"
                />

                <p className="text-xl font-bold">{data.title}</p>
                <p className="text-sm font-inter">{data.desc}</p>

                <p className="my-2">{`$ ${data.price}`}</p>

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

export default BestSellers;

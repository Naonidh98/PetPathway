import React from "react";
import ItemSwiper from "../Swiper/ItemSwiper";
import dogFood from "../../assets/Category2.png";

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

const BestSellers = () => {
  return <ItemSwiper data={bestSellerData} desc={'description'} title={'Best seller'}/>
};

export default BestSellers;

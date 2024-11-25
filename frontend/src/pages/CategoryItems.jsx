import React, { useEffect, useState } from "react";
import Filter from "../components/Store/Filter";
import ItemCard from "../components/Store/ItemCard";
import LoadingTwo from "../components/Spinner/LoadingTwo";
import { getCategoryItemDetails } from "../services/operations/store";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const CategoryItems = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const { name } = useParams();

  const { token } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(
      getCategoryItemDetails(
        {
          categoryId: name.toString(),
        },
        setLoading,
        setData,
        token
      )
    );
  }, []);

  if (loading) {
    return (
      <div className="w-screen h-screen flex justify-center items-center">
        <LoadingTwo />
      </div>
    );
  }

  return (
    <div>
      {/* top */}
      <div className="bg-richblack-800 py-4">
        <div className="max-w-[1440px] mx-auto py-[24px] flex flex-row-reverse justify-evenly">
          {/* Image */}
          <img
            src={data?.thumbnail}
            alt="catImage"
            className="hidden lg:flex w-[15%] rounded"
          />

          {/* Content */}
          <div className="w-[75%] flex flex-col gap-4">
            <h2 className="font-poppins text-3xl font-bold">{data?.title}</h2>
            <p className="font-roboto text-lg">{data?.description}</p>
            <p className="font-medium">Total items : {data?.items.length}</p>
          </div>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto py-4 flex gap-4 flex-wrap justify-evenly">
        {data?.items.map((data, index) => (
          <ItemCard data={data} index={index} />
        ))}
      </div>
    </div>
  );
};

export default CategoryItems;

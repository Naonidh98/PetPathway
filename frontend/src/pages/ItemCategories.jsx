import React, { useEffect, useState } from "react";
import Img from "../components/LazyLoadImage/Img";
import { Link } from "react-router-dom";
import { topCategoriesData } from "../components/Store/data";
import { useDispatch } from "react-redux";
import { getCategory } from "../services/operations/store";
import { useNavigate } from "react-router-dom";

const ItemCategories = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  async function getCategoryData() {
    setLoading(true);
    dispatch(getCategory(setData));
    setLoading(false);
  }

  useEffect(() => {
    getCategoryData();
  }, []);

  if (loading) {
    return <div className="w-full max-w-[1440px] mx-auto">Loading....</div>;
  }

  if (data === null) {
    return <div className="w-full max-w-[1440px] mx-auto">No result found</div>;
  }

  return (
    <div className="w-full h-full">
      <h2 className="text-center text-4xl font-poppins font-bold py-8">
        Category list
      </h2>

      <div className="w-full max-w-[1440px] mx-auto py-[15px]">
        <div className="my-4 flex flex-wrap justify-evenly gap-y-[55px]">
          {data.map((item, index) => (
            <div
              className="hover:scale-95 transition-all cursor-pointer flex flex-col gap-y-4 bg-richblack-800 rounded-md overflow-hidden"
              key={index}
              onClick={()=>{navigate(`/category/${item?._id}`)}}
            >
              <Img
                src={item.thumbnail}
                className="w-[250px] h-[250px] object-cover"
              />
              <p className="font-roboto text-lg font-bold p-4">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ItemCategories;

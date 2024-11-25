import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  ItemInfo,
  ItemImages,
  ItemActions,
  ItemInformation,
  ItemReviews,
  SimilarItems,
} from "../components/index";
import { useDispatch, useSelector } from "react-redux";
import { getItemDetail } from "../services/operations/store";
import { addToCart } from "../slices/cartSlice";

const ItemsDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const { token } = useSelector((state) => state.user);

  const apiData = {
    itemId: id.toString(),
  };

  useEffect(() => {
    dispatch(getItemDetail(apiData, setLoading, setData, token));
  }, []);

  if (loading) {
    return (
      <div className="w-screen h-screen flex justify-center items-center">
        Loading
      </div>
    );
  }

  return (
    <div>
      <div className="bg-richblack-900 py-[50px]">
        <div className="max-w-[1440px] mx-auto">
          <div className="max-w-7xl mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row">
              <ItemImages item={data} />
              <div className="w-full md:w-2/3 md:pl-8 mt-4 md:mt-0">
                <ItemInfo item={data} />
                <button
                  className="bg-blue-200 mt-12 text-white border-2 border-blue-200 rounded-md py-2 px-4"
                  onClick={() => {
                    const cartData = {
                      id: data._id,
                      image: data.thumbnail,
                      title: data.title,
                      price: data.price,
                      quantity: 1,
                    };
                    dispatch(addToCart(cartData));
                  }}
                >
                  ADD TO CART
                </button>
              </div>
            </div>

            <div className="bg-richblack-800 font-poppins rounded-lg pt-2 p-4 mt-6">
              <h2 className="text-2xl font-bold">Description </h2>
              <div className="mt-2 font-roboto">{data?.description}</div>
            </div>

            <hr className="mt-4" />

            <div>
              {data?.more_info && (
                <div>
                  <ItemInformation item={data?.more_info} />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemsDetails;

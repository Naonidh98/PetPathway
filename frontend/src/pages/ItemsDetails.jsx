import React from "react";
import { useParams } from "react-router-dom";
import {
  ItemInfo,
  ItemImages,
  ItemActions,
  ItemInformation,
  ItemReviews,
  SimilarItems,
} from "../components/index";
import data from "../components/ItemsDetails/data";
import PageNotFound from "./PageNotFound";

const ItemsDetails = () => {
  const { id } = useParams();
  const item = data.find((item) => item.id == id);

  if (!item) {
    return <PageNotFound />;
  }

  return (
    <div className="bg-richblack-900 py-[50px]">
      <div className="max-w-[1440px] mx-auto">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row">
            <ItemImages item={item} />
            <div className="w-full md:w-2/3 md:pl-8 mt-4 md:mt-0">
              <ItemInfo item={item} />
              <ItemActions item={item} />
            </div>
          </div>

          <div className="bg-richblack-800 font-poppins rounded-lg pt-2 p-4 mt-6">
            <h2 className="text-2xl font-bold">Description </h2>
            <div className="mt-2 font-roboto">{item.desc}</div>
          </div>
        </div>
        <ItemInformation item={item} />
        <ItemReviews item={item} />
        <div className="mx-auto py-8 px-4">
          <h2 className="text-3xl font-semibold pb-6">
            More in {item.category}
          </h2>
          <SimilarItems item={item} />
        </div>
      </div>
    </div>
  );
};

export default ItemsDetails;

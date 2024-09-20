import React, { useEffect, useState } from "react";
import UserReview from "./UserReview";

import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

const ItemReviews = ({ item }) => {
  const [avgRating, setAvgRating] = useState(0);
  const totalReviews = item.reviews.length;

  useEffect(() => {
    const averageRating = (
      item.reviews.reduce((acc, cur) => acc + cur.rating, 0) / totalReviews
    ).toFixed(2);

    setAvgRating(averageRating);
  }, []);

  return (
    <div className="mx-auto p-4">
      <h2 className="text-3xl text-semibold font-semibold py-4">
        Customer Reviews
      </h2>
      <div className="lg:flex lg:space-x-8">
        <div className="lg:w-1/2 border-richblack-600 border-b lg:border-b-0 lg:border-r pb-4 lg:pb-0 lg:pr-4">
          <div className="flex items-center mt-2">
            <div className="flex items-center text-yellow-300 gap-[3px] text-3xl">
              {Array.from({ length: 5 }).map((_, index) => (
                <span key={index}>
                  {index < avgRating ? <FaStar /> : <FaRegStar />}
                </span>
              ))}
            </div>
            <span className="ml-2 text-lg font-semibold">
              {avgRating} out of 5
            </span>
          </div>
          <span className="text-sm">{totalReviews} reviews</span>
          <div className="mt-4">
            {Array.from({ length: 5 }).map((_, index) => {
              const count = item.reviews.filter(
                (review) => review.rating === 5 - index
              ).length;
              const percentage = Math.round((count / totalReviews) * 100);

              return (
                <div key={index} className="flex items-center mt-3">
                  <span className="mr-2 text-sm flex items-center">
                    {5 - index}
                    <span className="text-yellow-300 text-lg ml-1">
                      <FaStar />
                    </span>
                  </span>
                  <div className="w-full bg-richblack-600 h-4 rounded-full overflow-hidden">
                    <div
                      className="bg-yellow-300 h-full rounded-full"
                      style={{ width: percentage + "%" }}
                    ></div>
                  </div>
                  <span className="ml-2 text-sm min-w-14 text-left">
                    {percentage}% ({count})
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-6 lg:mt-0 lg:w-1/2">
          <h3 className="text-lg font-semibold">Top review</h3>
          <div className="flex-col divide-y-2 divide-richblack-600">
            {item.reviews.slice(-3).map((review) => (
              <UserReview review={review} key={review.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemReviews;

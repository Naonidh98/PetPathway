import React from "react";

const ItemInformation = ({ item }) => {
  return (
    <div className="mx-auto p-4">
      <h2 className="text-3xl font-semibold pb-4">More Information</h2>
      <>
        {Object.keys(item.information).map((key, index) => (
          <div key={index} className="flex flex-col md:flex-row md:py-2 pb-2">
            <div className="md:w-1/3 md:py-2 px-4 font-bold text-richblack-100 text-lg">
              {key}
            </div>
            <div className="md:w-2/3 md:py-2 pb-2 px-4 border-b border-richblack-400">
              {item.information[key]}
            </div>
          </div>
        ))}
      </>
    </div>
  );
};

export default ItemInformation;

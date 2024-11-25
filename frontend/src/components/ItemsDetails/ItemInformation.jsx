import React from "react";

const ItemInformation = ({ item }) => {
  console.log(item);

  return (
    <div className="mx-auto p-4 font-poppins">
      <h2 className="text-3xl font-semibold pb-4">More Information</h2>

      <div className="flex flex-col gap-2">
        <p>
          Brand : <span>{item.brand}</span>
        </p>
        <p>
          Origin : <span>{item.origin}</span>
        </p>
        <p>
          Type : <span>{item.type}</span>
        </p>
        <p>
          gtin : <span>{item.gtin}</span>
        </p>
        <p>
          sku : <span>{item.sku}</span>
        </p>
        <p>
          return : <span>{item.return}</span>
        </p>
      </div>
    </div>
  );
};

export default ItemInformation;

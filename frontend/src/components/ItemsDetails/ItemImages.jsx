import React, { useEffect, useState } from "react";

const ItemImages = ({ item }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => window.scrollTo(0, 0), []);

  return (
    <div className="w-full flex gap-2 md:w-1/3">
      <img
        alt={item?.title}
        className="w-10/12 object-cover bg-richblack-400 aspect-square rounded-sm mx-auto sm:mx-0"
        src={item?.thumbnail}
        height={300}
        width={300}
      />
    </div>
  );
};

export default ItemImages;

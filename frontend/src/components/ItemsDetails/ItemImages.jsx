import React, { useEffect, useState } from "react";

const ItemImages = ({ item }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => window.scrollTo(0, 0), [item.id]);

  return (
    <div className="w-full flex gap-2 md:w-1/3">
      <div className="flex flex-col gap-1 w-2/12 overflow-auto">
        {item.images.map((image, index) => (
          <img
            alt={`Additional image ${index + 1}`}
            className={`w-full object-cover aspect-square cursor-pointer rounded-sm ${
              selectedIndex === index && " border-4"
            }`}
            height="100"
            src={image}
            width="100"
            key={index}
            onClick={() => setSelectedIndex(index)}
          />
        ))}
      </div>
      <img
        alt={item.name}
        className="w-10/12 object-cover bg-richblack-400 aspect-square rounded-sm"
        src={item.images[selectedIndex]}
        height={300}
        width={300}
      />
    </div>
  );
};

export default ItemImages;

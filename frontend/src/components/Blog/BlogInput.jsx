import React, { useEffect, useState } from "react";
import { LuImagePlus } from "react-icons/lu";
import { FaXmark } from "react-icons/fa6";

const BlogInput = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [file, setFile] = useState(null);
  const [image, setImage] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    // use 'file' to upload to cloud
    console.log(file);
  };

  useEffect(() => {
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
      return;
    }

    setImage(null);
  }, [file]);

  return (
    <form
      onSubmit={handleSubmit}
      onReset={() => {
        setIsFocused(false);
        setFile(null);
      }}
      className="mx-auto rounded-lg w-full max-w-3xl bg-richblack-800 p-2 sm:p-4"
    >
      <div className="flex items-center gap-3 mb-2">
        <img
          src="profileImageurl"
          alt="profileImage"
          className="rounded-full w-14 h-14"
        />
        <input
          id="title"
          placeholder="what's on your mind..."
          className="flex-grow bg-richblack-600 pl-6 p-4 rounded-full outline-none"
          onFocus={() => setIsFocused(true)}
        />
      </div>

      {isFocused && (
        <textarea
          id="description"
          className="w-full bg-richblack-600 px-4 py-2 rounded-xl outline-none resize-y min-h-36 max-h-[54vh]"
          placeholder="Write something..."
        ></textarea>
      )}

      <div className="flex justify-between">
        {image ? (
          <div className="flex justify-between items-center p-1 pr-0 bg-richblack-700 rounded-md">
            <img
              src={image}
              alt="imagePreview"
              className="max-h-12 max-w-28 sm:max-w-72 object-contain rounded-sm"
            />
            <button
              className="text-md m-2 p-2 rounded-full transition-all hover:bg-richblack-500"
              onClick={() => setFile(null)}
            >
              <FaXmark />
            </button>
          </div>
        ) : (
          <label
            htmlFor="imageUpload"
            className="text-gray-400 flex items-center space-x-1 cursor-pointer"
          >
            <input
              type="file"
              className="hidden"
              id="imageUpload"
              accept="image/*"
              onChange={(event) => setFile(event.target?.files?.[0])}
            />
            <LuImagePlus />
            <span>Image</span>
          </label>
        )}

        <div className="flex items-center gap-2">
          {isFocused && (
            <input
              type="reset"
              value="cancel"
              className="text-blue-200 border-2 border-blue-200 px-4 py-1 rounded-full cursor-pointer"
            />
          )}
          <button className="bg-blue-200 border-2 border-blue-200 px-4 py-1 rounded-full">
            Post
          </button>
        </div>
      </div>
    </form>
  );
};

export default BlogInput;

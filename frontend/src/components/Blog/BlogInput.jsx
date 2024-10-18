import React, { useEffect, useState, useRef } from "react";
import { LuImagePlus } from "react-icons/lu";
import { FaXmark } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import JoditEditor from "jodit-react";
import toast from "react-hot-toast";
import { createBlog } from "../../services/operations/blog";
import { useDispatch } from "react-redux";

const BlogInput = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [image, setImage] = useState(null);
  const { user } = useSelector((state) => state.user);
  const [file, setFile] = useState(null);
  const editor = useRef(null);
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.user);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const config = {
    readonly: false, // all options from https://xdsoft.net/jodit/doc/
    height: "250px",
    width: "100%",
    enableDragAndDropFileToEditor: true,
    buttons: [
      "|",
      "bold",
      "italic",
      "underline",
      "|",
      "ul",
      "ol",
      "|",
      "fontsize",
      "brush",
      "paragraph",
      "|",
      "link",
      "|",
      "left",
      "center",
      "right",
      "justify",
      "|",
      "undo",
      "redo",
      "|",
      "hr",
      "eraser",
      "fullsize",
    ],
    uploader: { insertImageAsBase64URI: true },
    removeButtons: ["brush", "file"],
    showXPathInStatusbar: false,
    showCharsCounter: false,
    showWordsCounter: false,
    toolbarAdaptive: true,
    toolbarSticky: true,
    style: {
      background: "#161D29",
      color: "white",
    },
  };

  function submitHandler(data) {
    if (content === "") {
      toast.error("Description required");
      return;
    }
    const newData = {
      title: data?.title,
      description: content,
      image: file || null,
    };

    //console.log(newData);

    dispatch(createBlog(newData, token, setLoading));
  }

  return (
    <div className="flex justify-between">
      <div className="font-poppins h-[100%] w-[30%] bg-richblack-800 rounded-lg p-2">
        <p className="p-2">
          {`UserName  : ${user?.firstName} ${user?.lastName}`}
        </p>
        <p className="p-2">{`email  : ${user?.email}`}</p>
        <p className="p-2">{`Total Blogs  : ${user?.myBlogs.length || 0}`}</p>
        <p className="p-2">{`Total likes  :`}</p>
      </div>
      <form
        onSubmit={handleSubmit(submitHandler)}
        onReset={() => {
          setIsFocused(false);
          setFile(null);
        }}
        className="rounded-lg w-[68%] bg-richblack-800 p-2 sm:p-4"
      >
        <div className="flex items-center gap-3 mb-2">
          <img
            src={user?.profile_image}
            alt={`profile-${user?.firstName}`}
            className="aspect-square w-[78px] rounded-full object-cover"
          />
          <input
            id="title"
            placeholder="what's on your mind..."
            className="flex-grow bg-richblack-600 pl-6 p-4 rounded-full outline-none"
            onFocus={() => setIsFocused(true)}
            {...register("title", { required: true })}
          />

          <div>
            {errors.title && (
              <span className="text-[#fb0909]">
                Required<sup>*</sup>
              </span>
            )}
          </div>
        </div>

        {isFocused && (
          <div className="py-4 text-white">
            <JoditEditor
              ref={editor}
              value={content}
              config={config}
              tabIndex={1} // tabIndex of textarea
              onBlur={(newContent) => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
              onChange={(newContent) => {}}
            />
          </div>
        )}

        <div className="flex justify-between">
          <label
            htmlFor="imageUpload"
            className="text-gray-400 flex items-center space-x-1 cursor-pointer"
          >
            <input
              type="file"
              className="hidden"
              id="imageUpload"
              accept="image/*"
              onChange={(e) => {
                setFile(e.target.files[0]);
              }}
            />
            <LuImagePlus />
            <span>Image</span>
          </label>

          <div className="flex items-center gap-2">
            {isFocused && (
              <input
                type="reset"
                value="cancel"
                className="text-blue-200 border-2 border-blue-200 px-4 py-1 rounded-full cursor-pointer"
              />
            )}
            {loading ? (
              <div>Loading...</div>
            ) : (
              <button className="bg-blue-200 border-2 border-blue-200 px-4 py-1 rounded-full">
                Post
              </button>
            )}
          </div>
        </div>
        {file && (
          <p className="py-2">
            {file ? `File selected : ${file.name}` : ``}{" "}
            <span
              onClick={() => {
                setFile(null);
              }}
              className="py-2 bg-yellow-50 font-semibold font-roboto text-black rounded-full px-4 cursor-pointer ml-4"
            >
              Clear
            </span>
          </p>
        )}
      </form>
    </div>
  );
};

export default BlogInput;

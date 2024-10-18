import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { BiImages } from "react-icons/bi";
import { IoMdClose } from "react-icons/io";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import JoditEditor from "jodit-react";

const EditBlog = () => {
  const params = useParams();
  const [err, errMsg] = useState("");
  const dispatch = useDispatch();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [picture, setPicture] = useState(null);
  const editor = useRef(null);
  const [content, setContent] = useState("");
  const { user, token } = useSelector((state) => state.user);

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
      background: "#000814",
      color: "white",
    },
  };

  const onSubmit = async (data) => {};

  return (
    <div className="w-screen h-screen bg-richblack-900 flex items-center justify-center">
      {/* edit blog form */}

      <div className="w-[90%] rounded-xl xl:w-[700px] h-fit p-5 flex flex-col justify-center bg-richblack-800">
        <div className="flex justify-between items-center">
          <p className="text-ascent-1 text-xl font-semibold text-white">
            Edit Blog
          </p>
          <Link to={"/dashboard/user/blogs"}>
            <IoMdClose className="text-white text-2xl cursor-pointer" />
          </Link>
        </div>

        <form
          className="py-8 flex flex-col gap-2"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex flex-col gap-2">
            <label className="font-poppins text-lg">Title :</label>
            <input
              name="firstName"
              placeholder="Enter new title.."
              type="text"
              className="bg-richblack-900 p-2 rounded border-[1px] border-white"
            />
          </div>
          <div className="flex flex-col gap-2 mt-4">
            <label className="font-poppins text-lg">Description :</label>
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
          </div>

          {/* profile img */}
          <div className="flex items-center justify-between py-4 mt-2">
            <label
              htmlFor="imageUpload"
              className="flex items-center gap-1 text-base cursor-pointer text-white/70 hover:text-white transition-colors"
            >
              <input
                type="file"
                onChange={(e) => {
                  setPicture(e.target.files[0]);
                }}
                className="hidden"
                id="imageUpload"
                data-max-size="5120"
                accept=".jpeg, .png, .jpg"
              />
              <BiImages />
              <span>Update Profile Image</span>
            </label>
          </div>

          {/*Form error message */}
          {errMsg?.message && (
            <span
              className={`text-sm ${
                errMsg?.status === "failed"
                  ? "text-[#f64949fe]"
                  : "text-[#2ba150fe]"
              } mt-0.5`}
            >
              {errMsg?.message}
            </span>
          )}

          <div className="flex justify-end">
            <button
              className={`w-fit text-lg rounded-md bg-[#065ad8] px-8 py-3 font-medium text-white outline-none`}
            >Update</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditBlog;

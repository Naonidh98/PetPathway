import React, { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import JoditEditor from "jodit-react";
import { toast } from "react-hot-toast";
import { useSelector, useDispatch } from "react-redux";
import { createPet } from "../../services/operations/adopt";
import { setPetFormStage } from "../../slices/petFormSlice";
const AddPetForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { token } = useSelector((state) => state.user);
  const { editForm } = useSelector((state) => state.petForm);
  const dispatch = useDispatch();

  const editor = useRef(null);
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const config = {
    readonly: false, // all options from https://xdsoft.net/jodit/doc/
    height: "150px",
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
      background: "#2C333F",
      color: "white",
    },
  };

  function submitHandler(data) {
    if (content === "") {
      toast.error("desc required");
      return;
    } else {
      data.content = content;
      dispatch(createPet(data, token));
    }
  }

  return (
    <div className="my-[25px]">
      <form
        onSubmit={handleSubmit(submitHandler)}
        className="flex flex-col gap-4"
      >
        {/* name */}
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="cursor-pointer">
            Pet Name :
          </label>
          <input
            rows={3}
            type="text"
            id="name"
            className="bg-richblack-600 rounded-sm p-2"
            placeholder="Enter pet name"
            {...register("name", { required: true })}
          />
          {errors.name && (
            <span className="text-[#FF0000] font-bold font-inter">
              Required <sup>*</sup>
            </span>
          )}
        </div>

        {/* Desc */}
        <div className="flex flex-col gap-2">
          <label className="cursor-pointer">Description:</label>
          <div className="text-white">
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

        {/* Dog-cat / Breed */}
        <div className="flex justify-between gap-2">
          <div className="w-[45%]">
            <label htmlFor="type" className="cursor-pointer">
              Type :
            </label>

            <select
              className="bg-richblack-600 rounded-sm p-2 w-full my-2"
              {...register("type", { required: true })}
            >
              <option selected>Dog</option>
              <option>Cats</option>
            </select>
            {errors.type && (
              <span className="text-[#FF0000] font-bold font-inter">
                Required <sup>*</sup>
              </span>
            )}
          </div>
          <div className="w-[45%]">
            <label htmlFor="breed" className="cursor-pointer">
              Breed :
            </label>
            <input
              rows={3}
              type="text"
              id="breed"
              className="bg-richblack-600 rounded-sm p-2 w-full my-2"
              placeholder="Enter breed name"
              {...register("breed", { required: true })}
            />
            {errors.breed && (
              <span className="text-[#FF0000] font-bold font-inter">
                Required <sup>*</sup>
              </span>
            )}
          </div>
        </div>

        {/* Gender */}
        {/* Age */}
        <div className="flex justify-between gap-2">
          <div className="w-[45%]">
            <label htmlFor="gender" className="cursor-pointer">
              Gender :
            </label>

            <select
              id="gender"
              className="bg-richblack-600 rounded-sm p-2 w-full my-2"
              {...register("gender", { required: true })}
            >
              <option selected>Male</option>
              <option>Female</option>
              <option>Others</option>
            </select>
            {errors.gender && (
              <span className="text-[#FF0000] font-bold font-inter">
                Required <sup>*</sup>
              </span>
            )}
          </div>
          <div className="w-[45%]">
            <label htmlFor="age" className="cursor-pointer">
              Age :
            </label>
            <input
              rows={3}
              type="number"
              id="age"
              min={0}
              max={50}
              className="bg-richblack-600 rounded-sm p-2 w-full my-2"
              placeholder="Enter pet age"
              {...register("age", { required: true })}
            />
            {errors.age && (
              <span className="text-[#FF0000] font-bold font-inter">
                Required <sup>*</sup>
              </span>
            )}
          </div>
        </div>

        {/* state & city */}
        <div className="flex justify-between gap-2">
          <div className="w-[45%]">
            <label htmlFor="state" className="cursor-pointer">
              State :
            </label>

            <select
              className="bg-richblack-600 rounded-sm p-2 w-full my-2"
              {...register("state", { required: true })}
            >
              <option selected>Delhi</option>
              <option>Punjab</option>
            </select>
            {errors.state && (
              <span className="text-[#FF0000] font-bold font-inter">
                Required <sup>*</sup>
              </span>
            )}
          </div>
          <div className="w-[45%]">
            <label htmlFor="city" className="cursor-pointer">
              City :
            </label>
            <input
              rows={3}
              type="text"
              id="breed"
              className="bg-richblack-600 rounded-sm p-2 w-full my-2"
              placeholder="Enter city name"
              {...register("city", { required: true })}
            />
            {errors.city && (
              <span className="text-[#FF0000] font-bold font-inter">
                Required <sup>*</sup>
              </span>
            )}
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="vacc" className="cursor-pointer">
            Vaccinated :
          </label>

          <select
            id="vacc"
            className="bg-richblack-600 rounded-sm p-2 w-full"
            {...register("vaccinated", { required: true })}
          >
            <option selected>Yes</option>
            <option>No</option>
          </select>
          {errors.vaccinated && (
            <span className="text-[#FF0000] font-bold font-inter">
              Required <sup>*</sup>
            </span>
          )}
        </div>

        {/* Thumbnail */}
        <div>
          <label
            class="block mb-2 text-gray-900 dark:text-white"
            for="file_input"
          >
            Thumbnail :
          </label>
          <input
            class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
            id="file_input"
            type="file"
            {...register("thumbnail", { required: true })}
          />
          {errors.thumbnail && (
            <span className="text-[#FF0000] font-bold font-inter">
              Required <sup>*</sup>
            </span>
          )}
        </div>

        <div className="flex justify-end">
          {!editForm && (
            <div>
              {loading ? (
                <div>Loading...</div>
              ) : (
                <button className="bg-blue-400 p-2 rounded">Next</button>
              )}
            </div>
          )}
        </div>
        <div className="flex justify-end">
          {editForm && (
            <div>
              {loading ? (
                <div>Loading...</div>
              ) : (
                <div className="flex gap-2 items-center">
                  <button className="bg-blue-400 p-2 rounded">Edit</button>
                  <div
                    onClick={() => {
                      dispatch(setPetFormStage(2));
                    }}
                    className="bg-blue-400 p-2 rounded"
                  >
                    Next
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </form>
    </div>
  );
};

export default AddPetForm;

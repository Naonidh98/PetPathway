import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPetFormStage, setPetFormEdit } from "../../slices/petFormSlice";
import { addImagePet } from "../../services/operations/adopt";

const PreviewImage = () => {
  return (
    <div className="w-full text-white flex justify-between p-2 bg-pink-500 rounded">
      <p>
        Image <span>1</span>
      </p>
      <p>view</p>
      <button>remove</button>
    </div>
  );
};

const AddPetMediaForm = () => {
  const dispatch = useDispatch();
  const { id } = useSelector((state) => state.petForm);
  const { token } = useSelector((state) => state.user);
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  return (
    <div>
      <div className="my-4">
        <label
          class="block mb-2 text-gray-900 dark:text-white"
          for="file_input"
        >
          Add Image :
        </label>
        <input
          class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
          id="file_input"
          onChange={(e) => {
            setFile(e.target.files);
          }}
          type="file"
        />
        <div className="flex justify-end my-2">
          <button
            className="bg-blue-400 p-2 rounded"
            onClick={() => {
              dispatch(addImagePet(file, id, token, setLoading));
            }}
          >
            Add
          </button>
        </div>

        <div>
          <p>Preview :</p>
          <PreviewImage />
        </div>

        <div className="flex justify-end my-[25px]">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <div className="flex gap-4">
              <button
                onClick={() => {
                  dispatch(setPetFormEdit(true));
                  dispatch(setPetFormStage(1));
                }}
                className="bg-yellow-50 text-black p-2 rounded"
              >
                Back
              </button>
              <button className="bg-blue-400 p-2 rounded" onClick={()=>{
                dispatch(setPetFormStage(3))
              }}>Next</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AddPetMediaForm;

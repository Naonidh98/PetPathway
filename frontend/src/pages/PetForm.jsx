import React from "react";
import AddPetForm from "../components/PetForm/AddPetForm";
import AddPetMediaForm from "../components/PetForm/AddPetMediaForm";
import AddPreview from "../components/PetForm/AddPreview";

import { useSelector } from "react-redux";

const PetForm = () => {
  const { stage, formData, editForm } = useSelector((state) => state.petForm);

  return (
    <div className="mx-auto w-11/12 max-w-[1000px] font-poppins">
      <h2 className="mb-14 text-3xl font-medium text-richblack-5">
        {editForm ? "Edit Pet details" : "Add your Pet details"}
      </h2>

      {/* Timeline */}
      <div>
        <div class="flex flex-col w-full font-[sans-serif] mt-4">
          <div class="flex justify-between items-start text-center gap-4">
            <div class="flex flex-col justify-center items-center">
              <div class="bg-blue-300 w-8 h-8 font-bold text-sm rounded-full flex items-center justify-center">
                1
              </div>
              <p class=" text-sm mt-1.5 font-semibold">Pet Details</p>
            </div>

            <div class="flex flex-col justify-center items-center">
              <div
                class={`${
                  stage >= 2 ? "bg-blue-300" : "bg-white text-black"
                } w-8 h-8  font-bold text-sm rounded-full flex items-center justify-center`}
              >
                2
              </div>
              <p class="text-sm mt-1.5 font-semibold">More Images</p>
            </div>

            <div class="flex flex-col justify-center items-center">
              <div
                class={`${
                  stage >= 3 ? "bg-blue-300" : "bg-white text-black"
                } w-8 h-8  font-bold text-sm rounded-full flex items-center justify-center`}
              >
                3
              </div>
              <p class="text-sm mt-1.5 font-semibold">Preview</p>
            </div>
          </div>

          <div class="bg-gray-300 rounded-full w-full h-2.5 mt-4">
            <div
              class={`${stage === 1 ? "w-1/3" : ""} ${
                stage === 2 ? "w-2/3" : ""
              } ${
                stage === 3 ? "w-3/3" : ""
              } h-full rounded-full bg-blue-300 shadow-md flex items-center relative transition-all duration-300`}
            >
              <span class="absolute text-xs right-0.5 bg-white w-2 h-2 rounded-full"></span>
            </div>
          </div>
        </div>
      </div>

      {/* Forms */}        
      <div>
        {
          stage === 1 && <AddPetForm />
        }
        {
          stage === 2 && <AddPetMediaForm />
        }
        {
          stage === 3 && <AddPreview />
        }
      </div>
    </div>
  );
};

export default PetForm;

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {useNavigate} from "react-router-dom";
import { setPetFormData,setPetFormEdit,setPetFormId,setPetFormStage } from "../../slices/petFormSlice";

const AddPreview = () => {
  const { formData } = useSelector((state) => state.petForm);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <div>
      <div class="bg-white my-5 text-black shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)] w-full max-w-sm rounded-lg overflow-hidden mx-auto font-[sans-serif] mt-4">
        <div class="min-h-[256px]">
          <img
            src={formData?.thumbnail}
            class="w-full max-h-[350px] object-cover"
          />
        </div>

        <div class="p-6">
          <h3 class="text-gray-800 text-xl font-bold">{formData.name}</h3>
          <p class="mt-4 text-sm text-gray-500 leading-relaxed">
            {formData.breed}
          </p>
          <div className="py-[12px] grid grid-cols-2">
            <p className="text-sm my-1">
              Gender : <span>{formData.gender}</span>
            </p>
            <p className="text-sm my-1">
              Age : <span>{formData.age}</span>
            </p>
            <p className="text-sm my-1">
              Vaccinated : <span>{formData.vaccinated}</span>
            </p>
            <p className="text-sm my-1">
              State : <span>{formData.state}</span>
            </p>
            <p className="text-sm my-1">
              Town : <span>{formData.city}</span>
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-end gap-2 items-center">
        <button className="bg-yellow-100 text-black p-2 rounded" 
        
        onClick={() => {
          dispatch(setPetFormEdit(true));
          dispatch(setPetFormStage(2));
        }}

        >Back</button>
        <div
          onClick={() => {
            dispatch(setPetFormEdit(false));
            dispatch(setPetFormStage(1));
            dispatch(setPetFormId(null));
            dispatch(setPetFormData(null));
            navigate("/adopt")
          }}
          className="bg-blue-400 p-2 rounded"
        >
          Save
        </div>
      </div>
    </div>
  );
};

export default AddPreview;

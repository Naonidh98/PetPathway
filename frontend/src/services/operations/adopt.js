import { apiConnector } from "../apiConnector";
import { adoptApi } from "../api";
import toast from "react-hot-toast";
import { setPetFormStage, setPetFormId } from "../../slices/petFormSlice";

//create pet
export function createPet(data, token) {
  return async (dispatch) => {
    const toastId = toast.loading("Loading....");
    try {
      const newData = new FormData();
      newData.append("name", data?.name);
      newData.append("description", data?.description);
      newData.append("type", data?.type);
      newData.append("age", data?.age);
      newData.append("gender", data?.gender);
      newData.append("vaccinated", true);
      newData.append("breed", data?.breed);

      newData.append("image", data?.thumbnail[0]);

      const response = await apiConnector(
        "POST",
        adoptApi.createPetAdd,
        newData,
        {
          Authorisation: `Bearer ${token}`,
        }
      );

      //response
      console.log(response);

      //failure
      if (!response.data.success) {
        throw new Error(response.data.message);
      }

      //success message
      toast.dismiss(toastId);
      toast.success(response.data.message);

      dispatch(setPetFormStage(2));
      dispatch(setPetFormId(response.data.data));
    } catch (error) {
      console.log("SENDOTP API ERROR............", error);
      toast.error(error?.response?.data?.message);
    }
    toast.dismiss(toastId);
  };
}

//add image
export function addImagePet(file,id,token,setLoading) {
  return async (dispatch) => {
    const toastId = toast.loading("Loading....");
    setLoading(true);
    try {
      const newData = new FormData();
      newData.append("image", file[0]);
      newData.append("petId", id);

      const response = await apiConnector(
        "POST",
        adoptApi.addImage,
        newData,
        {
          Authorisation: `Bearer ${token}`,
        }
      );

      //response
      console.log(response);

      //failure
      if (!response.data.success) {
        throw new Error(response.data.message);
      }

      //success message
      toast.dismiss(toastId);
      toast.success(response.data.message);
    } catch (error) {
      console.log("SENDOTP API ERROR............", error);
      toast.error(error?.response?.data?.message);
    }
    setLoading(false);
    toast.dismiss(toastId);
  };
}

//remove image
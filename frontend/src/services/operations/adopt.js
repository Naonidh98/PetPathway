import { apiConnector } from "../apiConnector";
import { adoptApi } from "../api";
import toast from "react-hot-toast";
import {
  setPetFormStage,
  setPetFormId,
  setPetFormData,
} from "../../slices/petFormSlice";

//create pet
export function createPet(data, token) {
  return async (dispatch) => {
    const toastId = toast.loading("Loading....");
    try {
      console.log("pet data : ", data);

      const response = await apiConnector("POST", adoptApi.createPetAdd, data, {
        Authorisation: `Bearer ${token}`,
      });

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
      dispatch(setPetFormData(response?.data?.pet));
    } catch (error) {
      console.log("SENDOTP API ERROR............", error);
      toast.error(error?.response?.data?.message);
    }
    toast.dismiss(toastId);
  };
}

//add image
export function addImagePet(file, id, token, setLoading) {
  return async (dispatch) => {
    const toastId = toast.loading("Loading....");
    setLoading(true);
    try {
      const newData = new FormData();
      newData.append("image", file[0]);
      newData.append("petId", id);

      const response = await apiConnector("POST", adoptApi.addImage, newData, {
        Authorisation: `Bearer ${token}`,
      });

      //response
      console.log(response);

      //failure
      if (!response.data.success) {
        throw new Error(response.data.message);
      }

      //success message
      toast.dismiss(toastId);
      toast.success(response.data.message);

      dispatch(setPetFormData(response?.data?.data));
    } catch (error) {
      console.log("SENDOTP API ERROR............", error);
      toast.error(error?.response?.data?.message);
    }
    setLoading(false);
    toast.dismiss(toastId);
  };
}

//pet info state wise
export function getPetInfos(data, token, setData, setLoading) {
  return async (dispatch) => {
    const toastId = toast.loading("Loading....");
    setLoading(true);
    try {
      const response = await apiConnector(
        "POST",
        adoptApi.petAdoptDetails,
        data,
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

      setData(response?.data?.data);
    } catch (error) {
      console.log("SENDOTP API ERROR............", error);
      toast.error(error?.response?.data?.message);
    }
    setLoading(false);
    toast.dismiss(toastId);
  };
}

//pet details
export function getPetDetail(data, token, setData, setLoading) {
  return async (dispatch) => {
    const toastId = toast.loading("Loading....");
    setLoading(true);
    try {
      const response = await apiConnector(
        "POST",
        adoptApi.petDetail,
        data,
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

      setData(response?.data?.data);
    } catch (error) {
      console.log("SENDOTP API ERROR............", error);
      toast.error(error?.response?.data?.message);
    }
    setLoading(false);
    toast.dismiss(toastId);
  };
}

import { apiConnector } from "../apiConnector";
import { categoryApi } from "../api";
import { setProfile } from "../../slices/profileSlice";
import { setUser, setToken } from "../../slices/userSlice";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";

//get all categories
export function getCategory(setData) {
  return async (dispatch) => {
    const toastId = toast.loading("Loading....");
    try {
      const response = await apiConnector("GET", categoryApi.get_category);

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
    toast.dismiss(toastId);
  };
}

 
import { apiConnector } from "../apiConnector";
import { profileApi } from "../api";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { setUser } from "../../slices/userSlice";

//update user profile image
export function updateProfileImage(file, token) {
  return async (dispatch) => {
    const toastId = toast.loading("Loading....");
    try {
      //console.log(file);
      const data = new FormData();
      data.append("image", file);

      const response = await apiConnector(
        "POST",
        profileApi.update_profileImg,
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

      localStorage.setItem("user", JSON.stringify(response?.data?.data));
      dispatch(setUser(response?.data?.data));
      
    } catch (error) {
      console.log("API ERROR............", error);
      toast.error(error?.response?.data?.message);
    }
    toast.dismiss(toastId);
  };
}

//update user profile
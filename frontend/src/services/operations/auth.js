import { apiConnector } from "../apiConnector";
import { authApi } from "../api";
import { setProfile } from "../../slices/profileSlice";
import { setUser, setToken } from "../../slices/userSlice";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";

//send otp to user
export function sendOTP(data, navigate, setLoading) {
  return async (dispatch) => {
    setLoading(true);
    const toastId = toast.loading("Loading....");
    try {
      const response = await apiConnector("POST", authApi.send_otp, {
        email: data?.email,
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

      dispatch(setProfile(data));
      localStorage.setItem("profile", JSON.stringify(data));

      navigate("/otp/verify");
    } catch (error) {
      console.log("SENDOTP API ERROR............", error);
      toast.error(error?.response?.data?.message);
    }
    toast.dismiss(toastId);
    setLoading(false);
  };
}

//resend otp
export function resendOTP(data = null, setLoading) {
  return async (dispatch) => {
    setLoading(true);
    const toastId = toast.loading("Loading....");
    try {
      if (data == null) {
        data = useSelector((state) => state.profile);
      }

      const response = await apiConnector("POST", authApi.send_otp, {
        email: data?.email,
      });

      //response
      console.log(response);

      //failure
      if (!response.data.success) {
        throw new Error(response.data.message);
      }

      //success message
      toast.success(response.data.message);
    } catch (error) {
      console.log("SENDOTP API ERROR............", error);
      toast.error(error?.response?.data?.message);
    }
    toast.dismiss(toastId);
    setLoading(false);
  };
}

//sign up
export function signup(data, navigate, setLoading) {
  return async (dispatch) => {
    setLoading(true);
    const toastId = toast.loading("Loading....");
    try {
      const response = await apiConnector("POST", authApi.signup, data);

      //response
      console.log(response);

      //failure
      if (!response.data.success) {
        throw new Error(response.data.message);
      }

      localStorage.removeItem("profile");
      navigate("/login");

      //success message
      toast.success(response.data.message);
    } catch (error) {
      console.log("SENDOTP API ERROR............", error);
      toast.error(error?.response?.data?.message);
    }
    toast.dismiss(toastId);
    setLoading(false);
  };
}

//reset - password -token
export function sendResendPasswordToken(email, setLoading) {
  return async (dispatch) => {
    setLoading(true);
    const toastId = toast.loading("Loading....");
    try {
      const response = await apiConnector(
        "POST",
        authApi.reset_password_token,
        {
          email: email,
        }
      );

      //response
      console.log(response);

      //failure
      if (!response.data.success) {
        throw new Error(response.data.message);
      }

      //success message
      toast.success(response.data.message);
    } catch (error) {
      console.log("SENDOTP API ERROR............", error);
      toast.error(error?.response?.data?.message);
    }
    toast.dismiss(toastId);
    setLoading(false);
  };
}

//reset-password
export function resetPassword(data, setLoading) {
  return async (dispatch) => {
    setLoading(true);
    const toastId = toast.loading("Loading....");
    try {
      const response = await apiConnector("POST", authApi.resetPassword, data);

      //response
      console.log(response);

      //failure
      if (!response.data.success) {
        throw new Error(response.data.message);
      }

      //success message
      toast.success(response.data.message);
    } catch (error) {
      console.log("API ERROR............", error);
      toast.error(error?.response?.data?.message);
    }
    toast.dismiss(toastId);
    setLoading(false);
  };
}

//login
export function login(data, setLoading, navigate) {
  return async (dispatch) => {
    setLoading(true);
    const toastId = toast.loading("Loading....");
    try {
      const response = await apiConnector("POST", authApi.login, data);

      //response
      console.log(response);

      //failure
      if (!response.data.success) {
        throw new Error(response.data.message);
      }

      //success message
      toast.success(response.data.message);

      localStorage.setItem("user", JSON.stringify(response?.data?.user));
      localStorage.setItem("token", JSON.stringify(response?.data?.token));

      dispatch(setUser(response?.data?.user));
      dispatch(setToken(response?.data?.token));

      navigate("/dashboard/my-profile");
    } catch (error) {
      console.log("API ERROR............", error);
      toast.error(error?.response?.data?.message);
    }
    toast.dismiss(toastId);
    setLoading(false);
  };
}

//logout
export function logout(navigate) {
  return async (dispatch) => {
    const toastId = toast.loading("Loading....");
    try {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      localStorage.removeItem("profile");

      dispatch(setProfile(null))
      dispatch(setUser(null))
      dispatch(setToken(null))

      //success message
      toast.success("user logout");

      navigate("/");
    } catch (error) {
      toast.error("Failed to logout");
    }
    toast.dismiss(toastId);
  };
}

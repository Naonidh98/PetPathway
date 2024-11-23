import { apiConnector } from "../apiConnector";
import { categoryApi, storeApi } from "../api";
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

//create category
export function createCategory(data, setLoading, token) {
  return async (dispatch) => {
    const toastId = toast.loading("Loading....");
    setLoading(true);
    try {
      const newData = new FormData();
      newData.append("title", data?.title);
      newData.append("description", data?.description);
      newData.append("image", data?.thumbnail[0]);

      const response = await apiConnector(
        "POST",
        categoryApi.create_category,
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
    toast.dismiss(toastId);
    setLoading(false);
  };
}

//create item
export function createItem(data, setLoading, token) {
  return async (dispatch) => {
    const toastId = toast.loading("Loading....");
    setLoading(true);
    try {
      const newData = new FormData();
      newData.append("title", data?.title);
      newData.append("description", data?.description);
      newData.append("brand", data?.brand);
      newData.append("price", data?.price);
      newData.append("dimension", data?.dimension);
      newData.append("origin", data?.origin);
      newData.append("gtin", data?.gtin);
      newData.append("sku", data?.sku);
      newData.append("type", data?.type);
      newData.append("returnPolicy", data?.return);
      newData.append("categoryName", data?.category);
      newData.append("image", data?.thumbnail[0]);

      const response = await apiConnector(
        "POST",
        categoryApi.create_item,
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
    toast.dismiss(toastId);
    setLoading(false);
  };
}

//get Store data
export function getStoreItem(setLoading, setData) {
  return async (dispatch) => {
    const toastId = toast.loading("Loading....");
    setLoading(true);
    try {
      const response = await apiConnector("GET", storeApi.getStoreDetails);

      //response
      console.log(response);
      setData(response.data.data);

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
    toast.dismiss(toastId);
    setLoading(false);
  };
}

//get store details
export function getStoreDetails(setLoading, setData, setDogs, setCats, token) {
  return async (dispatch) => {
    const toastId = toast.loading("Loading....");
    setLoading(true);
    try {
      const response = await apiConnector(
        "GET",
        storeApi.getStoreAnalytics,
        {},
        {
          Authorisation: `Bearer ${token}`,
        }
      );

      //response
      console.log(response);
      setData(response.data.data);
      setDogs(response.data.dogs);
      setCats(response.data.cats);

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
    toast.dismiss(toastId);
    setLoading(false);
  };
}

export function getCatDash(setLoading, setData, token) {
  return async (dispatch) => {
    const toastId = toast.loading("Loading....");
    setLoading(true);
    try {
      const response = await apiConnector(
        "GET",
        storeApi.getCategoryAndItems,
        {},
        {
          Authorisation: `Bearer ${token}`,
        }
      );

      //response
      console.log(response);
      setData(response.data.categories);
      
      //failure
      if (!response.data.success) {
        throw new Error(response.data.message);
      }

      //success message
      toast.dismiss(toastId);
      toast.success(response.data.message);
    } catch (error) {
      console.log("API ERROR............", error);
      toast.error(error?.response?.data?.message);
    }
    toast.dismiss(toastId);
    setLoading(false);
  };
}
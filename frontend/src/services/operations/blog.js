import { apiConnector } from "../apiConnector";
import { blogsApi } from "../api";
import toast from "react-hot-toast";
import { setBlogs, setPage } from "../../slices/blogSlice";

//create blog
/*
export function createBlog(data,setLoading) {
  return async (dispatch) => {
    setLoading(true);
    const toastId = toast.loading("Loading....");
    try {
    } catch (error) {
      console.log("API ERROR............", error);
      toast.error(error?.response?.data?.message);
    }
    toast.dismiss(toastId);
    setLoading(false);
  };
}*/

export function createBlog(data, token, setLoading) {
  return async (dispatch) => {
    setLoading(true);
    const toastId = toast.loading("Loading....");
    try {
      const newData = new FormData();
      newData.append("title", data?.title);
      newData.append("description", data?.description);

      if (data.image !== null) {
        newData.append("image", data?.image);
      } else {
        newData.append("image", null);
      }

      const response = await apiConnector(
        "POST",
        blogsApi.create_blog,
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

      //set new blogs data
      dispatch(setPage(1));
      dispatch(setBlogs(response?.data?.data));
    } catch (error) {
      console.log("API ERROR............", error);
      toast.error(error?.response?.data?.message);
    }
    toast.dismiss(toastId);
    setLoading(false);
  };
}

//fetch blogs as pagination
export function getBlogsPagination(data, token, setLoading) {
  return async (dispatch) => {
    setLoading(true);
    const toastId = toast.loading("Loading....");
    try {
      const response = await apiConnector("POST", blogsApi.get_blog, data, {
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

      //set new blogs data
      dispatch(setBlogs(response?.data?.data));
    } catch (error) {
      console.log("API ERROR............", error);
      toast.error(error?.response?.data?.message);
    }
    toast.dismiss(toastId);
    setLoading(false);
  };
}

//fetch user bogs
export function getUserBlogs(token, setMyBlogs, setLoading) {
  return async (dispatch) => {
    setLoading(true);
    const toastId = toast.loading("Loading....");
    try {
      const response = await apiConnector(
        "GET",
        blogsApi.get_user_blog,
        {},
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

      //set new blogs data
      setMyBlogs(response?.data?.data);
    } catch (error) {
      console.log("API ERROR............", error);
      toast.error(error?.response?.data?.message);
    }
    toast.dismiss(toastId);
    setLoading(false);
  };
}

//fetch blog
export function getBlogData(data, token, setData, setLoading) {
  return async (dispatch) => {
    setLoading(true);
    const toastId = toast.loading("Loading....");
    try {
      const response = await apiConnector(
        "POST",
        blogsApi.get_blog_data,
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

      setData(response.data.data);

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

//delete blog
export function deleteUserBlog(data, token, setMyBlogs, setLoading) {
  return async (dispatch) => {
    //setLoading(true);
    const toastId = toast.loading("Loading....");
    try {
      const response = await apiConnector(
        "DELETE",
        blogsApi.delete_blog,
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

      setMyBlogs(response.data.data);
    } catch (error) {
      console.log("API ERROR............", error);
      toast.error(error?.response?.data?.message);
    }
    toast.dismiss(toastId);
    // setLoading(false);
  };
}

//like blog
export function likeBlog(data, token, setLikeCount, setLiked) {
  return async (dispatch) => {

    const toastId = toast.loading("Loading....");
    try {
      const response = await apiConnector(
        "PUT",
        blogsApi.like_blog,
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

      setLikeCount(prev => prev + (response.data.message.includes('dislike') ? -1 : 1));
      setLiked(prev => !prev);
    } catch (error) {
      console.log("API ERROR............", error);
      toast.error(error?.response?.data?.message);
    }
    toast.dismiss(toastId);
  };
}

export function editBlogData(data, token, setLoading) {
  return async (dispatch) => {
    setLoading(true);
    const toastId = toast.loading("Loading....");
    try {
      const newData = new FormData();
      newData.append("title", data?.title);
      newData.append("description", data?.description);
      newData.append("blogId", data?.id);
      if (data?.image !== null) {
        newData.append("image", data?.image);
      }

      const response = await apiConnector(
        "PUT",
        blogsApi.update_blog,
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
      console.log("API ERROR............", error);
      toast.error(error?.response?.data?.message);
    }
    toast.dismiss(toastId);
    setLoading(false);
  };
}

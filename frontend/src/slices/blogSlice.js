import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allBlogs: [],
  page: 1,
};

const blogSlice = createSlice({
  name: "blog",
  initialState: initialState,
  reducers: {
    setPage(state, value) {
      state.page = value.payload;
    },
    setBlogs(state, value) {
      state.allBlogs = value.payload;
    },
  },
});

export const {setPage,setBlogs} = blogSlice.actions;
export default blogSlice.reducer;





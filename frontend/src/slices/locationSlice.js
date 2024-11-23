import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  state: localStorage.getItem("state") ? localStorage.getItem("state") : null,
};

const locationSlice = createSlice({
  name: "location",
  initialState: initialState,
  reducers: {
    setLoaction(state, value) {
      state.state = value.payload;
    },
  },
});

export const { setLoaction } = locationSlice.actions;
export default locationSlice.reducer;

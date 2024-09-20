import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  profile: localStorage.getItem("profile")
    ? JSON.parse(localStorage.getItem("profile"))
    : null,
};

const profileSlice = createSlice({
  name: "profile",
  initialState: initialState,
  reducers: {
    setProfile(state, value) {
      state.profile = value.payload;
    },
  },
});

export const { setProfile } = profileSlice.actions;
export default profileSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  stage: 1,
  formData: null,
  editForm : false,
  id : null,
};

const petFormSlice = createSlice({
  name: "petForm",
  initialState: initialState,
  reducers: {
    setPetFormStage(state, value) {
      state.stage = value.payload;
    },
    setPetFormEdit(state, value) {
      state.editForm = value.payload;
    },
    setPetFormData(state, value) {
      state.formData = value.payload;
    },
    setPetFormId(state, value) {
      state.id = value.payload;
    },
  },
});

export const {setPetFormStage, setPetFormData, setPetFormEdit ,setPetFormId} = petFormSlice.actions;
export default petFormSlice.reducer;

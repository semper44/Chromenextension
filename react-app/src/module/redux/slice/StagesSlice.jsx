/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  registerStages: {
    stage_one: true,
    stage_two: false,
    stage_three: false,
    stage_four: false,
  },
};

export const StagesSlice = createSlice({
  name: "stages",
  initialState,
  reducers: {
    updateStages: (state, action) => {
      state.registerStages = action.payload;
    },
  },
});
export const { updateStages } = StagesSlice.actions;

export default StagesSlice.reducer;
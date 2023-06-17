/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  registration: {
    email: "",
    password: "",
    nickname: "",
    usersAccount: "",
    usersPrivateKey: "",
    usersSeedPhrase: "",
  },
};

export const RegistrationSlice = createSlice({
  name: "registration",
  initialState,
  reducers: {
    updateInput: (state, action) => {
      state.registration = action.payload;
    },
  },
});
export const { updateInput } = RegistrationSlice.actions;
export default RegistrationSlice.reducer;

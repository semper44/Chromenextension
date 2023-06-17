import { configureStore } from '@reduxjs/toolkit';
import registrationReducer from '../slice/RegistrationSlice';
import StagesReducer from '../slice/StagesSlice';

export const store = configureStore({
  reducer: {
    registration: registrationReducer,
    stages: StagesReducer,
  },
});

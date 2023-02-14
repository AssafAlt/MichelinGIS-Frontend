import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import reviewReducer from "../features/review/reviewSlice";
import pointReducer from "../features/points/pointSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    review: reviewReducer,
    point: pointReducer,
  },
});

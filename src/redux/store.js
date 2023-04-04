import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import multiplyReducer from "./multiplySlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    multiply: multiplyReducer,
  },
});

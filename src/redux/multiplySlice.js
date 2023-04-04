import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 2,
};

export const multiplySlice = createSlice({
  name: "multiply",
  initialState,
  reducers: {
    multiplyBy2: (state) => {
      state.value *= 2;
    },
    multiplyByValue: (state, action) => {
      state.value *= action.payload;
    },
  },
});

export const { multiplyBy2, multiplyByValue } = multiplySlice.actions;
export default multiplySlice.reducer;

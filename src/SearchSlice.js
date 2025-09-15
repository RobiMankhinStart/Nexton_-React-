import { createSlice } from "@reduxjs/toolkit";

export const searchSlice = createSlice({
  name: "counter",
  initialState: {
    value: null,
    cartItems: [],
  },
  reducers: {
    searchPro: (state, action) => {
      state.value = action.payload;
    },
    addTocart: (state, action) => {
      state.cartItems.push(action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { searchPro, addTocart } = searchSlice.actions;

export default searchSlice.reducer;

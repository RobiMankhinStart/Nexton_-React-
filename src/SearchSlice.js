import { createSlice } from "@reduxjs/toolkit";

const savedCart = JSON.parse(localStorage.getItem("proId")) || [];
// console.log("slice", savedCart);
export const searchSlice = createSlice({
  name: "counter",
  initialState: {
    value: null,
    cartItems: savedCart,
  },
  reducers: {
    searchPro: (state, action) => {
      state.value = action.payload;
    },
    addTocart: (state, action) => {
      const existId = state.cartItems.find((item) => item == action.payload);
      if (existId) return;
      state.cartItems.push(action.payload);
      localStorage.setItem("proId", JSON.stringify(state.cartItems));
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item !== action.payload
      );
      localStorage.setItem("proId", JSON.stringify(state.cartItems));
    },
  },
});

// Action creators are generated for each case reducer function
export const { searchPro, addTocart, removeFromCart } = searchSlice.actions;

export default searchSlice.reducer;

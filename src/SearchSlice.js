import { createSlice } from "@reduxjs/toolkit";

export const searchSlice = createSlice({
  name: "counter",
  initialState: {
    value: null,
  },
  reducers: {
    searchPro: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { searchPro } = searchSlice.actions;

export default searchSlice.reducer;

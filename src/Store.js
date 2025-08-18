import { configureStore } from "@reduxjs/toolkit";
import searchSlice from "./SearchSlice";

export default configureStore({
  reducer: {
    searchProduct: searchSlice,
  },
});

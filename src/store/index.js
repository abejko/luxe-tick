import { cartReducer } from "./slices/cartSlice";
import { configureStore } from "@reduxjs/toolkit";
import { searchReducer } from "./slices/searchSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    search: searchReducer,
  },
});

export { store };

import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import productsReducer from "./productsSlice";
import basketReducer from "./basketSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    product: productsReducer,
    basket: basketReducer,
  },
});

import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./appSlice";
import productsReducer from "./productsSlice";
import basketReducer from "./basketSlice";

export const store = configureStore({
  reducer: {
    app: appReducer,
    product: productsReducer,
    basket: basketReducer,
  },
});

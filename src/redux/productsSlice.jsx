import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const getBasketFromStorage = () => {
  if (localStorage.getItem("detail")) {
    return JSON.parse(localStorage.getItem("detail"));
  }
  return {};
};

const writeBasketToStorage = (products) => {
  localStorage.setItem("detail", JSON.stringify(products));
};

const BASE_URL = "https://fakestoreapi.com";

export const getAllProducts = createAsyncThunk("getAllProducts", async () => {
  const response = await axios.get(`${BASE_URL}/products`);
  return response.data;
});

const initialState = {
  product: [],
  selectedProduct: getBasketFromStorage(),
  loading: false,
};

export const productsSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    SetSelectedProduct: (state, action) => {
      state.selectedProduct = action.payload;
      writeBasketToStorage(state.selectedProduct);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllProducts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getAllProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.product = action.payload;
    });
  },
});

export const { SetSelectedProduct } = productsSlice.actions;

export default productsSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const getBasketFromStorage = () => {
  if (localStorage.getItem("basket")) {
    return JSON.parse(localStorage.getItem("basket"));
  }
  return [];
};

const writeBasketToStorage = (products) => {
  localStorage.setItem("basket", JSON.stringify(products));
};

const initialState = {
  products: getBasketFromStorage(),
  drawer: false,
  totalAmount: 0,
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      const findProduct = state.products.find(
        (product) => product.id === action.payload.id
      );
      if (findProduct) {
        const extractedProducts = state.products.filter(
          (product) => product.id !== action.payload.id
        );
        findProduct.count += action.payload.count;
        state.products = [...extractedProducts, findProduct];
      } else {
        state.products = [...state.products, action.payload];
      }
      writeBasketToStorage(state.products);
    },
    removeBasket: (state, action) => {
      const removedProduct = state.products.find(
        (product) => product.id === action.payload.id
      );

      if (removedProduct) {
        state.products = state.products.filter(
          (product) => product.id !== action.payload.id
        );
        state.totalAmount -= removedProduct.price * removedProduct.count;
        writeBasketToStorage(state.products);
      }
    },
    setDrawer: (state) => {
      state.drawer = !state.drawer;
    },
    setTotalAmount: (state) => {
      state.totalAmount = 0;
      state.products.forEach((product) => {
        state.totalAmount += product.price * product.count;
      });
    },
  },
});

export const { addToBasket, setDrawer, setTotalAmount, removeBasket } =
  basketSlice.actions;

export default basketSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
};

export const userSlice = createSlice({
  name: "app",
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
});

export const {} = userSlice.actions;

export default userSlice.reducer;

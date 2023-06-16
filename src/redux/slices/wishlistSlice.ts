import { createSlice } from "@reduxjs/toolkit";
import { AppDispatch, RootState } from "../store";

interface bookItem {}

interface whishlistState {
  books: bookItem[];
}

const initialState: whishlistState = {
  books: [],
};

export const whishlistSlice = createSlice({
  name: "whishlist",
  initialState,
  reducers: {},
});

export const {} = whishlistSlice.actions;

export default whishlistSlice.reducer;

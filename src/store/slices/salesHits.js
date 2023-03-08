import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  salesHitsItems: [],
  isLoading: false,
  errorSalesHits: "",
};

export const salesHitsSlice = createSlice({
  name: "salesHitsItems",
  initialState,
  reducers: {
    putSalesHitsItems: (state, action) => {
      state.salesHitsItems = action.payload;
      state.isLoading = true;
    },

    showErrorSalesHits: (state, action) => {
      state.errorSalesHits = action.payload;
    },
  },
});

export const { putSalesHitsItems, showErrorSalesHits } = salesHitsSlice.actions;
export const salesHits = (state) => state.salesHitsSlice;
export default salesHitsSlice.reducer;

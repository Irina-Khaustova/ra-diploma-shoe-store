import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    salesHitsItems: [],
    isLoading: false,
}

export const salesHitsSlice = createSlice({
  name: 'salesHitsItems',
  initialState,
  reducers: { 
    putSalesHitsItems: (state, action) => {
      state.salesHitsItems = action.payload;
      state.isLoading = true;
    }
}
})

export const {putSalesHitsItems} = salesHitsSlice.actions;
export const salesHits = (state) => state.salesHitsSlice;
export default salesHitsSlice.reducer;
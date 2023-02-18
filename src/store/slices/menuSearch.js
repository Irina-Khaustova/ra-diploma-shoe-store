import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    searchCatalog: "",
}

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: { 
    putInputValue: (state, action) => {
      state.searchCatalog = action.payload;
    }
}
})

export const {putInputValue} = searchSlice.actions;
export const catalog = (state) => state.searchSlice;
export default searchSlice.reducer;
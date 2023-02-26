import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    error: '',
}

export const errorSlice = createSlice({
  name: 'error',
  initialState,
  reducers: { 
    showError: (state, action) => {
      state.error = action.payload;
    }
}
})

export const {showError} = errorSlice.actions;
export const salesHits = (state) => state.salesHitsSlice;
export default errorSlice.reducer;
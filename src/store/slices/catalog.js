import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: [],
    categories: [],
    loadingCatalog: false,
    selectedItems: [],
    selectedCategory: "",
    hideButton: false,
    product: '',
}

export const catalogSlice = createSlice({
  name: 'catalog',
  initialState,
  reducers: {
    getItems: (state, action) => {
      state.selectedCategory = action.payload;
    },
    putItems: (state, action) => {
      if (!action.payload || action.payload.length < 6) {
        state.hideButton = true;
      }
      state.items = action.payload;
    },
    putCategory: (state, action) => {
      state.categories = action.payload;
    },
    putItemsOffset: (state, action) => {
      const data = action.payload;
      if (!data || data.length < 6) {
        state.hideButton = true;
        console.log(33, data, data.length, !data);
      }
      // так было
      // const newItems = state.items.concat(data);
      // console.log(hideButton);
      // return { ...state, items: newItems, hideButton: hideButton };
      state.items.concat(data);
    },
    activeHideButton: (state) => {
      state.hideButton = false;
    },
    putProduct: (state, action) => {
      state.product = action.payload;
    },

  }
})

export const {getItems, putItems, putCategory, putItemsOffset, activeHideButton, putProduct} = catalogSlice.actions;
export const catalog = (state) => state.catalogSlice;
export default catalogSlice.reducer;
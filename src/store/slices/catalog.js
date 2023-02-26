import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: [],
    categories: [],
    isLoading: false,
    selectedItems: [],
    selectedCategory: "",
    hideButton: false,
    product: '',
    searchCatalog: "",
}

export const catalogSlice = createSlice({
  name: 'catalog',
  initialState,
  reducers: {
    getItems: (state, action) => {
      console.log(action.payload)
      state.selectedCategory = action.payload.selectedCategory;
    },
    putItems: (state, action) => {
      if (!action.payload || action.payload.length < 6) {
        state.hideButton = true;
      }
      state.items = action.payload;
      state.isLoading = true;
    },
    putCategory: (state, action) => {
      console.log(action.payload)
      const data = action.payload;
      let arr = [];
      data?.forEach(el => {
        arr.push({categories: el.id, title: el.title, className: "catalog-categories"})
      });
      state.categories = arr;
      console.log(state.categories)
    },
    putItemsOffset: (state, action) => {
      console.log(action.payload)
      const data = action.payload;
      if (!data || data.length < 6) {
        state.hideButton = true;
        console.log(33, data, data.length, !data);
      }
      state.items = state.items.concat(data);
    },
    activeHideButton: (state) => {
      state.hideButton = false;
    },
    putProduct: (state, action) => {
      state.product = action.payload;
    },
    putInputValue: (state, action) => {
      state.searchCatalog = action.payload;
    },
    
    highlightActiveCategory: (state, action) => {
      console.log(77, action.payload)
      state.categories.forEach(el => {
        console.log(typeof(el.categories), typeof(+action.payload))
        if(el.categories === +action.payload) {

          el.className = "catalog-categories-active"

      } else { el.className = "catalog-categories"}
})
    },
    showError: (state, action) => {
      state.error = action.payload
    }
  }
  })

export const {getItems, putItems, putCategory, putItemsOffset, activeHideButton, putProduct, putInputValue, highlightActiveCategory} = catalogSlice.actions;
export const catalog = (state) => state.catalogSlice;
export default catalogSlice.reducer;
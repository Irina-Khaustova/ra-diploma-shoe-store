import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  categories: [],
  isLoading: false,
  selectedItems: [],
  selectedCategory: "",
  hideButton: true,
  product: "",
  searchCatalog: "",
  errorCatalog: "",
  errorOffset: "",
  isLoadingProduct: false,
  isLoadingOffset: true,
};

export const catalogSlice = createSlice({
  name: "catalog",
  initialState,
  reducers: {
    getItems: (state, action) => {
      state.items = null;
      state.selectedCategory = action.payload.selectedCategory;
      state.hideButton = true;
      state.errorOffset = "";
    },
    putItems: (state, action) => {
      if (!action.payload || action.payload.length < 6) {
        state.hideButton = true;
      }
      state.items = action.payload;
      state.isLoading = true;
      state.hideButton = false;
      state.errorCatalog = null;
    },
    putCategory: (state, action) => {
      const data = action.payload;
      let arr = [];
      data?.forEach((el) => {
        arr.push({
          categories: el.id,
          title: el.title,
          className: "catalog-categories",
        });
      });
      state.categories = arr;
    },

    changeIsLoadingOffset: (state, action) => {
      state.isLoadingOffset = false;
    },

    getItemsOffset: (state, action) => {
      state.hideButton = true;
      state.isLoadingOffset = false;
    },

    putItemsOffset: (state, action) => {
      const data = action.payload;
      if (!data || data.length < 6) {
        state.hideButton = true;
      } else {
        state.hideButton = false;
      }
      state.items = state.items.concat(data);
      state.isLoadingOffset = true;
    },
    activeHideButton: (state) => {
      state.hideButton = false;
    },
    putProduct: (state, action) => {
      state.product = action.payload;
      state.isLoadingProduct = true;
    },
    putInputValue: (state, action) => {
      state.searchCatalog = action.payload;
    },

    highlightActiveCategory: (state, action) => {
      state.categories.forEach((el) => {
        if (el.categories === +action.payload) {
          el.className = "catalog-categories-active";
        } else {
          el.className = "catalog-categories";
        }
      });
    },
    showErrorCatalog: (state, action) => {
      state.errorCatalog = action.payload;
      state.isLoading = true;
    },
    showErrorOffset: (state, action) => {
      state.errorOffset= action.payload;
      state.isLoadingOffset = true;
    },
    showErrorProduct: (state, action) => {
      state.errorProduct = action.payload;
      state.isLoadingProduct = true;
    },
  },
});

export const {
  getItems,
  putItems,
  putCategory,
  putItemsOffset,
  activeHideButton,
  putProduct,
  putInputValue,
  highlightActiveCategory,
  showErrorCatalog,
  isLoadingProduct,
  showErrorProduct,
  changeIsLoadingOffset,
  getItemsOffset,
  showErrorOffset,
} = catalogSlice.actions;
export const catalog = (state) => state.catalogSlice;
export default catalogSlice.reducer;

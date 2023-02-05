import {
  SERCH_SKILLS_REQUEST,
  SERCH_SKILLS_SUCCESS_CATEGORY,
  SERCH_SKILLS_SUCCESS_ITEMS,
  GET_SELECTED_ITEMS,
  PUT_SALES_HITS_ITEMS,
  GET_INPUT_CATALOG_VALUE,
  GET_ITEMS,
  PUT_ITEMS_OFFSET,
  HIDE_BUTTON,
} from "../actions/actionTypes";

const initialState = {
  items: [],
  salesHitsItems: [],
  categories: [],
  loadingSalesHits: false,
  loadingCatalog: false,
  selectedItems: [],
  searchCatalog: "",
  selectedCategory: "",
  hideButton: false,
};

export default function mainPageCatalogReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ITEMS: {
      const data = action.payload.selectedCategory;
      console.log(action);
      return { ...state, selectedCategory: data };
    }
    case SERCH_SKILLS_REQUEST: {
      const { itemsValue } = action.payload;
      return { ...state, categories: itemsValue };
    }
    case SERCH_SKILLS_SUCCESS_CATEGORY: {
      const data = action.payload;
      //console.log(action);
      return { ...state, categories: data };
    }

    case SERCH_SKILLS_SUCCESS_ITEMS: {
      const data = action.payload;
      let hideButton = state.hideButton;
      if (!data || data.length < 6) {
        hideButton = true;
      }
      console.log(action);
      return { ...state, items: data, hideButton: hideButton };
    }
    case GET_SELECTED_ITEMS: {
      const data = action.payload;
      //console.log(action);
      return { ...state, selectedItems: data };
    }
    case PUT_SALES_HITS_ITEMS: {
      const data = action.payload;
      //console.log(action);
      return { ...state, salesHitsItems: data };
    }
    case GET_INPUT_CATALOG_VALUE: {
      const inputValue = action.payload;
      //console.log(action);
      return { ...state, searchCatalog: inputValue };
    }
    case PUT_ITEMS_OFFSET: {
      const data = action.payload;
      let hideButton = state.hideButton;
      if (!data || data.length < 6) {
        hideButton = true;
        console.log(33, data, data.length, !data);
      }
      const newItems = state.items.concat(data);
      console.log(hideButton);
      return { ...state, items: newItems, hideButton: hideButton };
    }
    case HIDE_BUTTON: {
      //const hideButton = action.payload;
      console.log(action);
      return { ...state, hideButton: false };
    }
    default:
      return state;
  }
}

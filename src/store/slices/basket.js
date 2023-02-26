import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  quantityProductsInBasket: null,
  productsInBasket: JSON.parse(window.localStorage.getItem("productsInBasket")),
  // productsInBasket:  [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    putProductInBasket: (state, action) => {
      if (state.productsInBasket === null) {
        state.productsInBasket = [];
      }
      // так не работает
      // if(state.productsInBasket.length > 0) {
      //     for (let i = 0; i < state.productsInBasket.length - 1; i++) {
      //       console.log(66)
      //         if(state.productsInBasket[i].product.id === action.payload.product.id & state.productsInBasket[i].size === action.payload.size) {
      //           console.log(current(state.productsInBasket[i]))
      //          current(state.productsInBasket[i]).quantity +=1;
      //         }
      //       }

      // } else {
      //   state.productsInBasket.push(action.payload)};
      state.productsInBasket.push(action.payload);
      window.localStorage.setItem(
        "productsInBasket",
        JSON.stringify(state.productsInBasket)
      );
    },

    deleteProductInBasket: (state, action) => {
      console.log(
        state.productsInBasket[0].product.id +
          state.productsInBasket[0].size ===
          action.payload
      );
      state.productsInBasket = state.productsInBasket.filter(
        (el) => el.product.id + el.size !== action.payload
      );
      window.localStorage.setItem(
        "productsInBasket",
        JSON.stringify(state.productsInBasket)
      );
    },
    changeProductInBaslet: (state, action) => {
      state.productsInBasket[action.payload.index].quantity +=
        action.payload.quantity;
      window.localStorage.setItem(
        "productsInBasket",
        JSON.stringify(state.productsInBasket)
      );
    },
  },
});

export const {
  putProductInBasket,
  deleteProductInBasket,
  changeProductInBaslet,
} = basketSlice.actions;
export const basket = (state) => state.basketSlice;
export default basketSlice.reducer;

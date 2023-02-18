import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  quantityProductsInBasket: null,
  productsInBasket:  JSON.parse(window.localStorage.getItem('productsInBasket')),
}

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: { 
    putProductInBasket: (state, action) => {
        const products = state.productsInBasket;
      state.productsInBasket = products === null? []: products;
      if(products.length > 0) {
        for (let i = 0; i < products.length - 1; i++) {
            if(products[i].product.id === action.payload.product.id & products[i].size === action.payload.size) {
              state.productsInBasket[i].quantity +=1;
            } 
        
      }
    } else {state.productsInBasket.push(action.payload)};
    state.quantityProductsInBasket = state.productsInBasket.lengh > 0 ? state.productsInBasket.lengh : null;
  }
}
})

export const {putProductInBasket} = basketSlice.actions;
export const basket = (state) => state.basketSlice;
export default basketSlice.reducer;

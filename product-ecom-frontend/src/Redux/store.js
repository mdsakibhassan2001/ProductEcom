import { configureStore } from "@reduxjs/toolkit";
import productCardSlice from './features/productCard/ProductCardSlice'
const store=configureStore({
  reducer:{
    productCard:productCardSlice,
  },
})
export default store;
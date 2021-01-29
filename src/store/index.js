import { configureStore } from "@reduxjs/toolkit";
import plantReducer from './slices/plantSlice';

const store = configureStore({
   reducer: {
      plant: plantReducer,
   }
 })

export default store;
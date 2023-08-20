import { configureStore } from "@reduxjs/toolkit";
import pizzaSlice from "./slices/pizzaSlice.js";
import cartSlice from "./slices/cartSlice.js"


export const store = configureStore({
  reducer: {
    pizzaSlice,
    cartSlice,
  },
})

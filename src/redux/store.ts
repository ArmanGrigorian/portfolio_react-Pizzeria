import { configureStore } from "@reduxjs/toolkit";
import pizzaSlice from "./slices/pizzaSlice.ts";
import cartSlice from "./slices/cartSlice.ts"


export const store = configureStore({
  reducer: {
    pizzaSlice,
    cartSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>;

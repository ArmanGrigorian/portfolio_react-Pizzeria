import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import pizzaSlice from "./slices/pizzas/pizzaSlice.ts";
import cartSlice from "./slices/cart/cartSlice.ts";

export const store = configureStore({
	reducer: {
		pizzaSlice,
		cartSlice,
	},
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export type RootState = ReturnType<typeof store.getState>;

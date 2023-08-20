import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	totalPrice: 0,
	totalCount: 0,
	items: [],
};

export const cartSlice = createSlice({
	name: "cart",

	initialState,

	reducers: {
		addPizzaToCart(state, { payload }) {
			const findItem = state.items.find((obj) => {
				if (obj.id === payload.id && obj.sizes === payload.sizes && obj.doughs === payload.doughs)
					return obj;
			});

			if (findItem) {
				findItem.count += 1;
			} else state.items.push(payload);

			state.totalPrice = state.items.reduce((sum, obj) => {
				return obj.count * obj.price + sum;
			}, 0);

			state.totalCount = state.items.reduce((sum, obj) => {
				return obj.count + sum;
			}, 0);
		},

		decrementPizzaCount(state, { payload }) {
			const findItem = state.items.find((obj) => {
				if (obj.id === payload.id && obj.sizes === payload.sizes && obj.doughs === payload.doughs)
					return obj;
			});

			if (findItem) {
				findItem.count -= 1;
			} 

			state.totalPrice -= payload.price; 
			state.totalCount -= 1;
		},

		removePizzaFromCart(state, { payload }) {
			state.items = state.items.filter((obj) => {
				if (obj.id === payload.id && obj.sizes === payload.sizes && obj.doughs === payload.doughs) {
					setTimeout(() => alert("removed"), 150);
				} else return obj;	
			})

			state.totalPrice -= payload.price;
			state.totalCount -= payload.count;
		},

		clearCart(state) {
			state.items = [];
			state.totalPrice = 0;
			state.totalCount = 0;
		},
	},
});

export const { addPizzaToCart, decrementPizzaCount, removePizzaFromCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;

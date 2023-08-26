import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import getLocalCart from "../../../utilities/getLocalCart";
import calcTotalPrice from "../../../utilities/calcTotalPrice";
import calcTotalCount from "../../../utilities/calcTotalCount";
import { IinitialStateCart, TcartItem } from "./types";

const localCart: IinitialStateCart = getLocalCart();

const initialState: IinitialStateCart = {
	totalPrice: localCart.totalPrice,
	totalCount: localCart.totalCount,
	items: localCart.items,
};

export const cartSlice = createSlice({
	name: "cart",

	initialState,

	reducers: {
		addPizzaToCart(state, { payload }: PayloadAction<TcartItem>): void {
			const findItem = state.items.find((obj) => {
				if (obj.id === payload.id && obj.sizes === payload.sizes && obj.doughs === payload.doughs)
					return obj;
			});

			if (findItem) {
				findItem.count += 1;
			} else state.items.push(payload);

			state.totalPrice = calcTotalPrice(state.items);

			state.totalCount = calcTotalCount(state.items);
		},

		decrementPizzaCount(state, { payload }: PayloadAction<TcartItem>): void {
			const findItem = state.items.find((obj) => {
				if (obj.id === payload.id && obj.sizes === payload.sizes && obj.doughs === payload.doughs)
					return obj;
			});

			if (findItem) {
				findItem.count -= 1;
				const data: string | null = localStorage.getItem(findItem.title);
				const localItem: TcartItem = data ? JSON.parse(data) : findItem;
				localItem.currentTotalCount = findItem.count;
				localStorage.setItem(findItem.title, JSON.stringify(localItem));
			}

			state.totalPrice -= payload.price;
			state.totalCount -= 1;
		},

		removePizzaFromCart(state, { payload }: PayloadAction<TcartItem>): void {
			state.items = state.items.filter((obj): object | undefined => {
				if (obj.id === payload.id && obj.sizes === payload.sizes && obj.doughs === payload.doughs) {
					// no practical use of it just for fun
					const time = new Date();
					console.log(`${obj.title} was removed from cart ${time.getHours()}:${time.getMinutes()}`);
				} else return obj;
			});

			state.totalPrice -= payload.price * payload.count;
			state.totalCount -= payload.count;
		},

		clearCart(state) {
			state.items = [];
			state.totalPrice = 0;
			state.totalCount = 0;
			localStorage.clear();
		},
	},
});

export const { addPizzaToCart, decrementPizzaCount, removePizzaFromCart, clearCart } =
	cartSlice.actions;

export default cartSlice.reducer;

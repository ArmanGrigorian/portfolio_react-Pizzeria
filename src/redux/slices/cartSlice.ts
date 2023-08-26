import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type TcartItem = {
	id: string;
	title: string;
	price: number;
	imgSrc: string;
	imgAlt: string;
	sizes: string;
	doughs: string;
	count: number;
};

interface IinitialState {
	totalPrice: number;
	totalCount: number;
	items: TcartItem[];
}

const initialState: IinitialState = {
	totalPrice: 0,
	totalCount: 0,
	items: [],
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

			state.totalPrice = state.items.reduce((sum: number, obj): number => {
				return obj.count * obj.price + sum;
			}, 0);

			state.totalCount = state.items.reduce((sum: number, obj): number => {
				return obj.count + sum;
			}, 0);
		},

		decrementPizzaCount(state, { payload }: PayloadAction<TcartItem>): void {
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
		},
	},
});

export const { addPizzaToCart, decrementPizzaCount, removePizzaFromCart, clearCart } =
	cartSlice.actions;

export default cartSlice.reducer;

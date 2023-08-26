import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPizzasByUrl = createAsyncThunk(
	"pizza/fetchByUrlStatus",
	async ({ url }: { url: string }): Promise<object> => {
		const { data }: { data: Tpizzas[] } = await axios.get(url);

		return data;
	},
);

export enum Status {
	LOADING = "loading",
	PENDING = "pending",
	FULFILLED = "fulfilled",
	REJECTED = "rejected",
}

export type Tpizzas = {
	id: string;
	sizes: string[];
	doughs: string[];
	imgSrc: string;
	imgAlt: string;
	title: string;
	price: number;
};

interface IinitialStatePizza {
	initialUrl: string;
	url: string;
	currentPage: number;
	status: Status;
	isLoading: boolean;
	pizzas: object | Tpizzas[];
	activeCategory: string;
	sortBy: string;
	inputValue: string;
	searchValue: string;
}

const initialState: IinitialStatePizza = {
	initialUrl: `https://64d772272a017531bc134033.mockapi.io/pizzas?page=`,
	url: `https://64d772272a017531bc134033.mockapi.io/pizzas?page=1&limit=8&`,
	currentPage: 1,
	status: Status.LOADING,
	isLoading: true,
	pizzas: [],
	activeCategory: "all",
	sortBy: "rating (high > low)",
	inputValue: "",
	searchValue: "",
};

export const pizzaSlice = createSlice({
	name: "pizza",

	initialState,

	reducers: {
		setUrl(state, { payload }: PayloadAction<string>): void {
			state.url = payload;
		},

		setCurrentPage(state, { payload }: PayloadAction<number>): void {
			state.currentPage = payload;
		},

		setActiveCategory(state, { payload }: PayloadAction<string>): void {
			state.activeCategory = payload;
		},

		setSortBy(state, { payload }: PayloadAction<string>): void {
			state.sortBy = payload;
		},

		setInputValue(state, { payload }: PayloadAction<string>): void {
			state.inputValue = payload;
		},

		setSearchValue(state, { payload }: PayloadAction<string>): void {
			state.searchValue = payload;
		},
	},

	extraReducers: (builder) => {
		builder
			.addCase(fetchPizzasByUrl.pending, (state) => {
				state.status = Status.PENDING;
				state.isLoading = true;
				state.pizzas = [];
			})
			.addCase(fetchPizzasByUrl.fulfilled, (state, { payload }) => {
				state.status = Status.FULFILLED;
				state.isLoading = false;
				state.pizzas = payload;
			})
			.addCase(fetchPizzasByUrl.rejected, (state) => {
				state.status = Status.REJECTED;
				state.isLoading = false;
				state.pizzas = [];
			});
	},
});

export const {
	setUrl,
	setCurrentPage,
	setSortBy,
	setActiveCategory,
	setInputValue,
	setSearchValue,
} = pizzaSlice.actions;

export default pizzaSlice.reducer;

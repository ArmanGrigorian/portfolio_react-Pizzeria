import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPizzasByUrl = createAsyncThunk("pizza/fetchByUrlStatus", async ({ url }) => {
	const { data } = await axios.get(url);

	return data;
});

const initialState = {
	initialUrl: `https://64d772272a017531bc134033.mockapi.io/pizzas?page=`,
	url: `https://64d772272a017531bc134033.mockapi.io/pizzas?page=1&limit=8&`,
	currentPage: 1,
	status: "loading",
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
		setUrl(state, { payload }): void {
			state.url = payload;
		},

		setCurrentPage(state, { payload }): void {
			state.currentPage = payload;
		},

		setActiveCategory(state, { payload }): void {
			state.activeCategory = payload;
		},

		setSortBy(state, { payload }): void {
			state.sortBy = payload;
		},

		setInputValue(state, { payload }): void {
			state.inputValue = payload;
		},

		setSearchValue(state, { payload }): void {
			state.searchValue = payload;
		},
	},

	extraReducers: (builder) => {
		builder
			.addCase(fetchPizzasByUrl.pending, (state) => {
				state.status = "pending";
				state.isLoading = true;
				state.pizzas = [];
			})
			.addCase(fetchPizzasByUrl.fulfilled, (state, { payload }) => {
				state.status = "fulfilled";
				state.isLoading = false;
				state.pizzas = payload;
			})
			.addCase(fetchPizzasByUrl.rejected, (state) => {
				state.status = "rejected";
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

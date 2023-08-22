import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPizzasByUrl = createAsyncThunk("pizza/fetchByUrlStatus", async ({ url }, thunkApi) => {
	const { data } = await axios.get(url);

	console.log(thunkApi);
	
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
		setUrl(state, { payload }) {
			state.url = payload;
		},

		setCurrentPage(state, { payload }) {
			state.currentPage = payload;
		},

		setActiveCategory(state, { payload }) {
			state.activeCategory = payload;
		},

		setSortBy(state, { payload }) {
			state.sortBy = payload;
		},

		setInputValue(state, { payload }) {
			state.inputValue = payload;
		},

		setSearchValue(state, { payload }) {
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

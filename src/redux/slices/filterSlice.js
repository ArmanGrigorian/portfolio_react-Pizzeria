import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	activeCategory: "all",
	sortBy: "rating (high > low)",
	inputValue: "",
	searchValue: "",
	currentPage: 1,
	url: `https://64d772272a017531bc134033.mockapi.io/pizzas?page=1&limit=8&`,
};

export const filterSlice = createSlice({
	name: "filter",

	initialState,

	reducers: {
		setActiveCategory(state, {payload}) {
			state.activeCategory = payload;
        },
        
		setSortBy(state, {payload}){
			state.sortBy = payload;
		},

		setInputValue(state, {payload}) {
			state.inputValue = payload;
		},
		
		setSearchValue(state, {payload}) {
			state.searchValue = payload;
		},

		setCurrentPage(state, {payload}) {
			state.currentPage = payload;
		},

		setUrl(state, {payload}) {
			state.url = payload;
		},
	},
});


export const { setActiveCategory, setSortBy, setInputValue, setSearchValue, setCurrentPage, setUrl } = filterSlice.actions;

export default filterSlice.reducer;

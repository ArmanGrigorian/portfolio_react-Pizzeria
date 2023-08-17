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
		setActiveCategory(state, action) {
			state.activeCategory = action.payload;
        },
        
		setSortBy(state, action){
			state.sortBy = action.payload;
		},

		setInputValue(state, action) {
			state.inputValue = action.payload;
		},
		
		setSearchValue(state, action) {
			state.searchValue = action.payload;
		},

		setCurrentPage(state, action) {
			state.currentPage = action.payload;
		},

		setUrl(state, action) {
			state.url = action.payload;
		},
	},
});


export const { setActiveCategory, setSortBy, setInputValue, setSearchValue, setCurrentPage, setUrl } = filterSlice.actions;

export default filterSlice.reducer;

import React from "react";
import "./SearchBar.scss";
import { FcSearch } from "react-icons/Fc";

const SearchBar: React.FC<{
	inputValue: string;
	handleSearch: (e: React.ChangeEvent)=>string,
}> = ({ inputValue, handleSearch }) => {
	return (
		<div className="searchBar">
			<input
				type="search"
				name="searchPizza"
				placeholder="looking for something"
				className="searchPizza"
				id="searchPizza"
				value={inputValue}
				onChange={(e) => handleSearch(e)}
			/>
			<FcSearch />
		</div>
	);
};


export default SearchBar;
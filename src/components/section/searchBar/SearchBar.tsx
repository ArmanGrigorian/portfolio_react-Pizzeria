import React from "react";
import "./SearchBar.scss";
import { FcSearch } from "react-icons/Fc";

type TsearchBarProps = {
	inputValue: string;
	handleSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const SearchBar: React.FC<TsearchBarProps> = ({ inputValue, handleSearch }): JSX.Element => {
	return (
		<div className="searchBar">
			<input
				type="search"
				name="searchPizza"
				placeholder="looking for something"
				className="searchPizza"
				id="searchPizza"
				value={inputValue}
				onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleSearch(e)}
			/>
			<FcSearch />
		</div>
	);
};

export default SearchBar;

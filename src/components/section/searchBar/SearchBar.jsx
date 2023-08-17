import "./SearchBar.scss";
import PropTypes from "prop-types";
import { FcSearch } from "react-icons/Fc";

export default function SearchBar({inputValue, onChangeInput}) {

	return (
		<div className="searchBar">
			<input
				type="search"
				name="searchPizza"
				placeholder="looking for something"
				className="searchPizza"
				id="searchPizza"
				value={inputValue}
				onChange={(e) => onChangeInput(e)}
			/>
			<FcSearch />
		</div>
	);
}

SearchBar.propTypes = {
	inputValue: PropTypes.string,
	onChangeInput: PropTypes.func,
}

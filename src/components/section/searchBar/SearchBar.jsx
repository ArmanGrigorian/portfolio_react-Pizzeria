import "./SearchBar.scss";
import { FcSearch } from "react-icons/Fc";

export default function SearchBar() {
	return (
		<div className="searchBar">
			<input
				type="search"
				name="searchPizza"
				placeholder="looking for something"
				className="searchPizza"
				id="searchPizza"
			/>
			<FcSearch />
		</div>
	);
}

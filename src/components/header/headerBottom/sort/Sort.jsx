import "./Sort.scss";
import PropTypes from "prop-types";

export default function Sort({sortBy, handleSelect}) {
	const sortCategories = ["rating", "price", "title"];

	return (
		<div className="sort">
			<p>Sort by:</p>
			<select name="sortBy" id="sortBy" value={sortBy} onChange={(e) => handleSelect(e)}>
				{sortCategories &&
					sortCategories.map((category) => {
						return (
							<option key={crypto.randomUUID()} value={category}>
								{category}
							</option>
						);
					})}
			</select>
		</div>
	);
}

Sort.propTypes = {
	sortBy: PropTypes.string,
	handleSelect: PropTypes.func,
}
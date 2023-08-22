import "./Sort.scss";
import PropTypes from "prop-types";

export default function Sort({sortBy, handleGetSelect}) {
	const sortCategories = [
		"rating (high > low)",
		"rating (low > high)",
		"price (high > low)",
		"price (low > high)",
		"title (A - Z)",
		"title (Z - A)",
	];

	return (
		<div className="sort">
			<p>Sort by:</p>
			<select name="sortBy" id="sortBy" value={sortBy} onChange={(e) => handleGetSelect(e)}>
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
	handleGetSelect: PropTypes.func,
}
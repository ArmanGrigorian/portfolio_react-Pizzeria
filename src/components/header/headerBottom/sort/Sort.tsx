import React from "react";
import "./Sort.scss";

const Sort: React.FC<{
	sortBy: string,
	handleGetSelect: (e: React.ChangeEvent)=>string,
}> = ({ sortBy, handleGetSelect }) => {
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
};

export default Sort;

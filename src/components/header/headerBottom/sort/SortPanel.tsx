import React from "react";
import "./SortPanel.scss";

type SortPanelProps = {
	sortBy: string;
	handleGetSelect: (e: React.ChangeEvent) => void;
};

const SortPanel: React.FC<SortPanelProps> = ({ sortBy, handleGetSelect }): JSX.Element => {
	const sortCategories: string[] = [
		"rating (high > low)",
		"rating (low > high)",
		"price (high > low)",
		"price (low > high)",
		"title (A - Z)",
		"title (Z - A)",
	];

	return (
		<div className="sortPanel">
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

export default SortPanel;

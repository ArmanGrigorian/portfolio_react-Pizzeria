import "./Sort.scss";


export default function Sort() {
	const sortCategories = ["rating", "price", "title"];



	return (
		<div className="sort">
			<p>Sort by:</p>
			<select name="sortBy" id="sortBy">
				{sortCategories && sortCategories.map((category) => {
					return (
						<option key={crypto.randomUUID()} value={category}>{category}</option>
					)
				})}
			</select>
		</div>
	);
}

import "./Sort.scss";

export default function Sort() {
  return (
		<div className="sort">
			<p>Sort by:</p>
			<select name="sortBy" id="sortBy">
				<option value="rating">rating</option>
				<option value="price">price</option>
				<option value="name">name</option>
			</select>
		</div>
	);
}

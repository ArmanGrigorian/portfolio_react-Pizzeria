import "./HeaderBottom.scss";

export default function HeaderBottom() {
	return (
		<div className="headerBottom">
			<nav>
				<ul>
					<li>All</li>
					<li>Meat</li>
					<li>Vegetarian</li>
					<li>Grill</li>
					<li>Spicy</li>
				</ul>
			</nav>

			<div className="headerBottomRight">
				<p>Sort by:</p>
				<select name="sortBy" id="sortBy">
					<option value="rating">rating</option>
					<option value="price">price</option>
					<option value="name">name</option>
				</select>
			</div>
		</div>
	);
}

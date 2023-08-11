import "./Categories.scss";
import { useState } from "react";

export default function Categories() {
	const categories = ["All", "Meat", "Spicy"];
	const [activeCategory, setActiveCategory] = useState(0);

	function handleClick(e) {
		switch (e.target.dataset.category) {
			case "all":
				setActiveCategory(e.target.dataset.category);
				break;
			case "meat":
				setActiveCategory(e.target.dataset.category);
				break;
			case "spicy":
				setActiveCategory(e.target.dataset.category);
				break;
			default:
				break;
		}
	}

	return (
		<nav className="Categories">
			<ul onClick={(e) => handleClick(e)}>
				{categories &&
					categories.map((category) => {
						return (
							<li
								key={crypto.randomUUID()}
								data-category={category.toLowerCase()}
								className={activeCategory === category.toLowerCase() ? "active" : ""}>
								{category}
							</li>
						);
					})}
			</ul>
		</nav>
	);
}

import "./Categories.scss";
import { useState } from "react";

export default function Categories() {
	const categories = ["All", "Meat", "Spicy"];
	const [activeCategory, setActiveCategory] = useState(0);

	function handleSetCategory(e) {
		if (categories.some((category) => category.toLowerCase() === e.target.dataset.category)) {
			setActiveCategory(e.target.dataset.category);
		} else return;
	}

	return (
		<nav className="Categories">
			<ul onClick={(e) => handleSetCategory(e)}>
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

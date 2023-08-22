import React from "react";
import "./Categories.scss";

const Categories: React.FC<{
	categories: string[];
	activeCategory: string;
	handleGetCategory: (e: React.MouseEvent) => string;
}> = ({ categories, activeCategory, handleGetCategory }) => {
	return (
		<nav className="categories">
			<ul onClick={(e) => handleGetCategory(e)}>
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
};

export default Categories;
import React from "react";
import "./CategoriesPanel.scss";

type CategoriesPanelProps = {
	categories: string[];
	activeCategory: string;
	handleGetCategory: (e: React.MouseEvent) => void;
};

const CategoriesPanel: React.FC<CategoriesPanelProps> = ({ categories, activeCategory, handleGetCategory }): JSX.Element => {
	return (
		<nav className="categoriesPanel">
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

export default CategoriesPanel;

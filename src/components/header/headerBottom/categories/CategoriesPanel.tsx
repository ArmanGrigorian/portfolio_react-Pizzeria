import React from "react";
import "./CategoriesPanel.scss";

type TcategoriesPanelProps = {
	categories: string[];
	activeCategory: string;
	handleGetCategory: (e: React.MouseEvent<HTMLLIElement>) => void;
};

const CategoriesPanel: React.FC<TcategoriesPanelProps> = ({ categories, activeCategory, handleGetCategory }): JSX.Element => {
	return (
		<nav className="categoriesPanel">
			<ul>
				{categories &&
					categories.map((category) => {
						return (
							<li
								key={crypto.randomUUID()}
								onClick={(e) => handleGetCategory(e)}
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

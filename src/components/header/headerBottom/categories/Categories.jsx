import "./Categories.scss";
import PropTypes from "prop-types";

export default function Categories({ categories, activeCategory, handleSetCategory }) {

	return (
		<nav className="categories">
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

Categories.propTypes = {
	categories: PropTypes.arrayOf(PropTypes.string),
	activeCategory: PropTypes.string,
	handleSetCategory: PropTypes.func,
};

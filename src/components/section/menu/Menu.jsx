import "./Menu.scss";
import PropTypes from "prop-types";
import PizzaBlock from "../pizzaBlock/PizzaBlock";
import PizzaBlockPlaceholder from "../pizzaBlock/PizzaBlockPlaceholder.jsx";
import SearchBar from "../searchBar/SearchBar";


export default function Menu({pizzas, isLoading,}) {
	
	return (
		<>
			<div className="sectionTop">
				<h1>{isLoading ? "Loading" : "All"}</h1>
				<SearchBar/>
			</div>

			<div className="menu">
				{isLoading
					? [...new Array(8)].map(() => <PizzaBlockPlaceholder key={crypto.randomUUID()} />)
					: pizzas.map((pizza) => <PizzaBlock key={crypto.randomUUID()} {...pizza} />)}
			</div>
		</>
	);
}

Menu.propTypes = {
	pizzas: PropTypes.arrayOf(PropTypes.object),
	isLoading: PropTypes.bool,
};

import "./Menu.scss";
import PropTypes from "prop-types";
import PizzaCard from "../pizza/pizzaCard/PizzaCard.jsx";
import PizzaCardPlaceholder from "../pizza/PizzaCardPlaceholder.jsx";

export default function Menu({ pizzas, isLoading }) {
	return (
		<>
			<div className="menu">
				{isLoading
					? [...new Array(4)].map(() => <PizzaCardPlaceholder key={crypto.randomUUID()} />)
					: pizzas.map((pizza) => <PizzaCard key={crypto.randomUUID()} {...pizza} />)}
			</div>
		</>
	);
}

Menu.propTypes = {
	pizzas: PropTypes.arrayOf(PropTypes.object),
	isLoading: PropTypes.bool,
};

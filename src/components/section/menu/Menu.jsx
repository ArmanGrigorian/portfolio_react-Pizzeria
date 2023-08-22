import "./Menu.scss";
import PropTypes from "prop-types";
import PizzaCard from "../pizza/pizzaCard/PizzaCard.jsx";
import PizzaCardPlaceholder from "../pizza/PizzaCardPlaceholder.jsx";
import { Link } from "react-router-dom";

export default function Menu({ pizzas, isLoading }) {
	return (
		<>
			<div className="menu">
				{isLoading
					? [...new Array(4)].map(() => <PizzaCardPlaceholder key={crypto.randomUUID()} />)
					: pizzas.map((pizza) => (
							<Link to={`/pizzaPage/${pizza.id}`} key={crypto.randomUUID()}>
								<PizzaCard {...pizza} />
							</Link>
							// eslint-disable-next-line no-mixed-spaces-and-tabs
					  ))}
			</div>
		</>
	);
}

Menu.propTypes = {
	pizzas: PropTypes.arrayOf(PropTypes.object),
	isLoading: PropTypes.bool,
};

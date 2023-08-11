import "./Menu.scss";
import { PIZZAS } from "../../../DATA/pizzas.js";
import PizzaBlock from "../pizzaBlock/PizzaBlock";

export default function Menu() {
	return (
		<>
			<h2>All</h2>

			<div className="menu">
				{PIZZAS &&
					PIZZAS.map((pizza) => {
						return (
							<PizzaBlock key={crypto.randomUUID()} {...pizza} />
						);
					})}
			</div>
		</>
	);
}





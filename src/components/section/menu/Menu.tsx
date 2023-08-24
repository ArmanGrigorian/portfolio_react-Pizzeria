import React from "react";
import "./Menu.scss";
import PizzaCard from "../pizza/pizzaCard/PizzaCard.tsx";
import PizzaCardPlaceholder from "../pizza/PizzaCardPlaceholder.tsx";
import { Tpizzas } from "../../../redux/slices/pizzaSlice.ts";

type MenuProps = {
	pizzas: Tpizzas[];
	isLoading: boolean;
};

const Menu: React.FC<MenuProps> = ({ pizzas, isLoading }): JSX.Element => {
	return (
		<>
			<div className="menu">
				{isLoading
					? [...new Array(4)].map(() => <PizzaCardPlaceholder key={crypto.randomUUID()} />)
					: pizzas.map((pizza: Tpizzas): JSX.Element => {
							return <PizzaCard key={crypto.randomUUID()} info={pizza} />;
					  })}
			</div>
		</>
	);
};

export default Menu;

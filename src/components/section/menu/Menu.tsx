import React from "react";
import "./Menu.scss";
import { PizzaCard, PizzaCardPlaceholder } from "../../index.ts";
import { Tpizzas } from "../../../redux/slices/pizzas/types.ts";

type TmenuProps = {
	pizzas: Tpizzas[];
	isLoading: boolean;
};

const Menu: React.FC<TmenuProps> = ({ pizzas, isLoading }): JSX.Element => {
	return (
		<>
			<div className="menu">
				{isLoading
					? [...new Array(4)].map(() => <PizzaCardPlaceholder key={crypto.randomUUID()} />)
					: pizzas.map(
							(pizza: Tpizzas): JSX.Element => <PizzaCard key={crypto.randomUUID()} info={pizza} />,
							// eslint-disable-next-line no-mixed-spaces-and-tabs
					  )}
			</div>
		</>
	);
};

export default Menu;

import React from "react";
import "./Menu.scss";
import PizzaCard from "../pizza/pizzaCard/PizzaCard.tsx";
import PizzaCardPlaceholder from "../pizza/PizzaCardPlaceholder.tsx";

type MenuProps = {
	pizzas: object[];
	isLoading: boolean;
};

type Pizza = {
	id: string;
	sizes: string[];
	doughs: string[];
	imgSrc: string;
	imgAlt: string;
	title: string;
	price: number;
};

const Menu: React.FC<MenuProps> = ({ pizzas, isLoading }): JSX.Element => {
	return (
		<>
			<div className="menu">
				{isLoading
					? [...new Array(4)].map(() => <PizzaCardPlaceholder key={crypto.randomUUID()} />)
					: pizzas.map(
							(pizza: Pizza): JSX.Element => {
								return (
									<PizzaCard
										key={crypto.randomUUID()}
										id={pizza.id}
										sizes={pizza.sizes}
										doughs={pizza.doughs}
										imgSrc={pizza.imgSrc}
										imgAlt={pizza.imgAlt}
										title={pizza.title}
										price={pizza.price}
									/>
								);
							},
							// eslint-disable-next-line no-mixed-spaces-and-tabs
					  )}
			</div>
		</>
	);
};

export default Menu;

import "./Menu.scss";
import PizzaBlock from "../pizzaBlock/PizzaBlock";
import { useEffect, useState } from "react";
import PizzaBlockPlaceholder from "../pizzaBlock/PizzaBlockPlaceholder.jsx";

export default function Menu() {
	const [pizzas, setPizzas] = useState([]);
	const [isLoading, setisLoading] = useState(true);

	useEffect(() => {
		fetch("https://64d772272a017531bc134033.mockapi.io/pizzas")
			.then((response) => response.json())
			.then((data) => {
				setPizzas(data);
				
				// fake remaining
				setTimeout(() => {
					setisLoading(false);
				}, 100);
			});
	}, []);

	return (
		<>
			<h1>{isLoading ? "Loading" : "All"}</h1>

			<div className="menu">
				{isLoading
					? [...new Array(4)].map(() => <PizzaBlockPlaceholder key={crypto.randomUUID()} />)
					: pizzas.map((pizza) => {
							return <PizzaBlock key={crypto.randomUUID()} {...pizza} />;
					})
				}
			</div>
		</>
	);
}

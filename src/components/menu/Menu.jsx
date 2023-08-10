import "./Menu.scss";
import { PIZZAS } from "../../DATA/pizzas.js";

export default function Menu() {
	return (
		<>
			<h2>All</h2>

			<div className="menu">
				{PIZZAS &&
					PIZZAS.map((pizza) => {
						return (
							<div key={crypto.randomUUID()} className="pizzaItem">
								<img src={pizza.imgSrc} alt={pizza.imgAlt} />

								<h4>{pizza.title}</h4>

								<div className="selector">
									<ul>
										<li className="active">thin</li>
										<li>classic</li>
									</ul>

									<ul>
										<li className="active">26 sm</li>
										<li>30 sm</li>
										<li>40 sm</li>
									</ul>
								</div>

								<div className="pizzaItemBottom">
									<p>from {pizza.price} $</p>

									<div className="addButton">
										<p>+ Add</p>
									</div>
								</div>
							</div>
						);
					})}
			</div>
		</>
	);
}

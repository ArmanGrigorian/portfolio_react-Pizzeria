import { useState } from "react";
import "./PizzaBlock.scss";
import PropTypes from "prop-types";

export default function PizzaBlock({ sizes, doughs, imgSrc, imgAlt, title, price }) {
	const [pizzaSize, setPizzaSize] = useState("");
	const [pizzaDough, setPizzaDough] = useState("");

	function handleSetPizzaInfo(e, arr) {
		switch (arr) {
			case sizes:
				if (sizes.some((size) => size === e.target.dataset.size)) {
					setPizzaSize(e.target.dataset.size);
				} else return;
				break;
			case doughs:
				if (doughs.some((dough) => dough === e.target.dataset.dough)) {
					setPizzaDough(e.target.dataset.dough);
				} else return;
				break;
			default:
				break;
		}
	}

	return (
		<div className="pizzaBlock">
			<img src={imgSrc} alt={imgAlt} />

			<h4>{title}</h4>

			<div className="selector">
				<ul
					onClick={(e) => {
						handleSetPizzaInfo(e, doughs);
					}}>
					{doughs &&
						doughs.map((dough) => {
							return (
								<li
									key={crypto.randomUUID()}
									data-dough={dough}
									className={pizzaDough === dough ? "active" : ""}>
									{dough}
								</li>
							);
						})}
				</ul>

				<ul onClick={(e) => handleSetPizzaInfo(e, sizes)}>
					{sizes &&
						sizes.map((size) => {
							return (
								<li
									key={crypto.randomUUID()}
									data-size={size}
									className={pizzaSize === size ? "active" : ""}>
									{size} sm
								</li>
							);
						})}
				</ul>
			</div>

			<div className="pizzaBlockBottom">
				<p>from {price} $</p>

				<button type="button" className="addButton">
					<p>+ Add</p>
					<p>0</p>
				</button>
			</div>
		</div>
	);
}

PizzaBlock.propTypes = {
	sizes: PropTypes.arrayOf(PropTypes.string),
	doughs: PropTypes.arrayOf(PropTypes.string),
	imgSrc: PropTypes.string,
	imgAlt: PropTypes.string,
	title: PropTypes.string,
	price: PropTypes.number,
};

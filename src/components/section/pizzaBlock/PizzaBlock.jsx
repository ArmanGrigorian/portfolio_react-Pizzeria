import { useState } from "react";
import "./PizzaBlock.scss";
import PropTypes from "prop-types";

export default function PizzaBlock({ info }) {
	const [pizzaSize, setPizzaSize] = useState("");
	const [pizzaDough, setPizzaDough] = useState("");

	function handleSetPizzaInfo(e, arr) {
		switch (arr) {
			case info.sizes:
				if (info.sizes.some((size) => size === e.target.dataset.size)) {
					setPizzaSize(e.target.dataset.size);
				} else return;
				break;
			case info.doughs:
				if (info.doughs.some((dough) => dough === e.target.dataset.dough)) {
					setPizzaDough(e.target.dataset.dough);
				} else return;
				break;
			default:
				break;
		}
	}

	return (
		<div className="pizzaBlock">
			<img src={info.imgSrc} alt={info.imgAlt} />

			<h4>{info.title}</h4>

			<div className="selector">
				<ul
					onClick={(e) => {
						handleSetPizzaInfo(e, info.doughs);
					}}>
					{info.doughs &&
						info.doughs.map((dough) => {
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

				<ul onClick={(e) => handleSetPizzaInfo(e, info.sizes)}>
					{info.sizes &&
						info.sizes.map((size) => {
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
				<p>from {info.price} $</p>

				<button type="button" className="addButton">
					<p>+ Add</p>
					<p>0</p>
				</button>
			</div>
		</div>
	);
}

PizzaBlock.propTypes = {
	info: PropTypes.object,
};

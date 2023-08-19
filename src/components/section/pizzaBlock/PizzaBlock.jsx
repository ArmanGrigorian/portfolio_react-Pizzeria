import { useState } from "react";
import "./PizzaBlock.scss";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { addPizzaToCart } from "../../../redux/slices/cartSlice";

export default function PizzaBlock({id, sizes, doughs, imgSrc, imgAlt, title, price }) {	
	const dispatch = useDispatch();
	
	const [pizzaSize, setPizzaSize] = useState(sizes[0]);
	const [pizzaDough, setPizzaDough] = useState(doughs[0]);
	const [pizzaCount, setPizzaCount] = useState(0);


	function handleAddPizzaToCart() {
		const item = {
			id,
			title,
			price,
			imgSrc,
			imgAlt,
			sizes: pizzaSize,
			doughs: pizzaDough,
			count: 1,
		};
		dispatch(addPizzaToCart(item))
		setPizzaCount((prevPizzaCount)=> prevPizzaCount += 1)
	}


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

			<h3>{title}</h3>

			<div className="selector">
				<ul
					onClick={(e) => {
						handleSetPizzaInfo(e, doughs);
					}}>
					{doughs.map((dough) => {
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
					{sizes.map((size) => {
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
				<p>price: {price} $</p>

				<button type="button" className="addButton" onClick={handleAddPizzaToCart}>
					<p>+ Add</p>
					<p>{pizzaCount}</p>
				</button>
			</div>
		</div>
	);
}

PizzaBlock.propTypes = {
	id: PropTypes.string,
	sizes: PropTypes.arrayOf(PropTypes.string),
	doughs: PropTypes.arrayOf(PropTypes.string),
	imgSrc: PropTypes.string,
	imgAlt: PropTypes.string,
	title: PropTypes.string,
	price: PropTypes.number,
};

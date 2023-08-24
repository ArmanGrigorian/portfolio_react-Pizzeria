import React from "react";
import "./PizzaCard.scss";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addPizzaToCart } from "../../../../redux/slices/cartSlice.ts";
import { Tpizzas } from "../../../../redux/slices/pizzaSlice.ts";

interface PizzaCardProps {
	info: Tpizzas;
}

interface Iitem {
	id: string;
	title: string;
	price: number;
	imgSrc: string;
	imgAlt: string;
	sizes: string;
	doughs: string;
	count: number;
}

const PizzaCard: React.FC<PizzaCardProps> = ({ info }): JSX.Element => {
	const { id, sizes, doughs, imgSrc, imgAlt, title, price } = info;
	
	const dispatch = useDispatch();

	const [pizzaSize, setPizzaSize] = useState<string>(sizes[0]);
	const [pizzaDough, setPizzaDough] = useState<string>(doughs[0]);
	const [pizzaCount, setPizzaCount] = useState<number>(0);

	function handleAddPizzaToCart(): void {
		const item: Iitem = {
			id,
			title,
			price,
			imgSrc,
			imgAlt,
			sizes: pizzaSize,
			doughs: pizzaDough,
			count: 1,
		};
		dispatch(addPizzaToCart(item));
		setPizzaCount((prevPizzaCount) => (prevPizzaCount += 1));
	}

	function handleSetPizzaInfo(e: React.MouseEvent<Element, MouseEvent>, arr: string[]): void {
		switch (arr) {
			case sizes:
				if (sizes.some((size: string) => size === e.target.dataset.size)) {
					setPizzaSize(e.target.dataset.size);
				} else return;
				break;
			case doughs:
				if (doughs.some((dough: string) => dough === e.target.dataset.dough)) {
					setPizzaDough(e.target.dataset.dough);
				} else return;
				break;
			default:
				break;
		}
	}

	return (
		<div className="pizzaCard">
			<Link to={`/pizzaPage/${id}`}>
				<img src={imgSrc} alt={imgAlt} />
			</Link>

			<h3>{title}</h3>

			<div className="selector">
				<ul
					onClick={(e: React.MouseEvent) => {
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

				<ul onClick={(e: React.MouseEvent) => handleSetPizzaInfo(e, sizes)}>
					{sizes.map((size: string) => {
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

			<div className="pizzaCardBottom">
				<p>price: {price} $</p>

				<button type="button" className="addButton" onClick={handleAddPizzaToCart}>
					<p>+ Add</p>
					<p>{pizzaCount}</p>
				</button>
			</div>
		</div>
	);
};

export default PizzaCard;

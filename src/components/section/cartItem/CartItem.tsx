import React from "react";
import "./CartItem.scss";
import {
	addPizzaToCart,
	decrementPizzaCount,
	removePizzaFromCart,
} from "../../../redux/slices/cartSlice.ts";
import { useDispatch } from "react-redux";

const CartItem: React.FC<{
	id: string;
	title: string;
	imgSrc: string;
	imgAlt: string;
	doughs: string[];
	sizes: string[];
	price: number;
	count: number;
}> = ({ id, imgSrc, imgAlt, title, price, sizes, doughs, count }): JSX.Element => {
	const dispatch = useDispatch();

	function handleClick(e): void {
		switch (e.target.name) {
			case "incrementButton":
				dispatch(addPizzaToCart({ id, sizes, doughs }));
				break;
			case "decrementButton":
				dispatch(decrementPizzaCount({ id, sizes, doughs, price, count }));
				break;
			case "removeButton":
				if (confirm(`remove ${title} from your cart`)) {
					dispatch(removePizzaFromCart({ id, title, sizes, doughs, price, count }));
				}
				break;
			default:
				break;
		}
	}

	return (
		<div className="cartItem" onClick={(e) => handleClick(e)}>
			<div>
				<img src={imgSrc} alt={imgAlt} />
				<div>
					<h4>{title}</h4>
					<p>
						{doughs}, {sizes}sm.
					</p>
				</div>
			</div>

			<div>
				<button type="button" name="decrementButton">
					-
				</button>
				<p>{count}</p>
				<button type="button" name="incrementButton">
					+
				</button>
			</div>

			<p> {Number(price) * Number(count)} $</p>

			<button type="button" className="removeButton" name="removeButton">
				X
			</button>
		</div>
	);
};

export default CartItem;

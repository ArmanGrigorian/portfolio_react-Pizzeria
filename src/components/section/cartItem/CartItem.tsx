import React from "react";
import "./CartItem.scss";
import {
	addPizzaToCart,
	decrementPizzaCount,
	removePizzaFromCart,
} from "../../../redux/slices/cartSlice.ts";
import { useAppDispatch } from "../../../redux/store.ts";
import { TcartItem } from "../../../redux/slices/cartSlice.ts";

type TcartItemProps = {
	info: TcartItem;
};

const CartItem: React.FC<TcartItemProps> = ({ info }): JSX.Element => {
	const { id, sizes, doughs, price, count, title, imgSrc, imgAlt } = info;
	const appDispatch = useAppDispatch();

	function handleClick(e: React.MouseEvent<HTMLDivElement, MouseEvent>): void {
		const target = e.target as HTMLButtonElement;

		switch (target.name) {
			case "incrementButton":
				appDispatch(
					addPizzaToCart({
						id,
						sizes,
						doughs,
						title,
						price,
						imgSrc,
						imgAlt,
						count,
					}),
				);
				break;
			case "decrementButton":
				appDispatch(
					decrementPizzaCount({
						id,
						sizes,
						doughs,
						price,
						count,
						title,
						imgSrc,
						imgAlt,
					}),
				);
				break;
			case "removeButton":
				if (confirm(`remove ${title} from your cart`)) {
					appDispatch(
						removePizzaFromCart({
							id,
							title,
							sizes,
							doughs,
							price,
							count,
							imgSrc,
							imgAlt,
						}),
					);
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

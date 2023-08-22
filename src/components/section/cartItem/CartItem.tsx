import "./CartItem.scss";
import PropTypes from "prop-types";
import {
	addPizzaToCart,
	decrementPizzaCount,
	removePizzaFromCart,
} from "../../../redux/slices/cartSlice.ts";
import { useDispatch } from "react-redux";

export default function CartItem({ id, imgSrc, imgAlt, title, price, sizes, doughs, count }) {
	const dispatch = useDispatch();

	function handleClick(e) {
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
}

CartItem.propTypes = {
	id: PropTypes.string,
	imgSrc: PropTypes.string,
	imgAlt: PropTypes.string,
	title: PropTypes.string,
	price: PropTypes.number,
	sizes: PropTypes.string,
	doughs: PropTypes.string,
	count: PropTypes.number,
};

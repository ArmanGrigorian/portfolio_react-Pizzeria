import React from "react";
import "./Cart.scss";
import { Link } from "react-router-dom";
import { RiDeleteBinLine } from "react-icons/Ri";
import { IoIosArrowBack } from "react-icons/Io";
import CartItem from "../cartItem/CartItem.tsx";
import { clearCart } from "../../../redux/slices/cartSlice.ts";
import { useSelector, useDispatch } from "react-redux";

const Cart: React.FC = (): JSX.Element => {
	const dispatch = useDispatch();
	const { items, totalPrice, totalCount } = useSelector(
		(state: { cartSlice: { items: []; totalPrice: number; totalCount: number } }) =>
			state.cartSlice,
	);

	function handleClearCart(): void {
		if (confirm("CLEAR CART?")) {
			dispatch(clearCart());
		}
	}

	return (
		<>
			<div className="cart">
				{items.map(
					(pizza: {
						id: string;
						title: string;
						imgSrc: string;
						imgAlt: string;
						doughs: string[];
						sizes: string[];
						price: number;
						count: number;
					}) => {
						return (
							<CartItem
								key={crypto.randomUUID()}
								id={pizza.id}
								title={pizza.title}
								imgSrc={pizza.imgSrc}
								imgAlt={pizza.imgAlt}
								doughs={pizza.doughs}
								sizes={pizza.sizes}
								price={pizza.price}
								count={pizza.count}
							/>
						);
					},
				)}

				<div className="cartMid">
					<div>
						<p>Total count: {totalCount}</p>
						<p>Total price: {totalPrice}</p>
					</div>
					<button type="button" onClick={handleClearCart}>
						<RiDeleteBinLine />
						Clear cart
					</button>
				</div>

				<div className="cartBottom">
					<Link to="/">
						<button type="button">
							<IoIosArrowBack />
							Back
						</button>
					</Link>
					<button type="button">Order Now</button>
				</div>
			</div>
		</>
	);
};

export default Cart;

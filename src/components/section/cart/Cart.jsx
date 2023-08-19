import "./Cart.scss";
import { Link } from "react-router-dom";
import { RiDeleteBinLine } from "react-icons/Ri";
import { IoIosArrowBack } from "react-icons/Io";
import CartItem from "../cartItem/CartItem";
import { clearCart } from "../../../redux/slices/cartSlice.js";
import { useSelector, useDispatch } from "react-redux";

export default function Cart() {
	const dispatch = useDispatch();
	const { items, totalPrice, totalCount } = useSelector((state) => state.cartSlice);

	function handleClearCart() {
		if (confirm("CLEAR CART?")) {
			dispatch(clearCart());
		}
	}

	return (
		<>
			<div className="cart">
				{items.map((pizza) => {
					return <CartItem key={crypto.randomUUID()} {...pizza} />;
				})}

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
}

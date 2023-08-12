import "./Cart.scss";
import { CART } from "../../../DATA/cart.js";
import { Link } from "react-router-dom";
import { BsCart3 } from "react-icons/bs";
import { RiDeleteBinLine } from "react-icons/Ri";
import { IoIosArrowBack } from "react-icons/Io";
import CartItem from "../cartItem/CartItem";

export default function Cart() {
	return (
		<>
			<h1>
				<BsCart3 />
				Cart
			</h1>
			<div className="cart">
				{CART &&
					CART.map((pizza) => {
						return <CartItem key={crypto.randomUUID()} {...pizza} />;
					})}
				
				<div className="cartMid">
					<div>
						<p>Total count: 3</p>
						<p>Total price: 18</p>
					</div>
					<button type="button">
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

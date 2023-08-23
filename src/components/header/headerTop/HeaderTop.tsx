import React from "react";
import "./HeaderTop.scss";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const HeaderTop: React.FC = (): JSX.Element => {
	const { totalPrice, totalCount } = useSelector(
		(state: { cartSlice: { totalPrice: number; totalCount: number } }) => state.cartSlice,
	);

	return (
		<div className="headerTop">
			<Link to="/">
				<div className="headerTopLeft">
					<img src="/img/pizza.png" alt="pizza image" />
					<div>
						<h2>REACT PIZZA</h2>
						<p>The most delicious pizza in the universe</p>
					</div>
				</div>
			</Link>

			<Link to="/cartPage">
				<div className="headerTopRight">
					<p>{totalPrice} $</p>
					<div>
						<img src="/img/shoppingCart.png" alt="shopping cart image" />
						<p>{totalCount}</p>
					</div>
				</div>
			</Link>
		</div>
	);
};

export default HeaderTop;

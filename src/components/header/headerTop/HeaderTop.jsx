import "./HeaderTop.scss";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function HeaderTop() {

	const {totalPrice, totalCount } = useSelector(state => state.cartSlice);
	
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
}

import "./HeaderTop.scss";
import { Link } from "react-router-dom";

export default function HeaderTop() {
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
					<p>0 $</p>
					<div>
						<img src="/img/shoppingCart.png" alt="shopping cart image" />
						<p>0</p>
					</div>
				</div>
			</Link>
		</div>
	);
}

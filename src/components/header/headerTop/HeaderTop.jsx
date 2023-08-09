import "./HeaderTop.scss";

export default function HeaderTop() {
	return (
		<div className="headerTop">
			<div className="headerTopLeft">
				<img src="/img/pizza.png" alt="pizza image" />
				<div>
					<h1>REACT PIZZA</h1>
					<p>The most delicious pizza in the universe</p>
				</div>
			</div>

			<div className="headerTopRight">
				<p>0 $</p>
				<div>
					<img src="/img/shoppingCart.png" alt="shopping cart image" />
					<p>0</p>
				</div>
			</div>
		</div>
	);
}

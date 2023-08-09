import "./Header.scss";

export default function Header() {
	return (
		<header>
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

			<div className="headerBottom">
				<nav>
					<ul>
						<li>All</li>
						<li>Meat</li>
						<li>Vegetarian</li>
						<li>Grill</li>
						<li>Spicy</li>
					</ul>
				</nav>

				<div className="headerBottomRight">
					<p>Sort by:</p>
					<input list="pizzas" id="pizzasChoice" name="pizzasChoice" />
					<datalist id="pizzas">
						<option value="rating"></option>
						<option value="price"></option>
						<option value="name"></option>
					</datalist>
				</div>
			</div>
		</header>
	);
}

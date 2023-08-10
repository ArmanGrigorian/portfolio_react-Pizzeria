import "./Cart.scss";
import { CART } from "../../../DATA/cart.js";

export default function Cart() {
	return (
		<>
			<h2>Cart</h2>
			<div className="cart">
				{CART &&
					CART.map((pizza) => {
						return (
							<div key={crypto.randomUUID()} className="pizzaItem">
								<div>
									<img src={pizza.imgSrc} alt={pizza.imgAlt} />
									<div>
										<h4>{pizza.title}</h4>
										<p>thin, 26sm.</p>
									</div>
								</div>

								<div>
									<button type="button" name="decrementButton">
										-
									</button>
									<p>0</p>
									<button type="button" name="incrementButton">
										+
									</button>
								</div>

								<p> {pizza.price} $</p>

								<button type="button" className="removeButton">
									X
								</button>
							</div>
						);
					})}
			</div>
		</>
	);
}

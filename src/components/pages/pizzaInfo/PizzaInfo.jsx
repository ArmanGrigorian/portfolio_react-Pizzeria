export default function PizzaInfo() {
	return (
		<div className="pizza">
			{/* <img src={imgSrc} alt={imgAlt} />

			<h3>{title}</h3>

			<div className="selector">
				<ul
					onClick={(e) => {
						handleSetPizzaInfo(e, doughs);
					}}>
					{doughs.map((dough) => {
						return (
							<li
								key={crypto.randomUUID()}
								data-dough={dough}
								className={pizzaDough === dough ? "active" : ""}>
								{dough}
							</li>
						);
					})}
				</ul>

				<ul onClick={(e) => handleSetPizzaInfo(e, sizes)}>
					{sizes.map((size) => {
						return (
							<li
								key={crypto.randomUUID()}
								data-size={size}
								className={pizzaSize === size ? "active" : ""}>
								{size} sm
							</li>
						);
					})}
				</ul>
			</div>

			<div className="pizzaBlockBottom">
				<p>price: {price} $</p>

				<button type="button" className="addButton" onClick={handleAddPizzaToCart}>
					<p>+ Add</p>
					<p>{pizzaCount}</p>
				</button>
			</div> */}
		</div>
	);
}

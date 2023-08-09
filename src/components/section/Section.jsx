import "./Section.scss";

export default function Section() {
	return (
		<section>
			<h2>All</h2>

			<div className="pizzaItem">
				<img src="/img/pizzaImages/cheeseburgerPizza.jpg" alt="cheeseburger pizza image" />

				<h4>Cheeseburger pizza</h4>

				<div className="selector">
					<ul>
						<li className="active">thin</li>
						<li>classic</li>
					</ul>

					<ul>
						<li className="active">26 sm</li>
						<li>30 sm</li>
						<li>40 sm</li>
					</ul>
				</div>

				<div className="pizzaItemBottom">
                    <p>from 4 $</p>
                    
					<div className="addButton">
						<p>+ Add</p>
					</div>
				</div>
			</div>
			<div className="pizzaItem">
				<img src="/img/pizzaImages/cheesePizza.jpg" alt="cheese pizza image" />

				<h4>Cheese pizza</h4>

				<div className="selector">
					<ul>
						<li className="active">thin</li>
						<li>classic</li>
					</ul>

					<ul>
						<li className="active">26 sm</li>
						<li>30 sm</li>
						<li>40 sm</li>
					</ul>
				</div>

				<div className="pizzaItemBottom">
                    <p>from 4 $</p>
                    
					<div className="addButton">
						<p>+ Add</p>	
					</div>
				</div>
			</div>
			<div className="pizzaItem">
				<img src="/img/pizzaImages/asianPizza.jpg" alt="asian pizza image" />

				<h4>Asian pizza</h4>

				<div className="selector">
					<ul>
						<li className="active">thin</li>
						<li>classic</li>
					</ul>

					<ul>
						<li className="active">26 sm</li>
						<li>30 sm</li>
						<li>40 sm</li>
					</ul>
				</div>

				<div className="pizzaItemBottom">
                    <p>from 4 $</p>
                    
					<div className="addButton">
						<p>+ Add</p>
					</div>
				</div>
			</div>
			<div className="pizzaItem">
				<img src="/img/pizzaImages/chickenPizza.jpg" alt="cheeseburger pizza image" />

				<h4>Cheeseburger pizza</h4>

				<div className="selector">
					<ul>
						<li className="active">thin</li>
						<li>classic</li>
					</ul>

					<ul>
						<li className="active">26 sm</li>
						<li>30 sm</li>
						<li>40 sm</li>
					</ul>
				</div>

				<div className="pizzaItemBottom">
                    <p>from 4 $</p>
                    
					<div className="addButton">
						<p>+ Add</p>
					</div>
				</div>
			</div>
		</section>
	);
}

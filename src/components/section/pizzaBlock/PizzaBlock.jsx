import "./PizzaBlock.scss";
import PropTypes from "prop-types";

export default function PizzaBlock({ info }) {

	

	return (
		<div className="pizzaBlock">
			<img src={info.imgSrc} alt={info.imgAlt} />

			<h4>{info.title}</h4>

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

			<div className="pizzaBlockBottom">
				<p>from {info.price} $</p>

				<button type="button" className="addButton">
					<p>+ Add</p>
					<p>0</p>
				</button>
			</div>
		</div>
	);
}

PizzaBlock.propTypes = {
	info: PropTypes.object,
};

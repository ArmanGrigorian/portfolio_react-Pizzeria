import "./CartItem.scss";
import PropTypes from 'prop-types';

export default function CartItem({imgSrc, imgAlt, title, price}) {
  return (
		<div className="cartItem">
			<div>
				<img src={imgSrc} alt={imgAlt} />
				<div>
					<h4>{title}</h4>
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

			<p> {price} $</p>

			<button type="button" className="removeButton">
				X
			</button>
		</div>
	);
}

CartItem.propTypes = {
	imgSrc: PropTypes.string,
	imgAlt: PropTypes.string,
	title: PropTypes.string,
	price: PropTypes.number,
};

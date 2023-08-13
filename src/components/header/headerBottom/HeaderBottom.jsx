import "./HeaderBottom.scss";
import PropTypes from 'prop-types'

export default function HeaderBottom({children}) {
	return (
		<div className="headerBottom">
			{children}
		</div>
	);
}

HeaderBottom.propTypes = {
	children: PropTypes.node,
};

import PropTypes from "prop-types";

export default function NotFound({ title }) {
	return (
		<>
			<h1>{title}</h1>
		</>
	);
}

NotFound.propTypes = {
	title: PropTypes.string,
};
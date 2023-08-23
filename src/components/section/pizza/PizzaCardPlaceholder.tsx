import React from "react";
import ContentLoader from "react-content-loader";

const PizzaCardPlaceholder: React.FC = (props):JSX.Element => (
	<ContentLoader
		className="pizzaBlock"
		speed={2}
		width={260}
		height={444.12}
		viewBox="0 0 260 444.12"
		backgroundColor="#f3f3f3"
		foregroundColor="#ecebeb"
		{...props}>
		<circle cx="133" cy="117" r="115" />
		<rect x="28" y="260" rx="8" ry="8" width="216" height="17" />
		<rect x="20" y="289" rx="12" ry="12" width="231" height="81" />
		<rect x="28" y="400" rx="8" ry="8" width="82" height="17" />
		<rect x="172" y="379" rx="12" ry="12" width="81" height="60" />
	</ContentLoader>
);

export default PizzaCardPlaceholder;

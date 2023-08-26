import React from "react";

type TnotFoundProps = {
	title: string;
};

const NotFound: React.FC<TnotFoundProps> = ({ title }): JSX.Element => {
	return (
		<>
			<h1>{title}</h1>
		</>
	);
};
export default NotFound;

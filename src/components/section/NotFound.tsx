import React from "react";

type NotFoundProps = {
	title: string;
};

const NotFound: React.FC<NotFoundProps> = ({ title }): JSX.Element => {
	return (
		<>
			<h1>{title}</h1>
		</>
	);
};
export default NotFound;

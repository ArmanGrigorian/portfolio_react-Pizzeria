import React from "react";

const NotFound: React.FC<{title:string}>=({ title }):JSX.Element=> {
	return (
		<>
			<h1>{title}</h1>
		</>
	);
}
export default NotFound;

import React from "react";
import "./Section.scss";

const Section: React.FC<{ children: JSX.Element | JSX.Element[] }> = ({
	children,
}): JSX.Element => {
	return <section>{children}</section>;
};

export default Section;

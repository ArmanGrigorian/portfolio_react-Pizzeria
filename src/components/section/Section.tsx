import React from "react";
import "./Section.scss";

type TsectionProps = {
	children: JSX.Element | JSX.Element[];
};

const Section: React.FC<TsectionProps> = ({ children }): JSX.Element => {
	return <section>{children}</section>;
};

export default Section;

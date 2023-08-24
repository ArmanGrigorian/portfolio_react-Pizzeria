import React from "react";
import "./Section.scss";

type SectionProps = {
	children: JSX.Element | JSX.Element[];
};

const Section: React.FC<SectionProps> = ({ children }): JSX.Element => {
	return <section>{children}</section>;
};

export default Section;

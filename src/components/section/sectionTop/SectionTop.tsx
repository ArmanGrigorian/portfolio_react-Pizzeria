import React from "react";
import "./SectionTop.scss";

type SectionTopProps = {
	children: JSX.Element | JSX.Element[];
};

const SectionTop: React.FC<SectionTopProps> = ({ children }): JSX.Element => {
	return <div className="sectionTop">{children}</div>;
};

export default SectionTop;

import React from "react";
import "./SectionTop.scss";

type TsectionTopProps = {
	children: JSX.Element | JSX.Element[];
};

const SectionTop: React.FC<TsectionTopProps> = ({ children }): JSX.Element => {
	return <div className="sectionTop">{children}</div>;
};

export default SectionTop;

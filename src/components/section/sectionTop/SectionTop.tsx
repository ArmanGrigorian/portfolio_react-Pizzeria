import React from "react";
import "./SectionTop.scss";

const SectionTop: React.FC<{ children: JSX.Element | JSX.Element[] }> = ({ children }) => {
	return <div className="sectionTop">{children}</div>;
};

export default SectionTop;

import React from "react";
import "./HeaderBottom.scss";

type HeaderBottomProps = {
	children: JSX.Element | JSX.Element[];
};

const HeaderBottom: React.FC<HeaderBottomProps> = ({ children }): JSX.Element | JSX.Element[] => {
	return <div className="headerBottom">{children}</div>;
};

export default HeaderBottom;

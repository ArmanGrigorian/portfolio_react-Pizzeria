import React from "react";
import "./HeaderBottom.scss";

type TheaderBottomProps = {
	children: JSX.Element | JSX.Element[];
};

const HeaderBottom: React.FC<TheaderBottomProps> = ({ children }): JSX.Element | JSX.Element[] => {
	return <div className="headerBottom">{children}</div>;
};

export default HeaderBottom;

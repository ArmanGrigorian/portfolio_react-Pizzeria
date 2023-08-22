import React from "react";
import "./HeaderBottom.scss";

const HeaderBottom: React.FC<{children: JSX.Element | JSX.Element[]}>=({ children })=> {
	return <div className="headerBottom">{children}</div>;
}


export default HeaderBottom;

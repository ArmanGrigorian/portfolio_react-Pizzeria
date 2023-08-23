import React from "react";
import "./Header.scss";

const Header: React.FC<{ children: JSX.Element | JSX.Element[] }> = ({
	children,
}): JSX.Element | JSX.Element[] => {
	return <header>{children}</header>;
};

export default Header;

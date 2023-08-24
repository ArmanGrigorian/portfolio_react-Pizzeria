import React from "react";
import "./Header.scss";

type TheaderProps = {
	children: JSX.Element | JSX.Element[];
};

const Header: React.FC<TheaderProps> = ({
	children,
}): JSX.Element | JSX.Element[] => {
	return <header>{children}</header>;
};

export default Header;

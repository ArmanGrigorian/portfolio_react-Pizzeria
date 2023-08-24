import React from "react";
import "./Header.scss";

type HeaderProps = {
	children: JSX.Element | JSX.Element[];
};

const Header: React.FC<HeaderProps> = ({
	children,
}): JSX.Element | JSX.Element[] => {
	return <header>{children}</header>;
};

export default Header;

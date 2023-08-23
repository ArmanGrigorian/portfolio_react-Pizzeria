import React from "react";
import "./Footer.scss";

const Footer: React.FC<{ children: JSX.Element | JSX.Element[] }> = ({
	children,
}): JSX.Element | JSX.Element[] => {
	return <footer>{children}</footer>;
};

export default Footer;

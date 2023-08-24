import React from "react";
import "./Footer.scss";

type FooterProps = {
	children: JSX.Element | JSX.Element[];
};

const Footer: React.FC<FooterProps> = ({
	children,
}): JSX.Element | JSX.Element[] => {
	return <footer>{children}</footer>;
};

export default Footer;

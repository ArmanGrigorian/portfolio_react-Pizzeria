import React from "react";
import "./Footer.scss";

type TfooterProps = {
	children: JSX.Element | JSX.Element[];
};

const Footer: React.FC<TfooterProps> = ({
	children,
}): JSX.Element | JSX.Element[] => {
	return <footer>{children}</footer>;
};

export default Footer;

import React, { ReactElement } from "react";
import Header from "../header/Header.tsx";
import HeaderTop from "../header/headerTop/HeaderTop.tsx";
import Section from "../section/Section.tsx";
import NotFound from "../section/NotFound.tsx";

const ErrorPage: React.FC = (): ReactElement => {
	return (
		<>
			<Header>
				<HeaderTop />
			</Header>
			<Section>
				<NotFound title="NOTHING WAS FOUND" />
			</Section>
		</>
	);
};

export default ErrorPage;

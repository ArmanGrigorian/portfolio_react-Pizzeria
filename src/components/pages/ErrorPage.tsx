import React, { ReactElement } from "react";
import { Header, HeaderTop, Section, NotFound } from "../index.ts";

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

import React, { ReactElement } from "react";
import { Header, HeaderTop, Section, PizzaInfo } from "../index.ts";

const PizzaPage: React.FC = (): ReactElement => {
	return (
		<>
			<Header>
				<HeaderTop />
			</Header>

			<Section>
				<PizzaInfo />
			</Section>
		</>
	);
};

export default PizzaPage;

import React, { ReactElement } from "react";
import Header from "../header/Header.tsx";
import HeaderTop from "../header/headerTop/HeaderTop.tsx";
import Section from "../section/Section.tsx";
import PizzaInfo from "../section/pizza/pizzaInfo/PizzaInfo.tsx";

const PizzaPage: React.FC =(): ReactElement=> {
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
}

export default PizzaPage;

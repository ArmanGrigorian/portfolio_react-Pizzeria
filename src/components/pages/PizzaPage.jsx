import Header from "../header/Header.jsx";
import HeaderTop from "../header/headerTop/HeaderTop.jsx";
import Section from "../section/Section.jsx";
import PizzaInfo from "../section/pizza/pizzaInfo/PizzaInfo.jsx";

export default function PizzaPage() {
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

import Header from "../header/Header.jsx";
import Section from "../section/Section.jsx";
import HeaderTop from "../header/headerTop/HeaderTop.jsx";
import Menu from "../section/menu/Menu.jsx";
import HeaderBottom from "../header/headerBottom/HeaderBottom.jsx";

export default function MainPage() {
	return (
		<>
			<Header>
				<HeaderTop />
				<HeaderBottom />
			</Header>
			<Section>
				<Menu />
			</Section>
		</>
	);
}

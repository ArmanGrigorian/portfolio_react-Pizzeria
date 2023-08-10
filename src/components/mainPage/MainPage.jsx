import Header from "../header/Header.jsx";
import Section from "../section/Section.jsx";
import HeaderTop from "../header/headerTop/HeaderTop";
import HeaderBottom from "../header/headerBottom/HeaderBottom";
import Menu from "../menu/Menu.jsx";

export default function MainPage() {
	return (
		<>
			<Header>
				<HeaderTop />
				<HeaderBottom/>
			</Header >
			<Section>
				<Menu/>
			</Section>
		</>
	);
}

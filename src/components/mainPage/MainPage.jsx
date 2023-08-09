import "./MainPage.scss";
import Header from "../header/Header.jsx";
import Section from "../section/Section.jsx";
import HeaderTop from "../header/headerTop/HeaderTop";
import HeaderBottom from "../header/headerBottom/HeaderBottom";

export default function MainPage() {
	return (
		<>
			<Header>
				<HeaderTop />
				<HeaderBottom/>
			</Header >
				
			<Section />
		</>
	);
}

import Header from "../header/Header";
import HeaderTop from "../header/headerTop/HeaderTop";
import Section from "../section/Section";
import NotFound from "../section/NotFound.jsx";

export default function ErrorPage() {
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
}

import Header from "../header/Header.tsx";
import HeaderTop from "../header/headerTop/HeaderTop.tsx";
import Section from "../section/Section.tsx";
import NotFound from "../section/NotFound.tsx";

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

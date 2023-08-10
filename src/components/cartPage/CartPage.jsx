import "./CartPage.scss";
import Header from "../header/Header";
import HeaderTop from "../header/headerTop/HeaderTop";
import Section from "../section/Section";
import Cart from "../Cart/Cart.jsx";

export default function CartPage() {
	return (
		<>
			<Header>
				<HeaderTop />
			</Header>
      <Section>
        <Cart/>
      </Section>
		</>
	);
}

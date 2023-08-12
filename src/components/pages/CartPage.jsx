import Header from "../header/Header.jsx";
import HeaderTop from "../header/headerTop/HeaderTop.jsx";
import Section from "../section/Section.jsx";
import Cart from "../section/cart/Cart.jsx";

export default function CartPage() {
	return (
		<>
			<Header>
				<HeaderTop />
			</Header>
			<Section>
				<Cart />
			</Section>
		</>
	);
}

import Header from "../header/Header.jsx";
import HeaderTop from "../header/headerTop/HeaderTop.jsx";
import Section from "../section/Section.jsx";
import Cart from "../section/cart/Cart.jsx";
import { BsCart3 } from "react-icons/bs";

export default function CartPage() {
	return (
		<>
			<Header>
				<HeaderTop />
			</Header>
			<Section>
				<h1>
					<BsCart3 />
					Cart
				</h1>
				<Cart />
			</Section>
		</>
	);
}

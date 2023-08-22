import Header from "../header/Header.jsx";
import HeaderTop from "../header/headerTop/HeaderTop.jsx";
import Section from "../section/Section.jsx";
import Cart from "../section/cart/Cart.jsx";
import NotFound from "../section/NotFound.jsx";
import { BsCart3 } from "react-icons/bs";
import { useSelector} from "react-redux";
	

export default function CartPage() {
	const items = useSelector((state) => state.cartSlice.items);
	console.log(items)
	return (
		<>
			<Header>
				<HeaderTop />
			</Header>
			<Section>
				{items.length > 0 ? (
					<>
						<h1>
							<BsCart3 />
							Cart
						</h1>
						<Cart />
					</>
				) : (
					<NotFound title={"CART IS EMPTY"}/>
				)}
			</Section>
		</>
	);
}

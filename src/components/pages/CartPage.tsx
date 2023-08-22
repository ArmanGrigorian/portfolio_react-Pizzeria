import React from "react";
import Header from "../header/Header.tsx";
import HeaderTop from "../header/headerTop/HeaderTop.tsx";
import Section from "../section/Section.tsx";
import Cart from "../section/cart/Cart.tsx";
import NotFound from "../section/NotFound.tsx";
import { BsCart3 } from "react-icons/bs";
import { useSelector} from "react-redux";
	

const CartPage: React.FC =()=> {
	const items = useSelector((state: {cartSlice: {items: [string | number]}}) => state.cartSlice.items);
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

export default CartPage;

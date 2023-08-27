import React, { ReactElement } from "react";
import { Header, HeaderTop, Section, Cart, NotFound } from "../index.ts";
import { BsCart3 } from "react-icons/bs";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store.ts";

const CartPage: React.FC = (): ReactElement => {
	const items = useSelector((state: RootState) => state.cartSlice.items);
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
					<NotFound title={"CART IS EMPTY"} />
				)}
			</Section>
		</>
	);
};

export default CartPage;

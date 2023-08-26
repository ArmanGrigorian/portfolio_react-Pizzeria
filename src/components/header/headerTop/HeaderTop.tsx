import React, { memo, useEffect, useState } from "react";
import "./HeaderTop.scss";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";

const HeaderTop: React.FC = memo((): JSX.Element => {
	const { totalPrice, totalCount, items } = useSelector((state: RootState) => state.cartSlice);

	const [isMounted, setIsMounted] = useState<boolean>(false);

	useEffect(() => {
		if (isMounted) {
			const localCart: string = JSON.stringify(items);
			localStorage.setItem("localCart", localCart);
		} else setIsMounted(true);
	}, [isMounted, items]);

	return (
		<div className="headerTop">
			<Link to="/">
				<div className="headerTopLeft">
					<img src="/img/pizza.png" alt="pizza image" />
					<div>
						<h2>REACT PIZZA</h2>
						<p>The most delicious pizza in the universe</p>
					</div>
				</div>
			</Link>

			<Link to="/cartPage">
				<div className="headerTopRight">
					<p>{totalPrice} $</p>
					<div>
						<img src="/img/shoppingCart.png" alt="shopping cart image" />
						<p>{totalCount}</p>
					</div>
				</div>
			</Link>
		</div>
	);
});

HeaderTop.displayName = "HeaderTop";

export default HeaderTop;

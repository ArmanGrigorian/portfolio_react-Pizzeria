import { Routes, Route } from "react-router-dom";
import MainPage from "./components/pages/MainPage.jsx";
import PizzaPage from "./components/pages/PizzaPage.jsx";
import CartPage from "./components/pages/CartPage.jsx";
import ErrorPage from "./components/pages/ErrorPage.jsx";

export default function App(): JSX.Element {
	return (
		<>
			<Routes>
				<Route path="/" element={<MainPage />} />
				<Route path="pizzaPage/:id" element={<PizzaPage />} />
				<Route path="cartPage" element={<CartPage />} />
				<Route path="*" element={<ErrorPage />} />
			</Routes>
		</>
	);
}

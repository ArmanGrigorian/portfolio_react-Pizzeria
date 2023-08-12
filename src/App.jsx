import { Routes, Route } from "react-router-dom";
import MainPage from "./components/pages/MainPage.jsx";
import CartPage from "./components/pages/CartPage.jsx";
import ErrorPage from "./components/pages/ErrorPage.jsx";

export default function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<MainPage />} />
				<Route path="cartPage" element={<CartPage />} />
				<Route path="*" element={<ErrorPage />} />
			</Routes>
		</>
	);
}

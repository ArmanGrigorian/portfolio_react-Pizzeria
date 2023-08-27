import { Routes, Route } from "react-router-dom";
import MainPage from "./components/pages/MainPage.tsx";
import PizzaPage from "./components/pages/PizzaPage.tsx";
import { lazy, Suspense } from "react";
const CartPage = lazy(() => import("./components/pages/CartPage.tsx"));
const ErrorPage = lazy(() => import("./components/pages/ErrorPage.tsx"));

export default function App(): JSX.Element {
	return (
		<>
			<Routes>
				<Route path="/" element={<MainPage />} />
				<Route path="pizzaPage/:id" element={<PizzaPage />} />
				<Route
					path="cartPage"
					element={
						<Suspense fallback={<h2>CART IS LOADING...</h2>}>
							<CartPage />
						</Suspense>
					}
				/>
				<Route
					path="*"
					element={
						<Suspense fallback={<h2>LOADING...</h2>}>
							<ErrorPage />
						</Suspense>
					}
				/>
			</Routes>
		</>
	);
}

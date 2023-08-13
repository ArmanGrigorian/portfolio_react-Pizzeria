import { useEffect, useState } from "react";
import Header from "../header/Header.jsx";
import Section from "../section/Section.jsx";
import HeaderTop from "../header/headerTop/HeaderTop.jsx";
import Menu from "../section/menu/Menu.jsx";
import HeaderBottom from "../header/headerBottom/HeaderBottom.jsx";
import Categories from "../header/headerBottom/categories/Categories.jsx";
import Sort from "../header/headerBottom/sort/Sort.jsx";

export default function MainPage() {
	const initialUrl = "https://64d772272a017531bc134033.mockapi.io/pizzas";

	// main URL which includes all categories of pizzas
	const [url, setUrl] = useState(initialUrl);

	// props of Category.jsx
	const categories = ["All", "Meat", "Spicy"];
	const [activeCategory, setActiveCategory] = useState("");

	// props of Sort.jsx
	const [sortBy, setSortBy] = useState("rating");

	// props of Menu.jsx
	const [pizzas, setPizzas] = useState([]);
	const [isLoading, setisLoading] = useState(true);

	// functions
	function handleSetCategory(e) {
		

		if (categories.some((category) => category.toLowerCase() === e.target.dataset.category)) {
			setActiveCategory(e.target.dataset.category);
			if (e.target.dataset.category.toLowerCase() === "all") {
				setUrl(initialUrl);
			} else {
				setUrl(
					`${initialUrl}?filter=${e.target.dataset.category}&order=desc`,
				);
			}
		} else return;
	}

	function handleSelect(e) {
		setSortBy(e.target.value);

		if (e.target.value.endsWith("low)") || e.target.value.endsWith("A)")) {
			setUrl(`${initialUrl}?sortBy=${e.target.value.split(" ")[0]}&order=desc`);
		} else if (e.target.value.endsWith("high)") || e.target.value.endsWith("Z)")) {
			setUrl(`${initialUrl}?sortBy=${e.target.value.split(" ")[0]}&order=asc`);
		}
	}

	useEffect(() => {
		setisLoading(true);
		fetch(url)
			.then((response) => response.json())
			.then((data) => {
				setPizzas(data);

				// fake remaining
				setTimeout(() => {
					setisLoading(false);
				}, 100);
			});
		window.scrollTo(0, 0);
	}, [url]);

	return (
		<>
			<Header>
				<HeaderTop />
				<HeaderBottom>
					<Categories
						categories={categories}
						activeCategory={activeCategory}
						handleSetCategory={handleSetCategory}
					/>
					<Sort sortBy={sortBy} handleSelect={handleSelect} />
				</HeaderBottom>
			</Header>
			<Section>
				<Menu
					url={url}
					pizzas={pizzas}
					setPizzas={setPizzas}
					isLoading={isLoading}
					setisLoading={setisLoading}
				/>
			</Section>
		</>
	);
}

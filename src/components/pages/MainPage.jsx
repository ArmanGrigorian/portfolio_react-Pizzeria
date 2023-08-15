import { useEffect } from "react";
import Header from "../header/Header.jsx";
import Section from "../section/Section.jsx";
import SectionTop from "../section/sectionTop/SectionTop.jsx";
import SearchBar from "../section/searchBar/SearchBar.jsx";
import HeaderTop from "../header/headerTop/HeaderTop.jsx";
import Menu from "../section/menu/Menu.jsx";
import HeaderBottom from "../header/headerBottom/HeaderBottom.jsx";
import Categories from "../header/headerBottom/categories/Categories.jsx";
import Sort from "../header/headerBottom/sort/Sort.jsx";
import Footer from "../footer/Footer.jsx";
import Pagination from "../footer/pagination/Pagination.jsx";
import { useSelector, useDispatch } from "react-redux";
import { setPizzas, setIsLoading } from "../../redux/slices/pizzaSlice.js";

import {
	setActiveCategory,
	setSortBy,
	setSearchValue,
	setCurrentPage,
	setUrl,
} from "../../redux/slices/filterSlice.js";

export default function MainPage() {
	// pizzaSlice
	const { pizzas, isLoading } = useSelector((state) => state.pizzaSlice);
	// filterSlice
	const { activeCategory, sortBy, searchValue, currentPage, url } = useSelector(
		(state) => state.filterSlice,
	);

	// redux dispath
	const dispatch = useDispatch();
	// local variables
	const categories = ["All", "Meat", "Spicy", "Cheese"];
	const initialUrl = `https://64d772272a017531bc134033.mockapi.io/pizzas?page=${currentPage}&limit=8&`;

	// FUNCTIONS
	// IT IS NOT MY FAULT THAT FILTERING/SORTING WITH TWO AND MORE
	// CONDITIONS IS NOT WORKING CORRECTLY...
	// I'AM DOING EVERYTHING AS IT DESCRIBED IN THE DOCS OF mock.API
	// BUT & OPERATOR NOT OPERATING AS IT MUST. IT IS CHECKING ONLY
	// FIRST PASSED CONDITION...

	function handleSetCategory(e) {
		if (categories.some((category) => category.toLowerCase() === e.target.dataset.category)) {
			dispatch(setActiveCategory(e.target.dataset.category));

			if (e.target.dataset.category.toLowerCase() === "all") {
				if (sortBy.endsWith("low)") || sortBy.endsWith("A)")) {
					dispatch(setUrl(`${initialUrl}sortBy=${sortBy.split(" ")[0]}&order=desc`));
				} else if (sortBy.endsWith("high)") || sortBy.endsWith("Z)")) {
					dispatch(setUrl(`${initialUrl}sortBy=${sortBy.split(" ")[0]}&order=asc`));
				}
			} else {
				if (sortBy.endsWith("low)") || sortBy.endsWith("A)")) {
					dispatch(
						setUrl(
							`${initialUrl}sortBy=${sortBy.split(" ")[0]}&filter=${
								e.target.dataset.category
							}&order=desc`,
						),
					);
				} else if (sortBy.endsWith("high)") || sortBy.endsWith("Z)")) {
					dispatch(
						setUrl(
							`${initialUrl}sortBy=${sortBy.split(" ")[0]}&filter=${
								e.target.dataset.category
							}&order=asc`,
						),
					);
				}
			}
		} else return;
	}

	function handleSelect(e) {
		dispatch(setSortBy(e.target.value));

		if (activeCategory.toLowerCase() === "all" && searchValue.toLowerCase() === "") {
			if (e.target.value.endsWith("low)") || e.target.value.endsWith("A)")) {
				dispatch(setUrl(`${initialUrl}sortBy=${e.target.value.split(" ")[0]}&order=desc`));
			} else if (e.target.value.endsWith("high)") || e.target.value.endsWith("Z)")) {
				dispatch(setUrl(`${initialUrl}sortBy=${e.target.value.split(" ")[0]}&order=asc`));
			}
		} else {
			if (e.target.value.endsWith("low)") || e.target.value.endsWith("A)")) {
				dispatch(
					setUrl(
						`${initialUrl}category=${activeCategory}&title=${searchValue}&sortBy=${
							e.target.value.split(" ")[0]
						}&order=desc`,
					),
				);
			} else if (e.target.value.endsWith("high)") || e.target.value.endsWith("Z)")) {
				dispatch(
					setUrl(
						`${initialUrl}category=${activeCategory}&title=${searchValue}&sortBy=${
							e.target.value.split(" ")[0]
						}&order=asc`,
					),
				);
			}
		}
	}

	function handleSearch(e) {
		dispatch(setSearchValue(e.target.value));

		if (activeCategory.toLowerCase() === "all") {
			if (sortBy.endsWith("low)") || sortBy.endsWith("A)")) {
				dispatch(
					setUrl(`${initialUrl}title=${e.target.value}&sortBy=${sortBy.split(" ")[0]}&order=desc`),
				);
			} else if (sortBy.endsWith("high)") || sortBy.endsWith("Z)")) {
				dispatch(
					setUrl(`${initialUrl}title=${e.target.value}&sortBy=${sortBy.split(" ")[0]}&order=asc`),
				);
			}
		} else {
			if (sortBy.endsWith("low)") || sortBy.endsWith("A)")) {
				dispatch(
					setUrl(
						`${initialUrl}title=${e.target.value}&category=${activeCategory}&sortBy=${
							sortBy.split(" ")[0]
						}&order=desc`,
					),
				);
			} else if (sortBy.endsWith("high)") || sortBy.endsWith("Z)")) {
				dispatch(
					setUrl(
						`${initialUrl}title=${e.target.value}&category=${activeCategory}&sortBy=${
							sortBy.split(" ")[0]
						}&order=asc`,
					),
				);
			}
		}
	}

	function handlePage(e) {
		dispatch(setCurrentPage(e.selected + 1));
		dispatch(
			setUrl(`https://64d772272a017531bc134033.mockapi.io/pizzas?page=${e.selected + 1}&limit=8&`),
		);
	}

	useEffect(() => {
		dispatch(setIsLoading(true));
		fetch(url)
			.then((response) => response.json())
			.then((data) => {
				dispatch(setPizzas(data));
				dispatch(setIsLoading(false));
			});
	}, [dispatch, url]);

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
				<SectionTop>
					<h1>{isLoading ? "Loading" : "All"}</h1>
					<SearchBar searchValue={searchValue} handleSearch={handleSearch} />
				</SectionTop>

				<Menu pizzas={pizzas} isLoading={isLoading} searchValue={searchValue} />
			</Section>
			<Footer>
				<Pagination handlePage={handlePage} />
			</Footer>
		</>
	);
}

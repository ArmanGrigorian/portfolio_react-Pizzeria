import { useEffect, useCallback } from "react";
import debounce from "../../utils/debounce.js";
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
import {
	fetchPizzasByUrl,
	setUrl,
	setCurrentPage,
	setActiveCategory,
	setSortBy,
	setInputValue,
	setSearchValue,
} from "../../redux/slices/pizzaSlice.js";
import NotFound from "../section/NotFound.jsx";

export default function MainPage() {
	const categories = ["All", "Meat", "Spicy", "Cheese"];
	const {
		url,
		initialUrl,
		currentPage,
		status,
		isLoading,
		pizzas,
		activeCategory,
		sortBy,
		inputValue,
		searchValue,
	} = useSelector((state) => state.pizzaSlice);

	const dispatch = useDispatch();

	// IT IS NOT MY FAULT THAT FILTER COMAND of mock.API
	// IS NOT WORKING CORRECTLY WHENE I AM PASSING TWO AND MORE
	// CONDITIONS...
	// I'AM DOING EVERYTHING AS IT DESCRIBED IN THE DOCS OF mock.API
	// BUT & OPERATOR NOT OPERATING AS IT MUST. IT IS CHECKING ONLY
	// FIRST PASSED CONDITION...

	function handleSetCategory(e) {
		if (categories.some((category) => category.toLowerCase() === e.target.dataset.category)) {
			dispatch(setActiveCategory(e.target.dataset.category));

			if (e.target.dataset.category.toLowerCase() === "all") {
				if (sortBy.endsWith("low)") || sortBy.endsWith("A)")) {
					dispatch(
						setUrl(`${initialUrl}${currentPage}&limit=8&sortBy=${sortBy.split(" ")[0]}&order=desc`),
					);
				} else if (sortBy.endsWith("high)") || sortBy.endsWith("Z)")) {
					dispatch(
						setUrl(`${initialUrl}${currentPage}&limit=8&sortBy=${sortBy.split(" ")[0]}&order=asc`),
					);
				}
			} else {
				if (sortBy.endsWith("low)") || sortBy.endsWith("A)")) {
					dispatch(
						setUrl(
							`${initialUrl}${currentPage}&limit=8&sortBy=${sortBy.split(" ")[0]}&filter=${
								e.target.dataset.category
							}&order=desc`,
						),
					);
				} else if (sortBy.endsWith("high)") || sortBy.endsWith("Z)")) {
					dispatch(
						setUrl(
							`${initialUrl}${currentPage}&limit=8&sortBy=${sortBy.split(" ")[0]}&filter=${
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
				dispatch(
					setUrl(
						`${initialUrl}${currentPage}&limit=8&sortBy=${e.target.value.split(" ")[0]}&order=desc`,
					),
				);
			} else if (e.target.value.endsWith("high)") || e.target.value.endsWith("Z)")) {
				dispatch(
					setUrl(
						`${initialUrl}${currentPage}&limit=8&sortBy=${e.target.value.split(" ")[0]}&order=asc`,
					),
				);
			}
		} else {
			if (e.target.value.endsWith("low)") || e.target.value.endsWith("A)")) {
				dispatch(
					setUrl(
						`${initialUrl}${currentPage}&limit=8&category=${activeCategory}&title=${searchValue}&sortBy=${
							e.target.value.split(" ")[0]
						}&order=desc`,
					),
				);
			} else if (e.target.value.endsWith("high)") || e.target.value.endsWith("Z)")) {
				dispatch(
					setUrl(
						`${initialUrl}${currentPage}&limit=8&category=${activeCategory}&title=${searchValue}&sortBy=${
							e.target.value.split(" ")[0]
						}&order=asc`,
					),
				);
			}
		}
	}

	const updateSearchValue = useCallback(
		debounce((str) => {
			dispatch(setSearchValue(str));
			handleSearch(str);
		}),
		[],
	);

	function onChangeInput(e) {
		dispatch(setInputValue(e.target.value));
		updateSearchValue(e.target.value);
	}

	function handleSearch(currentSearchValue) {
		console.log(currentSearchValue);
		if (activeCategory.toLowerCase() === "all") {
			if (sortBy.endsWith("low)") || sortBy.endsWith("A)")) {
				dispatch(
					setUrl(
						`${initialUrl}${currentPage}&limit=8&title=${currentSearchValue}&sortBy=${
							sortBy.split(" ")[0]
						}&order=desc`,
					),
				);
			} else if (sortBy.endsWith("high)") || sortBy.endsWith("Z)")) {
				dispatch(
					setUrl(
						`${initialUrl}${currentPage}&limit=8&title=${currentSearchValue}&sortBy=${
							sortBy.split(" ")[0]
						}&order=asc`,
					),
				);
			}
		} else {
			if (sortBy.endsWith("low)") || sortBy.endsWith("A)")) {
				dispatch(
					setUrl(
						`${initialUrl}${currentPage}&limit=8&title=${currentSearchValue}&category=${activeCategory}&sortBy=${
							sortBy.split(" ")[0]
						}&order=desc`,
					),
				);
			} else if (sortBy.endsWith("high)") || sortBy.endsWith("Z)")) {
				dispatch(
					setUrl(
						`${initialUrl}${currentPage}&limit=8&title=${currentSearchValue}&category=${activeCategory}&sortBy=${
							sortBy.split(" ")[0]
						}&order=asc`,
					),
				);
			}
		}
	}

	function handlePage(e) {
		dispatch(setCurrentPage(e.selected + 1));
		dispatch(setUrl(`${initialUrl}${e.selected + 1}&limit=8&`));
	}

	async function controlBusiness() {
		dispatch(fetchPizzasByUrl({ url }));
	}

	useEffect(() => {
		controlBusiness();
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
				{status === "rejected" ? (
					<NotFound title="OOP SOMETHING WENT WRONG" />
				) : (
					<>
						<SectionTop>
							<h1>{isLoading ? "Loading" : "All"}</h1>
							<SearchBar searchValue={searchValue} onChangeInput={onChangeInput} />
						</SectionTop>
						<Menu pizzas={pizzas} isLoading={isLoading} inputValue={inputValue} />
					</>
				)}
			</Section>
			<Footer>
				<Pagination handlePage={handlePage} />
			</Footer>
		</>
	);
}

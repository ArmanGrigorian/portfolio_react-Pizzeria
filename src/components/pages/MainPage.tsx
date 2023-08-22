import { useEffect, useCallback } from "react";
import debounce from "../../utilities/debounce.ts";
import Header from "../header/Header.tsx";
import Section from "../section/Section.tsx";
import SectionTop from "../section/sectionTop/SectionTop.tsx";
import SearchBar from "../section/searchBar/SearchBar.tsx";
import HeaderTop from "../header/headerTop/HeaderTop.tsx";
import Menu from "../section/menu/Menu.tsx";
import HeaderBottom from "../header/headerBottom/HeaderBottom.tsx";
import Categories from "../header/headerBottom/categories/Categories.tsx";
import Sort from "../header/headerBottom/sort/Sort.tsx";
import Footer from "../footer/Footer.tsx";
import Pagination from "../footer/pagination/Pagination.tsx";
import { useSelector, useDispatch } from "react-redux";
import {
	fetchPizzasByUrl,
	setUrl,
	setCurrentPage,
	setActiveCategory,
	setSortBy,
	setInputValue,
	setSearchValue,
} from "../../redux/slices/pizzaSlice.ts";
	import NotFound from "../section/NotFound.tsx";
import { handleGetCategory } from "../../utilities/getCategory.ts";
import { handleGetSelect } from "../../utilities/getSelect.ts";
import { getSearch } from "../../utilities/getSearch.ts";

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

	const updateSearchValue = useCallback(
		debounce((str) => {
			dispatch(setSearchValue(str));
			getSearch(str, activeCategory, sortBy, dispatch, setUrl, initialUrl, currentPage);
		}),
		[],
	);

	function handleSearch(e) {
		dispatch(setInputValue(e.target.value));
		updateSearchValue(e.target.value);
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
						handleGetCategory={(e) =>
							handleGetCategory(
								e,
								categories,
								dispatch,
								setActiveCategory,
								setUrl,
								sortBy,
								initialUrl,
								currentPage,
							)
						}
					/>
					<Sort
						sortBy={sortBy}
						handleGetSelect={(e) =>
							handleGetSelect(
								e,
								dispatch,
								setSortBy,
								activeCategory,
								searchValue,
								setUrl,
								initialUrl,
								currentPage,
							)
						}
					/>
				</HeaderBottom>
			</Header>

			<Section>
				{status === "rejected" ? (
					<NotFound title="OOP SOMETHING WENT WRONG" />
				) : (
					<>
						<SectionTop>
							<h1>{isLoading ? "Loading" : "All"}</h1>
							<SearchBar searchValue={searchValue} handleSearch={handleSearch} />
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

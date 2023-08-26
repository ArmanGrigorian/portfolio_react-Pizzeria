import React, { ReactElement } from "react";
import { useEffect, useCallback } from "react";
import debounce from "../../utilities/debounce.ts";
import Header from "../header/Header.tsx";
import Section from "../section/Section.tsx";
import SectionTop from "../section/sectionTop/SectionTop.tsx";
import SearchBar from "../section/searchBar/SearchBar.tsx";
import HeaderTop from "../header/headerTop/HeaderTop.tsx";
import Menu from "../section/menu/Menu.tsx";
import HeaderBottom from "../header/headerBottom/HeaderBottom.tsx";
import CategoriesPanel from "../header/headerBottom/categories/CategoriesPanel.tsx";
import SortPanel from "../header/headerBottom/sort/SortPanel.tsx";
import Footer from "../footer/Footer.tsx";
import Pagination from "../footer/pagination/Pagination.tsx";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../redux/store.ts";
import {
	fetchPizzasByUrl,
	setUrl,
	setCurrentPage,
	setActiveCategory,
	setSortBy,
	setInputValue,
	setSearchValue,
	Tpizzas,
} from "../../redux/slices/pizzaSlice.ts";
import NotFound from "../section/NotFound.tsx";
import handleGetCategory from "../../utilities/getCategory.ts";
import handleGetSelect from "../../utilities/getSelect.ts";
import getSearch from "../../utilities/getSearch.ts";
import { RootState } from "../../redux/store.ts";

const MainPage: React.FC = (): ReactElement => {
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
	} = useSelector((state: RootState) => state.pizzaSlice);

	const appDispatch = useAppDispatch();

	// eslint-disable-next-line react-hooks/exhaustive-deps
	const updateSearchValue = useCallback(
		debounce((str: string) => {
			appDispatch(setSearchValue(str));
			getSearch(str, activeCategory, sortBy, appDispatch, setUrl, initialUrl, currentPage);
		}),
		[],
	);

	function handleSearch(e: React.ChangeEvent<HTMLInputElement>): void {
		appDispatch(setInputValue(e.target.value));
		updateSearchValue(e.target.value);
	}

	function handlePage(e: { selected: number }): void {
		appDispatch(setCurrentPage(e.selected + 1));
		appDispatch(setUrl(`${initialUrl}${e.selected + 1}&limit=8&`));
	}

	async function controlBusiness(): Promise<void> {
		appDispatch(fetchPizzasByUrl({ url }));
	}

	useEffect(() => {
		controlBusiness();
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [appDispatch, url]);

	return (
		<>
			<Header>
				<HeaderTop />

				<HeaderBottom>
					<CategoriesPanel
						categories={categories}
						activeCategory={activeCategory}
						handleGetCategory={(e) =>
							handleGetCategory(
								e,
								categories,
								appDispatch,
								setActiveCategory,
								setUrl,
								sortBy,
								initialUrl,
								currentPage,
							)
						}
					/>
					<SortPanel
						sortBy={sortBy}
						handleGetSelect={(e) =>
							handleGetSelect(
								e,
								appDispatch,
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
							<SearchBar inputValue={inputValue} handleSearch={handleSearch} />
						</SectionTop>
						<Menu pizzas={pizzas as Tpizzas[]} isLoading={isLoading} />
					</>
				)}
			</Section>
			<Footer>
				<Pagination handlePage={handlePage} />
			</Footer>
		</>
	);
};

export default MainPage;

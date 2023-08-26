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

	// to make code little shorter...
	const DESC: string = "&order=desc";
	const ASC: string = "&order=asc";
	const L8S: string = "&limit=8&sortBy=";
	const L8C: string = "&limit=8&category=";
	const L8T: string = "&limit=8&title=";
	const S: string = "&sortBy=";
	const C: string = "&category=";
	const F: string = "&filter=";

	// IT IS NOT MY FAULT THAT FILTER COMAND of mock.API
	// IS NOT WORKING CORRECTLY WHENE I AM PASSING TWO AND MORE
	// CONDITIONS...
	// I'AM DOING EVERYTHING AS IT DESCRIBED IN THE DOCS OF mock.API
	// BUT & OPERATOR NOT OPERATING AS IT MUST. IT IS CHECKING ONLY
	// FIRST PASSED CONDITION...

	const getSearch = (currentSearchValue: string): void => {
		if (activeCategory.toLowerCase() === "all") {
			if (sortBy.endsWith("low)") || sortBy.endsWith("A)")) {
				appDispatch(
					setUrl(
						`${initialUrl}${currentPage}${L8T}${currentSearchValue}${S}${
							sortBy.split(" ")[0]
						}${DESC}`,
					),
				);
			} else if (sortBy.endsWith("high)") || sortBy.endsWith("Z)")) {
				appDispatch(
					setUrl(
						`${initialUrl}${currentPage}${L8T}${currentSearchValue}${S}${
							sortBy.split(" ")[0]
						}${ASC}`,
					),
				);
			}
		} else {
			if (sortBy.endsWith("low)") || sortBy.endsWith("A)")) {
				appDispatch(
					setUrl(
						`${initialUrl}${currentPage}${L8T}${currentSearchValue}${C}${activeCategory}${S}${
							sortBy.split(" ")[0]
						}${DESC}`,
					),
				);
			} else if (sortBy.endsWith("high)") || sortBy.endsWith("Z)")) {
				appDispatch(
					setUrl(
						`${initialUrl}${currentPage}${L8T}${currentSearchValue}${C}${activeCategory}${S}${
							sortBy.split(" ")[0]
						}${ASC}`,
					),
				);
			}
		}
	};

	// eslint-disable-next-line react-hooks/exhaustive-deps
	const updateSearchValue = useCallback(
		debounce((str: string) => {
			appDispatch(setSearchValue(str));
			getSearch(str);
		}),
		[],
	);

	function handleSearch(e: React.ChangeEvent<HTMLInputElement>): void {
		appDispatch(setInputValue(e.target.value));
		updateSearchValue(e.target.value);
	}

	const handleGetCategory = (e: React.MouseEvent<HTMLLIElement, MouseEvent>): void => {
		const li: HTMLLIElement = e.target as HTMLLIElement;

		if (categories.some((category) => category.toLowerCase() === li.dataset.category)) {
			appDispatch(setActiveCategory(li.dataset!.category!));

			if (li.dataset.category!.toLowerCase() === "all") {
				if (sortBy.endsWith("low)") || sortBy.endsWith("A)")) {
					appDispatch(setUrl(`${initialUrl}${currentPage}${L8S}${sortBy.split(" ")[0]}${DESC}`));
				} else if (sortBy.endsWith("high)") || sortBy.endsWith("Z)")) {
					appDispatch(setUrl(`${initialUrl}${currentPage}${L8S}${sortBy.split(" ")[0]}${ASC}`));
				}
			} else {
				if (sortBy.endsWith("low)") || sortBy.endsWith("A)")) {
					appDispatch(
						setUrl(
							`${initialUrl}${currentPage}${L8S}${sortBy.split(" ")[0]}${F}${
								li.dataset.category
							}${DESC}`,
						),
					);
				} else if (sortBy.endsWith("high)") || sortBy.endsWith("Z)")) {
					appDispatch(
						setUrl(
							`${initialUrl}${currentPage}${L8S}${sortBy.split(" ")[0]}${F}${
								li.dataset.category
							}${ASC}`,
						),
					);
				}
			}
		}
	};

	const handleGetSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
		appDispatch(setSortBy(e.target.value));

		if (activeCategory.toLowerCase() === "all" && searchValue.toLowerCase() === "") {
			if (e.target.value.endsWith("low)") || e.target.value.endsWith("A)")) {
				appDispatch(
					setUrl(`${initialUrl}${currentPage}${L8S}${e.target.value.split(" ")[0]}${DESC}`),
				);
			} else if (e.target.value.endsWith("high)") || e.target.value.endsWith("Z)")) {
				appDispatch(
					setUrl(`${initialUrl}${currentPage}${L8S}${e.target.value.split(" ")[0]}${ASC}`),
				);
			}
		} else {
			if (e.target.value.endsWith("low)") || e.target.value.endsWith("A)")) {
				appDispatch(
					setUrl(
						`${initialUrl}${currentPage}${L8C}${activeCategory}&sortBy=${
							e.target.value.split(" ")[0]
						}${DESC}`,
					),
				);
			} else if (e.target.value.endsWith("high)") || e.target.value.endsWith("Z)")) {
				appDispatch(
					setUrl(
						`${initialUrl}${currentPage}${L8C}${activeCategory}&sortBy=${
							e.target.value.split(" ")[0]
						}${ASC}`,
					),
				);
			}
		}
	};

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
						handleGetCategory={(e) => handleGetCategory(e)}
					/>
					<SortPanel sortBy={sortBy} handleGetSelect={(e) => handleGetSelect(e)} />
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

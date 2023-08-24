// IT IS NOT MY FAULT THAT FILTER COMAND of mock.API
// IS NOT WORKING CORRECTLY WHENE I AM PASSING TWO AND MORE
// CONDITIONS...
// I'AM DOING EVERYTHING AS IT DESCRIBED IN THE DOCS OF mock.API
// BUT & OPERATOR NOT OPERATING AS IT MUST. IT IS CHECKING ONLY
// FIRST PASSED CONDITION...

import { ActionCreatorWithPayload, Dispatch } from "@reduxjs/toolkit";

const getSearch = (
	currentSearchValue: string,
	activeCategory: string,
	sortBy: string,
	appDispatch: Dispatch,
	setUrl: ActionCreatorWithPayload<string>,
	initialUrl: string,
	currentPage: number,
): void => {
	const DESC: string = "&order=desc";
	const ASC: string = "&order=asc";
	const L8T: string = "&limit=8&title=";
	const S: string = "&sortBy=";
	const C: string = "&category=";

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
					`${initialUrl}${currentPage}${L8T}${currentSearchValue}${S}${sortBy.split(" ")[0]}${ASC}`,
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

export default getSearch;

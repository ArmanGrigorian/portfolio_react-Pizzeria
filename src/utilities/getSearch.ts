// IT IS NOT MY FAULT THAT FILTER COMAND of mock.API
// IS NOT WORKING CORRECTLY WHENE I AM PASSING TWO AND MORE
// CONDITIONS...
// I'AM DOING EVERYTHING AS IT DESCRIBED IN THE DOCS OF mock.API
// BUT & OPERATOR NOT OPERATING AS IT MUST. IT IS CHECKING ONLY
// FIRST PASSED CONDITION...

import { ActionCreatorWithPayload } from "@reduxjs/toolkit";

const getSearch = (
	currentSearchValue: string,
	activeCategory: string,
	sortBy: string,
	dispatch,
	setUrl: ActionCreatorWithPayload<string>,
	initialUrl: string,
	currentPage: number,
): void => {
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
};

export default getSearch;

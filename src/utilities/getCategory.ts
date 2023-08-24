import { ActionCreatorWithPayload } from "@reduxjs/toolkit";

const handleGetCategory = (
	e: React.MouseEvent<HTMLLIElement>,
	categories: string[],
	dispatch,
	setActiveCategory: ActionCreatorWithPayload<string>,
	setUrl: ActionCreatorWithPayload<string>,
	sortBy: string,
	initialUrl: string,
	currentPage: number,
): void => {
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
	}
};

export default handleGetCategory;

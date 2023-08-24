import { ActionCreatorWithPayload, Dispatch } from "@reduxjs/toolkit";

const handleGetCategory = (
	e: React.MouseEvent<HTMLLIElement, MouseEvent>,
	categories: string[],
	appDispatch: Dispatch,
	setActiveCategory: ActionCreatorWithPayload<string>,
	setUrl: ActionCreatorWithPayload<string>,
	sortBy: string,
	initialUrl: string,
	currentPage: number,
): void => {
	const DESC: string = "&order=desc";
	const ASC: string = "&order=asc";
	const L8S: string = "&limit=8&sortBy=";
	const F: string = "&filter=";

	if (categories.some((category) => category.toLowerCase() === e.target.dataset.category)) {
		appDispatch(setActiveCategory(e.target.dataset.category));

		if (e.target.dataset.category.toLowerCase() === "all") {
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
							e.target.dataset.category
						}${DESC}`,
					),
				);
			} else if (sortBy.endsWith("high)") || sortBy.endsWith("Z)")) {
				appDispatch(
					setUrl(
						`${initialUrl}${currentPage}${L8S}${sortBy.split(" ")[0]}${F}${
							e.target.dataset.category
						}${ASC}`,
					),
				);
			}
		}
	}
};

export default handleGetCategory;

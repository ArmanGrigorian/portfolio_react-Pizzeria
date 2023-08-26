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

export default handleGetCategory;

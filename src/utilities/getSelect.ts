import { ActionCreatorWithPayload, Dispatch } from "@reduxjs/toolkit";

const handleGetSelect = (
	e: React.ChangeEvent<HTMLSelectElement>,
	appDispatch: Dispatch,
	setSortBy: ActionCreatorWithPayload<string>,
	activeCategory: string,
	searchValue: string,
	setUrl: ActionCreatorWithPayload<string>,
	initialUrl: string,
	currentPage: number,
) => {
	const DESC: string = "&order=desc";
	const ASC: string = "&order=asc";
	const L8S: string = "&limit=8&sortBy=";
	const L8C: string = "&limit=8&category=";

	appDispatch(setSortBy(e.target.value));

	if (activeCategory.toLowerCase() === "all" && searchValue.toLowerCase() === "") {
		if (e.target.value.endsWith("low)") || e.target.value.endsWith("A)")) {
			appDispatch(
				setUrl(`${initialUrl}${currentPage}${L8S}${e.target.value.split(" ")[0]}${DESC}`),
			);
		} else if (e.target.value.endsWith("high)") || e.target.value.endsWith("Z)")) {
			appDispatch(setUrl(`${initialUrl}${currentPage}${L8S}${e.target.value.split(" ")[0]}${ASC}`));
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
export default handleGetSelect;

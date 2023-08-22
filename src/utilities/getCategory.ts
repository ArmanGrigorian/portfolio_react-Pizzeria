export function handleGetCategory(
	e,
	categories: string[],
	dispatch,
	setActiveCategory,
	setUrl,
	sortBy: string,
	initialUrl: string,
	currentPage: number) {
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

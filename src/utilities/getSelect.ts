export function handleGetSelect(
	e,
	dispatch: () => void,
	setSortBy: () => string,
	activeCategory: string,
	searchValue: string,
	setUrl: () => string,
	initialUrl: string,
	currentPage: number,
) {
	dispatch(setSortBy(e.target.value));

	if (activeCategory.toLowerCase() === "all" && searchValue.toLowerCase() === "") {
		if (e.target.value.endsWith("low)") || e.target.value.endsWith("A)")) {
			dispatch(
				setUrl(
					`${initialUrl}${currentPage}&limit=8&sortBy=${e.target.value.split(" ")[0]}&order=desc`,
				),
			);
		} else if (e.target.value.endsWith("high)") || e.target.value.endsWith("Z)")) {
			dispatch(
				setUrl(
					`${initialUrl}${currentPage}&limit=8&sortBy=${e.target.value.split(" ")[0]}&order=asc`,
				),
			);
		}
	} else {
		if (e.target.value.endsWith("low)") || e.target.value.endsWith("A)")) {
			dispatch(
				setUrl(
					`${initialUrl}${currentPage}&limit=8&category=${activeCategory}&sortBy=${
						e.target.value.split(" ")[0]
					}&order=desc`,
				),
			);
		} else if (e.target.value.endsWith("high)") || e.target.value.endsWith("Z)")) {
			dispatch(
				setUrl(
					`${initialUrl}${currentPage}&limit=8&category=${activeCategory}&sortBy=${
						e.target.value.split(" ")[0]
					}&order=asc`,
				),
			);
		}
	}
}

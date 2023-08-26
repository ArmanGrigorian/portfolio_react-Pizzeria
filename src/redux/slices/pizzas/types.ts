export enum Status {
	LOADING = "loading",
	PENDING = "pending",
	FULFILLED = "fulfilled",
	REJECTED = "rejected",
}

export type Tpizzas = {
	id: string;
	sizes: string[];
	doughs: string[];
	imgSrc: string;
	imgAlt: string;
	title: string;
	price: number;
};

export interface IinitialStatePizza {
	initialUrl: string;
	url: string;
	currentPage: number;
	status: Status;
	isLoading: boolean;
	pizzas: object | Tpizzas[];
	activeCategory: string;
	sortBy: string;
	inputValue: string;
	searchValue: string;
}

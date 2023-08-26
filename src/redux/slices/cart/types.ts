export type TcartItem = {
	id: string;
	title: string;
	price: number;
	imgSrc: string;
	imgAlt: string;
	sizes: string;
	doughs: string;
	count: number;
	currentTotalCount: number;
};

export interface IinitialStateCart {
	totalPrice: number;
	totalCount: number;
	items: TcartItem[];
}

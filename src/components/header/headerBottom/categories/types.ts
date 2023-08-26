export type TcategoriesPanelProps = {
	categories: string[];
	activeCategory: string;
	handleGetCategory: (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => void;
};

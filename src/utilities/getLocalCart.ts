import { IinitialStateCart } from "../redux/slices/cart/types.ts";
import calcTotalCount from "./calcTotalCount";
import calcTotalPrice from "./calcTotalPrice";


const getLocalCart = (): IinitialStateCart => {
	const data: string | null = localStorage.getItem("localCart");
	const result = {
		totalPrice: data ? calcTotalPrice(JSON.parse(data)) : 0,
		totalCount: data ? calcTotalCount(JSON.parse(data)) : 0,
		items: data ? JSON.parse(data) : [],
	};
	return result;
};

export default getLocalCart;

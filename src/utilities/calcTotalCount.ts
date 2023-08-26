import { TcartItem } from "../redux/slices/cart/types.ts";

const calcTotalCount = (items: TcartItem[]): number => {
	return items.reduce((sum: number, obj): number => {
		return obj.count + sum;
	}, 0);
};

export default calcTotalCount;

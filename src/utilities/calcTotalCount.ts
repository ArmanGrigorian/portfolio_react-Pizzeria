import { TcartItem } from "../redux/slices/cartSlice";

const calcTotalCount = (items: TcartItem[]): number => {
	return items.reduce((sum: number, obj): number => {
		return obj.count + sum;
	}, 0);
};

export default calcTotalCount;
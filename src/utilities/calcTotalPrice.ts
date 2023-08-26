import { TcartItem } from "../redux/slices/cartSlice";

const calcTotalPrice = (items: TcartItem[]): number => {
	return items.reduce((sum: number, obj): number => {
		return obj.count * obj.price + sum;
	}, 0);
};

export default calcTotalPrice;

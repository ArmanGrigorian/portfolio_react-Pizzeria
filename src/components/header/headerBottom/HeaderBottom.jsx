import "./HeaderBottom.scss";
import Categories from "./categories/Categories";
import Sort from "./sort/Sort";

export default function HeaderBottom() {
	return (
		<div className="headerBottom">
			<Categories />
			<Sort />
		</div>
	);
}

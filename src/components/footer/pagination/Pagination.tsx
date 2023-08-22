import "./Pagination.scss";
import PropTypes from "prop-types";
import ReactPaginate from "react-paginate";

export default function Pagination({ handlePage }) {
	return (
		<>
			<ReactPaginate
				className="pagination"
				breakLabel="..."
				nextLabel=">"
				previousLabel="<"
				onPageChange={(e) => handlePage(e)}
				pageRangeDisplayed={2}
				pageCount={2}
				initialPage={0}
				renderOnZeroPageCount={null}
			/>
		</>
	);
}

Pagination.propTypes = {
	handlePage: PropTypes.func,
};

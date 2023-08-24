import React from "react";
import "./Pagination.scss";
import ReactPaginate from "react-paginate";

type PaginationProps = {
	handlePage: (e: { selected: number }) => void;
};

const Pagination: React.FC<PaginationProps> = ({
	handlePage,
}): JSX.Element => {
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
};

export default Pagination;

import React from "react";
import "./Pagination.scss";
import ReactPaginate from "react-paginate";

const Pagination: React.FC<{handlePage: (e: {selected:number})=>number}>=({ handlePage })=> {
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

export default Pagination;

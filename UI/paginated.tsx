import React, { useState } from "react";
import ReactPaginate from 'react-paginate';
import styles from './paginated.module.css'
import styled from "styled-components";


const PaginatedItems:React.FC<{items:any, children:any, headerChildren:any}> = (props) => {
    const [itemOffset, setItemOffset] = useState(0);
    let itemsPerPage = 10
  
    const items = props.items
    const endOffset = itemOffset + itemsPerPage;
    const currentItems = items.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(items.length / itemsPerPage);
  
    // Invoke when user click to request another page.
    const handlePageClick = (event:any) => {
      const newOffset = (event.selected * itemsPerPage) % items.length;
      setItemOffset(newOffset);
}

return(
    <>
        <table className="table table-report sm:mt-2">
            {props.headerChildren}
            {currentItems &&
                currentItems?.map((item:any, index:number) => (
                    props.children(item)
                ))
            }
        </table>
        <ReactPaginate
            breakLabel="..."
            nextLabel="Next >"
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            previousLabel="< Previous"
            renderOnZeroPageCount={null}
            containerClassName="pagination justify-content-center"
            pageClassName="page-item"
            pageLinkClassName="page-link"
            previousClassName="page-item"
            previousLinkClassName="page-link"
            nextClassName="page-item"
            nextLinkClassName="page-link"
            activeClassName="active"
        />
    </>
)
}

export default PaginatedItems

import { useState } from "react";
import ReactPaginate from 'react-paginate';

const PaginatedItems:React.FC<{items:any, children:any}> = (props) => {
    const [itemOffset, setItemOffset] = useState(0);
    let itemsPerPage = 10
  
    const endOffset = itemOffset + itemsPerPage;
    const currentItems = props.items.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(props.items.length / itemsPerPage);
  
    // Invoke when user click to request another page.
    const handlePageClick = (event:any) => {
      const newOffset = (event.selected * itemsPerPage) % props.items.length;
      setItemOffset(newOffset);
}

return(
    <>
            {currentItems &&
                currentItems.map((item:any) => (
                    props.children(item)
            ))
            }
            <ReactPaginate
                breakLabel="..."
                nextLabel="next >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel="< previous"
                renderOnZeroPageCount={null}
            />
    </>
)
}

export default PaginatedItems

import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";

// const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

// function Items({ currentItems }) {
//     return (
//         <div className="items">
//             {currentItems && currentItems.map((item, index) => (
//                 <div key={index}>
//                     <h3>Item #{item}</h3>
//                 </div>
//             ))}
//         </div>
//     );
// }

function PaginatedItems({ itemsPerPage, items, emitCurrentItems }) {
  // We start with an empty list of items.
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setCurrentItems(items.slice(itemOffset, endOffset));
    emitCurrentItems(items.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(items.length / itemsPerPage));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [itemOffset, itemsPerPage]);

  // Invoke when user click to request another page.
  function handlePageClick(event) {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  }

  return (
    <>
      {/* <Items currentItems={currentItems} /> */}
      <ReactPaginate
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={pageCount}
        previousLabel="<"
        pageClassName="page__item"
        pageLinkClassName="page__link"
        previousClassName="page__prev"
        previousLinkClassName="page__link"
        nextClassName="page__next"
        nextLinkClassName="page__link"
        breakLabel="..."
        breakClassName="page__item"
        breakLinkClassName="page__link"
        containerClassName="pagination"
        activeClassName="active"
        renderOnZeroPageCount={null}
      />
    </>
  );
}

export default PaginatedItems;

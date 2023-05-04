import React from 'react'
import ReactPaginate from 'react-paginate'

interface Props {
    pageCount: number
}

export const Pagination = React.memo(({ pageCount }: Props) => {
    return (
        <ReactPaginate
            className="react-paginate"
            breakLabel="..."
            nextLabel="Next"
            pageRangeDisplayed={5}
            pageCount={pageCount}
            previousLabel="Prev"
            renderOnZeroPageCount={undefined}
            activeClassName="active"
        />
    )
})

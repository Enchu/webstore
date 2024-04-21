import React, {FC} from 'react';
import './pagination.style.scss'
import {getPageCount, getPagesArray} from "../../../utils/pages";
import {PaginationProps} from "../../../Interface/PaginationProps";

const Pagination: FC<PaginationProps> = ({totalPages, page, changePage}) => {
    let pagesArray = getPagesArray(totalPages)

    return (
        <div className='pagination__wrapper'>
            {
                pagesArray.map((p: number) => (
                    <span
                        onClick={() => changePage(p)}
                        key={p}
                        className={page === p ? 'page page__current' : 'page'}
                    >
                        {p}
                    </span>
                ))
            }
        </div>
    );
};

export default Pagination;

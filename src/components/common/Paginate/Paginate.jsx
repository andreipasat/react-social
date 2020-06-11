import React from 'react'
import s from './Paginate.module.css';

export const Paginate = ({totalCount, currentPage, pageSize, onPageChanged}) => {
    let pagesCount = Math.ceil( totalCount / pageSize);
    let pages = [];
    for (let i =1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return (
        <div>
            {
                pages.map(p => {
                    return <span className={currentPage === p && s.selectedPage} 
                    onClick={ (e) => { onPageChanged(p) } }>{p}</span>
                })
            }
        </div>
    )
}
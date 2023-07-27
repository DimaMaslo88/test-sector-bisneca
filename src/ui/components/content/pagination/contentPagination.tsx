import React from 'react';
import style from 'styles/pagination.module.scss'
import {useAppDispatch} from "bll/store";
import {setCurrentPage} from "bll/actions/posts-actions";
import {ContentPaginationType} from "types/types";


export const ContentPagination = ({totalPosts, elementOnPage, currentPage}: ContentPaginationType) => {
    const dispatch = useAppDispatch()
    const totalPages = totalPosts / elementOnPage
    const pages = []
    for (let i = 1; i <= totalPages; i += 1) {
        pages.push(i)
        console.log(pages)
    }
    const nextPageHandler = () => dispatch(setCurrentPage(currentPage + 1))
    const prevPageHandler = () => dispatch(setCurrentPage(currentPage - 1))
    const prevDisabled = currentPage <= 1
    const nextDisabled = currentPage >= 10
    return (
        <div className={style.paginationContainer}>
            <button onClick={prevPageHandler} disabled={prevDisabled} className={style.button}>Назад</button>
            <div className={style.pagination}>
                {pages.map((page) => {
                    return <span key={page}
                                 className={currentPage === page ? style.numberActive : style.numbers}>{page}</span>
                })}

            </div>
            <button onClick={nextPageHandler} disabled={nextDisabled} className={style.button}>Далее</button>

        </div>

    );
};




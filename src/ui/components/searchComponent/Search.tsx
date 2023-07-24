import SearchIcon from 'images/searchIcon';
import React from 'react';
import style from 'styles/searchContainer.module.scss'

export const Search = () => {
    return (
        <div className={style.searchContainer}>

            <input
                className={style.input}
                placeholder='Поиск'
                type='text'
            />
            <div className={style.icon}>
            <SearchIcon
                width={21}
                height={21}
            />
            </div>
        </div>
    );
};






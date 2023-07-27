import SearchIcon from 'images/searchIcon';
import React, {ChangeEvent, useState} from 'react';
import style from 'styles/searchContainer.module.scss'
import {useAppDispatch} from "bll/store";
import {searchCurrentValue} from "bll/actions/posts-actions";

export const Search = () => {

    const dispatch = useAppDispatch()
    const [value, setValue] = useState('')
        const onChangeValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }
    const onSearchHandler = () => {
        dispatch(searchCurrentValue(value))
    }
    return (
        <div className={style.searchContainer}>

            <input
                value={value}
                onChange={onChangeValueHandler}
                className={style.input}
                placeholder='Поиск'
                type='text'
            />
            <div className={style.icon}>
                <SearchIcon
                    width={21}
                    height={21}
                    onClick={onSearchHandler}
                    style={{cursor:'pointer'}}
                />
            </div>
        </div>
    );
};






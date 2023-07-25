import React from 'react';
import {useSelector} from "react-redux";
import {selectPage, selectPagesElements} from "bll/selectors/Selectors";

export const ContentPagination = () => {
    const currentPage = useSelector(selectPage)
    const postElements = useSelector(selectPagesElements)

    return (
        <div>
            123
        </div>
    );
};



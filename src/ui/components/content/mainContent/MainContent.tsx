import React from 'react';
import {useSelector} from "react-redux";
import {selectPosts} from "bll/selectors/Selectors";
import {PostsType} from "types/types";
import style from 'styles/postsContainer.module.scss'

export const MainContent = () => {
    const posts = useSelector(selectPosts)
    return (
        <div>
            {posts.map(({id, title, body}: PostsType) => (
                    <tr key={id} className={style.tr}>
                       <td className={style.columnID}>{id}</td>
                        <td className={style.column}>{title}</td>
                        <td className={style.column}>{body}</td>
                    </tr>
                )
            )}
        </div>
    );
};


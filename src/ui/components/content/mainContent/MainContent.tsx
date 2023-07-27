import React from 'react';
import {useSelector} from "react-redux";
import {selectPage, selectPagesElements, selectPosts} from "bll/selectors/Selectors";
import {MainContentType, PostsType} from "types/types";
import style from 'styles/postsContainer.module.scss'
import {ContentPagination} from "ui/components/content/pagination/contentPagination";




export const MainContent = ({sortId}:MainContentType) => {
    const posts = useSelector(selectPosts)
    const elementOnPage =useSelector(selectPagesElements)
    const currentPage = useSelector(selectPage)
    const postsNumber = posts.length
    const lastPostIndex = currentPage * elementOnPage
    const firstPostIndex = lastPostIndex - elementOnPage
    const currentPosts = posts.slice(firstPostIndex,lastPostIndex)
    const sortingPosts = [...currentPosts].sort((a,b)=>{
        return b.id-a.id
    })

if(!sortId){
    return (
        <div>
            <table>
                <tbody className={style.tbody}>
                {currentPosts.map(({id, title, body}: PostsType) => (
                        <tr key={id} className={style.tr}>
                            <td className={style.columnID}>{id}</td>
                            <td className={style.column}>{title}</td>
                            <td className={style.column}>{body}</td>
                        </tr>
                    )
                )}
                </tbody>
            </table>
            <ContentPagination totalPosts={postsNumber} elementOnPage={elementOnPage} currentPage={currentPage}/>
        </div>
    )

}
    return (

        <div>
            <div>
                {sortingPosts.map(({id, title, body}: PostsType) => (
                        <tr key={id} className={style.tr}>
                            <td className={style.columnID}>{id}</td>
                            <td className={style.column}>{title}</td>
                            <td className={style.column}>{body}</td>
                        </tr>
                    )
                )}
            </div>
            <ContentPagination totalPosts={postsNumber} elementOnPage={elementOnPage} currentPage={currentPage}/>
        </div>
    );




};


import React, {useState} from 'react';
import style from 'styles/postsContainer.module.scss'
import {MainContent} from "ui/components/content/mainContent/MainContent";
import Group from "images/group";


export const PostsContent = () => {

    const [sortPosts, setSortPost] = useState(false)

    const sortHandler = () => {
        setSortPost(!sortPosts)

    }
    return (
        <div>
            <div className={style.headerContainer}>
                <div className={style.title}> ID <Group onClick={sortHandler} style={{cursor: 'pointer'}}/></div>
                <div className={style.title}>Заголовок <Group onClick={sortHandler} style={{cursor: 'pointer'}}/></div>
                <div className={style.title}> Описание <Group onClick={sortHandler} style={{cursor: 'pointer'}}/></div>
            </div>
            <MainContent sortId={sortPosts}/>
        </div>
    );
};


import React from 'react';
import style from 'styles/postsContainer.module.scss'
import {MainContent} from "ui/components/content/mainContent/MainContent";
import Group from "images/group";
import {ContentPagination} from "ui/components/content/pagination/contentPagination";


export const PostsContent = () => {

    return (
        <div >
            <div className={style.headerContainer}>
               <div className={style.title}> ID <Group/></div>
               <div className={style.title}>Заголовок <Group/></div>
               <div className={style.title}> Описание <Group/></div>
            </div>
            <MainContent/>
            <ContentPagination/>
        </div>
    );
};


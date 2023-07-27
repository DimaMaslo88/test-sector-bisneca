import React, {useEffect} from 'react';
import {PostsContent} from "ui/components/content/header/PostsContent";
import style from 'styles/postsContainer.module.scss'
import {GetPosts} from "bll/reducers/posts-peducer";
import {useAppDispatch} from "bll/store";

export const Content = () => {
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(GetPosts())
    }, [])
    return (
        <div className={style.postsContainer}>
            <PostsContent/>
        </div>
    );
};


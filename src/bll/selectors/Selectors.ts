import {AppStateType} from "bll/store";
import {PostsType} from "types/types";

export const selectPosts = (state:AppStateType):PostsType[]=>state.posts.posts
export const selectPage = (state:AppStateType):number => state.posts.page
export const selectPagesElements = (state:AppStateType):number => state.posts.pagesElements

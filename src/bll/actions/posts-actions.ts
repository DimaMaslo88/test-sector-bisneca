import {PostsType} from "types/types";

export type SetPostsType = ReturnType<typeof setPosts>
export const setPosts =(postData:PostsType[])=>({
type:"posts/SET-POSTS",
    postData
}as const)
export type SetCurrentPage = ReturnType<typeof setCurrentPage>
export const setCurrentPage = (page:number)=>({
    type:'posts/SET-CURRENT-PAGE',
    page
} as const)

import {PostsType} from "types/types";
import {SearchCurrentValueType, SetCurrentPageType, setPosts, SetPostsType} from "bll/actions/posts-actions";
import {AppThunkType} from "bll/store";
import {PostsApi} from "api/posts-api";

export const postsReducerInitialState = {
    posts: [],
    pagesElements: 10,
    page: 1
}
export type PostsReducerType = {
    posts: PostsType[]
    pagesElements: number
    page: number
}
export type PostsReducerActionType = SetPostsType
    | SetCurrentPageType
    | SearchCurrentValueType

export const PostsReducer = (state: PostsReducerType = postsReducerInitialState, action: PostsReducerActionType): PostsReducerType => {
    switch (action.type) {
        case "posts/SET-POSTS": {
            return {...state, posts: [...state.posts, ...action.postData]}
        }
        case "posts/SET-CURRENT-PAGE": {
            return {...state, page: action.page}
        }
        case "posts/SEARCH-CURRENT-VALUE": {

            return {
                ...state,
                posts: state.posts.filter(post => post.title.includes(action.value) || post.body.includes(action.value))
            }
        }

        default: {
            return state;
        }
    }
}


export const GetPosts = (): AppThunkType => async (dispatch) => {
    try {
        const res = await PostsApi.getPosts()
        console.log(res.data)
        dispatch(setPosts(res.data))
    } catch (err) {
        console.log(err)
    }
}

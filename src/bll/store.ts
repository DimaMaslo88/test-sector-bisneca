import {legacy_createStore as createStore, combineReducers, applyMiddleware} from "redux";
import thunk, {ThunkAction, ThunkDispatch} from "redux-thunk";
import {PostsReducer, PostsReducerActionType} from "bll/reducers/posts-peducer";
import {useDispatch} from "react-redux";

export const rootReducer = combineReducers({
    posts: PostsReducer
})
export const store = createStore(rootReducer, applyMiddleware(thunk))
export type AppStateType = ReturnType<typeof rootReducer>
export type ActionStateType = PostsReducerActionType
export type AppDispatch = ThunkDispatch<AppStateType,
    undefined,
    ActionStateType>;
export const useAppDispatch = (): AppDispatch => useDispatch<AppDispatch>()

export type AppThunkType<ReturnType = void> = ThunkAction<ReturnType,
    AppStateType,
    undefined,
    ActionStateType>;
// @ts-ignore
window.store = store

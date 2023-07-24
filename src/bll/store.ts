import {legacy_createStore as createStore, combineReducers, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {PostsReducer} from "bll/reducers/posts-peducer";

export const rootReducer = combineReducers({
    posts: PostsReducer
})
export const store = createStore(rootReducer, applyMiddleware(thunk))

// @ts-ignore
window.store = store

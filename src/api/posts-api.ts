import {instance} from "api/instance";

export const PostsApi={
    getPosts(){
        return instance.get('posts')
    }
}

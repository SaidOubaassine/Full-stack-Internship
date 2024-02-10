import {SET_POSTS } from "../actions/posts"
import {SET_POST} from "../actions/posts"

const initialState = {
    posts: [],
    post: {}
};

export default (state = initialState, action) => {
    switch(action.type){
        case SET_POSTS:
            return {
                posts : action.posts
            }
        case SET_POST:
            return {
                post: action.post
            }
    }
    return state;
}
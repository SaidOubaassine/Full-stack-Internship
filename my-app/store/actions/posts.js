export const SET_POSTS = "SET_POSTS";
export const SET_POST = "SET_POST";

import Post from "../../models/posts";

export const fetchPosts = () => {
    return async (dispatch) => {
      try {
        const response = await fetch(
          'http://jsonplaceholder.typicode.com/posts'
        );
        if (!response.ok) {
          throw new Error(
            "Something went wrong with fetching the data from the server!"
          );
        }
        const resData = await response.json();
        const loadedPosts = [];
        for (const key in resData) {
          loadedPosts.push(
            new Post(
              resData[key].id,
              resData[key].userId,
              resData[key].title,
              resData[key].body
            )
          );
        }
        dispatch({
          type: SET_POSTS,
          posts: loadedPosts,
        });
      } catch (err) {
        throw err;
      }
    };
  };

  export const fetchPost = (Id) => {
    return async (dispatch) => {
      try {
        const response = await fetch(
          `http://jsonplaceholder.typicode.com/posts/${Id}`
        );
        if (!response.ok) {
          throw new Error(
            "Something went wrong with fetching the data from the server!"
          );
        }
        const resData = await response.json();
        const loadedPost = resData;
        dispatch({
          type: SET_POST,
          post: loadedPost,
        });
      } catch (err) {
        throw err;
      }
    };
  };
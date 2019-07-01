import { FETCH_POSTS, CREATE_POST } from './types';
import { PostService } from './../services';

export const fetchPosts = () => async dispatch => {
    const { data } = await PostService.getAllPosts();
    dispatch({
        type: FETCH_POSTS,
        payload: data
    })
};

export const createPost = (post) => async dispatch => {
    const { data } = await PostService.addPost(post);
    if(data) {
       dispatch({
           type: CREATE_POST,
           payload: data
       });
    }
};

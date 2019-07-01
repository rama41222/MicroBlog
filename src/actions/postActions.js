import { FETCH_POSTS } from './types';
import { PostService } from './../services';

export const fetchPosts = () => async dispatch => {
    const { data } = await PostService.getAllPosts();
    dispatch({
        type: FETCH_POSTS,
        payload: data
    })
};

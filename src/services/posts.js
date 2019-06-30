import { apiClient } from './../utils';

const addPost = (post) => {
    return apiClient.post('', post).catch(console.log);
};

const getAllPosts = async () => {
    return apiClient.get().catch(console.log);
};

const getPost = (id) => {

};

const updatePost = (id, data) => {

};

const deletePost = (id) => {

};

export default {
    addPost,
    updatePost,
    deletePost,
    getAllPosts,
    getPost
}

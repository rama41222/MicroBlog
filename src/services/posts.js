import { apiClient } from './../utils';

const addPost = (post) => {

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

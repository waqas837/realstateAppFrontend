import axios from 'axios';
const postsUrl = 'http://localhost:8080/posts';

export const getPosts = async (id) => {
    id = id || '';
    return await axios.get(`${postsUrl}/${id}`);
}

export const addPost = async (posts) => {
    return await axios.post(`${postsUrl}/add`, posts);
}

export const deletePost = async (id) => {
    return await axios.delete(`${postsUrl}/${id}`);
}

export const editPost = async (id, post) => {
    return await axios.put(`${postsUrl}/${id}`, post)
}
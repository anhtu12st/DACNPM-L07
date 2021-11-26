import Axios from "./Axios";

export const createPost = async (form) => {
    const url = '/post';
    await Axios.post(url, form);
}
export const getPost = async () => {
    const url = '/post';
    const data = await Axios.get(url);
    return data;
}
export const getPostbyGroup = async (id) => {
    const url = `/post/group/${id}`;
    const data = await Axios.get(url);
    return data;
}
export const getPostbyUser = async (id) => {
    const url = `/post/user/${id}`;
    const data = await Axios.get(url);
    return data;
}
export const getPostById = async (id) => {
    const url = `/post/${id}`;
    const { data } = await Axios.get(url);
    return data;
}
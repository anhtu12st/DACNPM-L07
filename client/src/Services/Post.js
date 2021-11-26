import Axios from "./Axios";

export const createPost = async (form) => {
    const url = '/post';
    const response = await Axios.post(url, form);
    return response.data
}

export const getPost = async () => {
    const url = '/post';
    const response = await Axios.get(url);
    return response.data;
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
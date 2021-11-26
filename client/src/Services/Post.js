import Axios from "./Axios";

export const createPost = async (form) => {
    const url = '/post';
    await Axios.post(url, form);
}

export const listPosts = async () => {
    const url = '/post';
    const { data } = await Axios.get(url);
    return data;
}

export const listPostsByGroup = async () => {
    const url = '/postGroup';
    const { data } = await Axios.get(url);
    return data;
}
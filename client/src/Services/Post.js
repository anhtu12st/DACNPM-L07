import Axios from "./Axios";

export const createPost = async (form) => {
    const url = '/post';
    await Axios.post(url, form);
}

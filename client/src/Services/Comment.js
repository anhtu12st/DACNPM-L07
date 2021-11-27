import Axios from "./Axios";

export const createComment = async (postId, datax) => {
	const url = `/comment/${postId}`;
	const { data } = await Axios.post(url, datax);
	return data;
}

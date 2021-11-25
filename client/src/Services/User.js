import Axios from "./Axios";

export const verifyToken = async (userId) => {
  const url = `/auth/${userId}`;
  const { data } = await Axios.get(url);
  return data;
}

export const loginUser = async (form) => {
  const url = '/authenticate';
  const { data } = await Axios.post(url, form);
  return data;
}

export const signupUser = async (form) => {
  const url = '/signup';
  const { data } = await Axios.post(url, form);
  return data;
}

export const getUserInfo = async (userId) => {
  const url = `/user/${userId}`;
  const { data } = await Axios.get(url);
  return data;
}

export const updateUserInfo = async (userId, userInfo) => {
  const url = `/user/${userId}`;
  const { data } = await Axios.put(url, userInfo);
  return data;
}

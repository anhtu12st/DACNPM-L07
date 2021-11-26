import Axios from './Axios'

export const fetchGroupFollowing = async () => {
  const url = '/user/following';
  const { data } = await Axios.get(url);
  return data;
}
export const fetchTrendingGroup = async () => {
  const url = '/trendingGroup';
  const { data } = await Axios.get(url);
  return data;
}
export const createGroup = async (form) => {
  const url = '/group';
  const { data } = await Axios.post(url, form);
  return data;
}
export const getGroupByID = async (id) => {
  const url = `/group/${id}`;
  const { data } = await Axios.get(url);
  return data;
}

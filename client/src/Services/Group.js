import Axios from './Axios'

export const fetchGroupFollowing = async () => {
  const url = '/user/following';
  const { data } = await Axios.get(url);
  return data;
}

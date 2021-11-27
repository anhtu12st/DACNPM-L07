import Axios from './Axios'

export const upvotePost = async (postId) => {
  const url = `/votes/upvote/${postId}`
  const response = await Axios.post(url)
  return response.data
}

export const downvotePost = async (postId) => {
  const url = `/votes/downvote/${postId}`
  const response = await Axios.post(url)
  return response.data
}
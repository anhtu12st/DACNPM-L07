import Axios from './Axios'

export const upvotePost = (postId) => {
  const url = `/votes/upvote/${postId}`
  return Axios.post(url)
}

export const downvotePost = (postId) => {
  const url = `/votes/downvote/${postId}`
  return Axios.post(url)
}
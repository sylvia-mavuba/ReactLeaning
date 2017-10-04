import axios from 'axios';

let apiUrl = 'api/blog/posts'

export function loadPost(postId) {
  return axios.get(`${apiUrl}/${postId}`)
    .then(res => {
      return res.data
    })
    .error(err => {
      return err.status
    })
}
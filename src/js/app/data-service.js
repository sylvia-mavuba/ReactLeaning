import axios from 'axios';
const url = `https://pixabay.com/api/?key=6381345-1c26ecce17f4366448272111c&q=yellow+flowers&image_type=photo`;

export function getData(data, tags) {

  return axios.get(url)
    .then(res => {
      debugger
      data = res.data.hits
      Object.keys(data).map(key => {
        return tags = data[key].tags;
      })
    })
    .catch(err => {
      console.log(err)
    })
}
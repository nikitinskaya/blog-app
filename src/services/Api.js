import axios from 'axios'

export default () => {
  return axios.create({
    baseURL: `https://immense-headland-23951.herokuapp.com/api/`
  })
}

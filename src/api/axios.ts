import axios from 'axios'
import { history } from '@/router/history'

const http = axios.create({
  baseURL: 'http://127.0.0.1:4523/m1/1053879-0-default',
})

http.interceptors.response.use(
  (response) => {
    if (response.data !== '1') {
      history.push('/home')
    }
    return response
  },
  function (err) {
    return Promise.reject(err)
  }
)

export default http

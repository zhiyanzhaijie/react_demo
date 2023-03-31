import originAixos from 'axios'
import { message } from 'antd'

const axios = originAixos.create({
  baseURL: 'http://localhost:4000/',
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
  },
  withCredentials: true,
  timeout: 20000
})

axios.interceptors.response.use(
  response => {
    /*
      返回数据格式：

      successful response:
      {"flag": 0, "data": ""}

      unsuccessful response:
      {"flag": 1, "msg": "error"}
     */
    if (response.data && response.data.flag === 1) {
      const errorMsg = response.data.msg
      message.error(errorMsg)
      return Promise.reject(errorMsg)
    }
    return response.data
  },
  error => {
    return Promise.reject(error)
  }
)

export function get(url: string, data: any) {
  return axios.get(url, { params: data })
}

export function post(url: string, data: any) {
  return axios.post(url, data)
}

import axios from 'axios'
// axios 配置
axios.defaults.timeout = 5000
axios.defaults.baseURL = '/'
axios.defaults.headers.common['Content-Type'] = 'application/json;charset=UTF-8'
// POST传参序列化
axios
  .interceptors
  .request
  .use(req => {
    return req
  }, error => {
    return Promise.reject(error)
  })
// 返回状态判断
axios
  .interceptors
  .response
  .use(res => {
    if (res.status == 200 || res.status == 201) {
      return res
    } else {
      return Promise.reject(res)
    }
  }, error => {
    return Promise.reject(error)
  })

  export default function fetchData(query) {
    return axios.post('/graphql', {query}).then(res => res.data.data)
  }
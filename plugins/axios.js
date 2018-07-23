/*
 * @Author: terry 
 * @Date: 2018-07-18 16:51:42 
 * @Last Modified by: terryloveyan@gmail.com
 * @Last Modified time: 2018-07-23 22:47:40
 */

import axios from 'axios'
import config from '~/config'

const service = axios.create({
  baseURL: config.api.serverUrl
})

// 拦截器
service.interceptors.request.use(config => {
  return config
}, error => {
  return Promise.reject(error)
})

service.interceptors.response.use(response => {
  return response
}, error => {
  return Promise.reject(error)
})
export default service

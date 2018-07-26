/*
 * @Author: terry 
 * @Date: 2018-07-18 16:41:52 
 * @Last Modified by: terryloveyan@gmail.com
 * @Last Modified time: 2018-07-26 00:03:49
 */
const isProdMode = Object.is(process.env.NODE_ENV, 'production')
module.exports = {
  cdnUrl: isProdMode ? 'http://api.592php.com' : '',
  baseUrl: isProdMode ? 'http://localhost:8000/' : 'http://localhost:8000/',
  port: process.env.PORT || 3000,
  host: process.env.HOST || '127.0.0.1',
  api: {
    serverUrl: process.env.API_SERVER_URL || isProdMode ? 'http://api.592php.com/api' : 'http://localhost:8000/'
  },
}


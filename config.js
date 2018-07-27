/*
 * @Author: terry 
 * @Date: 2018-07-18 16:41:52 
 * @Last Modified by: terryloveyan@gmail.com
 * @Last Modified time: 2018-07-27 12:29:48
 */
const isProdMode = Object.is(process.env.NODE_ENV, 'production')
module.exports = {
  cdnUrl: isProdMode ? 'http://blog.592php.com' : '',
  baseUrl: isProdMode ? 'http://api.592php.com' : 'http://api.592php.com',
  port: process.env.PORT || 3000,
  host: process.env.HOST || '127.0.0.1',
  api: {
    serverUrl: process.env.API_SERVER_URL || isProdMode ? 'http://api.592php.com' : 'http://api.592php.com'
  },
}


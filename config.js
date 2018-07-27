/*
 * @Author: terry 
 * @Date: 2018-07-18 16:41:52 
 * @Last Modified by: terryloveyan@gmail.com
 * @Last Modified time: 2018-07-27 10:02:02
 */
const isProdMode = Object.is(process.env.NODE_ENV, 'production')
module.exports = {
  cdnUrl: isProdMode ? 'http://blog.592php.com' : '',
  baseUrl: isProdMode ? 'http://api.592php.com' : 'http://api.592php.com',
  port: process.env.PORT || 3000,
  host: process.env.HOST || '127.0.0.1',
  api: {
    serverUrl: process.env.API_SERVER_URL || isProdMode ? 'http://blog.592php.com' : 'http://blog.592php.com'
  },
}


/*
 * @Author: terry 
 * @Date: 2018-07-18 16:41:52 
 * @Last Modified by: terryloveyan@gmail.com
 * @Last Modified time: 2018-07-24 14:57:22
 */

module.exports = {
  // Node.js app
  port: process.env.PORT || 3106,
  host: process.env.HOST || '127.0.0.1',
  api: {
    serverUrl: process.env.API_SERVER_URL || `http://localhost:8000`,
  },

};

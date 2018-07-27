/*
 * @Author: terry 
 * @Date: 2018-07-27 14:13:00 
 * @Last Modified by:   terryloveyan@gmail.com 
 * @Last Modified time: 2018-07-27 14:13:00 
 */

module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps: [

    // First application
    {
      name: 'web',
      script: 'server.js',
      node_args: '--harmony',
      env: {
        NODE_ENV: 'production'
        // production: true
      },
      env_production: {
        NODE_ENV: 'production'
      }
    }
  ]
}
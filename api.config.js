
const isProdMode = Object.is(process.env.NODE_ENV, 'production')

module.exports = {
  cdnUrl: isProdMode ? 'https://cdn.592php.com' : '',
  baseUrl: isProdMode ? 'https://api.592php.com/' : 'http://localhost:8000/',
  socketHost: isProdMode ? 'http://www.592php.com' : 'http://localhost:3000'
}

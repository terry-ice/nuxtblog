import express from 'express'
import { Nuxt, Builder } from 'nuxt'
import bodyParser from 'body-parser';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import schema from './apollo/schema'
const app = express()
const host = process.env.HOST || '127.0.0.1'
const port = process.env.PORT || 3000
app.set('port', port)

app.use('/graphqli', bodyParser.json(), graphqlExpress({ schema }));
app.use('/graphql', graphiqlExpress({ endpointURL: '/graphqli' }));

// Import and Set Nuxt.js options
let config = require('./nuxt.config.js')
config.dev = !(process.env.NODE_ENV === 'production')

// Init Nuxt.js
const nuxt = new Nuxt(config)

// Build only in dev mode
if (config.dev) {
  const builder = new Builder(nuxt)
  builder.build()
}

// Give nuxt middleware to express
app.use(nuxt.render)

// 监听指定端口
app.listen(port, host)
console.log('Server listening on ' + host + ':' + port) // eslint-disable-line no-console

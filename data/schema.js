import { merge } from 'lodash'
import { makeExecutableSchema } from 'graphql-tools'
const isProdMode = Object.is(process.env.NODE_ENV, 'production')
// import {
//   schema as graphqlSchema,
//   resolvers as graphqlResolvers,
//   mutations as graphqlMutations,
//   queries as graphqlQueries
// } from './graphql'
import * as graphql from './graphql';
const RootQuery = [
  `
  # # Querying API
  type RootQuery {
    ${graphql.queries}
  }
`
]
const Mutation = [
  `
  # # Mutating API
  type Mutation {
    ${graphql.mutations}
  }
`
]
const SchemaDefinition = [
  `
  schema {
    query: RootQuery
    mutation: Mutation
  }
`
]
const schema = [
  ...SchemaDefinition,
  ...RootQuery,
  ...Mutation,
  ...graphql.schema
]

export default makeExecutableSchema({
  typeDefs: schema,
  resolvers: graphql.resolvers,
  ...(true ? { log: e => console.error(e.stack) } : {})
})

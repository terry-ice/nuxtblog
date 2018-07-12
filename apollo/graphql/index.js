import { merge } from 'lodash'
/** * Queries ** */
import {
  schema as querieschema,
  queries as Queries,
  resolvers as querieResolver
} from './queries'
/** * Mutation ** */
import {
  schema as mutationschema,
  mutation as Mutation,
  resolvers as mutationResolvers
} from './mutation'

export const schema = [
  ...querieschema,
  ...mutationschema
]
export const queries = [
  ...Queries
]
export const mutations = [
   ...Mutation
]
export const resolvers = merge(
  querieResolver,
  mutationResolvers
)

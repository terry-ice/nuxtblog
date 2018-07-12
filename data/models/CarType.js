/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import {GraphQLObjectType as ObjectType, GraphQLID as ID, GraphQLString as StringType, GraphQLList as ListType} from 'graphql';

export default new ObjectType({
  name: 'Car',
  fields: {
    id: {
      type: ID
    },
    manufacturer: {
      type: StringType
    },
    model: {
      type: StringType
    },
    version: {
      type: StringType
    },
    start_year: {
      type: StringType
    },
    end_year: {
      type: StringType
    },
    picture_urls: {
      type: new ListType(StringType)
    },
    desc: {
      type: StringType
    }
  }
})

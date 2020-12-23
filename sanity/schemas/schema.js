import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

import library from './library'
import project from './project'
import skill from './skill'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([library, project, skill]),
})

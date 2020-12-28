import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

import education from './education'
import image from './image'
import project from './project'
import skill from './skill'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([education, image, project, skill]),
})

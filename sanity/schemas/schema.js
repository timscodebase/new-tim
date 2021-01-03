import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

import author from './author'
import blockContent from './blockContent'
import category from './category'
import education from './education'
import post from './post'
import project from './project'
import skill from './skill'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    author,
    blockContent,
    category,
    education,
    post,
    project,
    skill,
  ]),
})
